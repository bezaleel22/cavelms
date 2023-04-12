package auth

import (
	"errors"
	"fmt"
	"net/http"
	"os"
	"strings"
	"time"

	"github.com/cavelms/internal/model"
	"github.com/cavelms/pkg/mail"
	"github.com/cavelms/pkg/utils"
	"github.com/gin-gonic/gin"
)

func (a *auth) SignUp(u *model.NewUser) (*model.User, error) {
	hash, err := utils.EncryptPassword(u.Password)
	if err != nil {
		return nil, err
	}

	user := &model.User{
		FirstName:    u.FirstName,
		LastName:     u.LastName,
		Email:        u.Email,
		PasswordHash: hash,
	}

	err = a.DB.Create(user)
	if err != nil {
		return nil, err
	}

	code := utils.GenerateVerificationCode() // 6070
	a.sendCode(user, code, "/activate")

	return user, nil
}

func (a *auth) SignIn(u *model.NewUser) (*model.User, error) {
	user := new(model.User)
	user.Email = u.Email
	err := a.DB.FetchByEmail(user)
	if err != nil {
		return nil, err
	}

	isCorrect := utils.CheckPassword(user.PasswordHash, u.Password)
	if !isCorrect {
		return nil, utils.ErrAuthenticationFailure
	}

	t, err := JWTAuthService().GenerateToken(*user, true)
	if err != nil {
		return nil, err
	}

	a.setCookie(t)

	user.Token = t.AccessToken
	user.LoggedIn = true
	user.TokenExpiredAt = t.AccessExpiresAt / int64(time.Second)
	return user, nil
}

func (a *auth) SignOut() error {
	user := &model.User{}
	http.SetCookie(a.Writer, &http.Cookie{
		Name:     "token",
		Value:    "",
		HttpOnly: true,
		Expires:  time.Now().Add(-time.Hour),
	})

	user.Token = ""
	user.LoggedIn = false
	err := a.DB.UpdateOne(user)
	if err != nil {
		return err
	}

	return nil
}

func (a *auth) RefreshToken(token string) (*model.User, error) {
	jwt := JWTAuthService()
	claims, err := jwt.ValidateRefreshToken(token)
	if err != nil {
		return nil, err
	}

	user := model.User{
		ID:    claims["userId"].(string),
		Email: claims["email"].(string),
		Role:  []model.Role{model.Role(claims["email"].(string))},
	}

	err = a.DB.FetchByID(&user)
	if err != nil {
		return nil, err
	}

	t, err := jwt.GenerateToken(user, false)
	if err != nil {
		return nil, err
	}

	user.Token = t.AccessToken
	user.TokenExpiredAt = t.AccessExpiresAt / int64(time.Second)
	return &user, nil
}

func (a *auth) VerifyEmail(verify *model.VerifyInput) (*model.User, error) {
	user := &model.User{}
	user.Email = verify.Email

	err := a.DB.FetchByEmail(user)
	if err != nil {
		return nil, err
	}

	if verify.Resend != nil {
		c := utils.GenerateVerificationCode()
		err := a.sendCode(user, c, "/activate")
		if err != nil {
			return nil, err
		}
		return user, nil
	}

	c, err := a.RDBS.Get(user.ID)
	if err != nil {
		return nil, errors.New("error: Expired Code")
	}

	if c != verify.Code {
		return nil, errors.New("error: Invalid verification code")
	}

	user.IsVerified = true
	err = a.DB.UpdateOne(user)
	if err != nil {
		return nil, err
	}

	t, err := JWTAuthService().GenerateToken(*user, true)
	if err != nil {
		return nil, err
	}

	a.setCookie(t)

	user.Token = t.AccessToken
	user.TokenExpiredAt = t.AccessExpiresAt / int64(time.Second)
	return user, nil
}

// ForgetPassword generates a password reset token and sends it to the user's email address.
func (a *auth) ForgetPassword(u *model.NewUser) (*model.User, error) {
	user := &model.User{Email: u.Email}
	err := a.DB.FetchByEmail(user)
	if err != nil {
		return nil, err
	}

	code := utils.GenerateVerificationCode() // 6070
	a.sendCode(user, code, "/password")

	// Return the user object with sensitive information removed
	return user, nil
}

// ResetPassword updates the user's password using a password reset token.
func (a *auth) ResetPassword(verify *model.VerifyInput) (*model.User, error) {
	user := &model.User{Email: verify.Email}
	err := a.DB.FetchByEmail(user)
	if err != nil {
		return nil, err
	}

	c, err := a.RDBS.Get(user.ID)
	if err != nil {
		return nil, errors.New("error: Expired Code")
	}

	if c != verify.Code {
		return nil, errors.New("error: Invalid verification code")
	}

	hash, err := utils.EncryptPassword(*verify.Password)
	if err != nil {
		return nil, err
	}

	user.PasswordHash = hash

	err = a.DB.UpdateOne(user)
	if err != nil {
		return nil, err
	}

	return user, nil
}

// ChangePassword updates the user's password using their current password.
func (a *auth) ChangePassword(u *model.NewUser) (*model.User, error) {
	user := &model.User{Email: u.Email}
	err := a.DB.FetchByEmail(user)
	if err != nil {
		return nil, err
	}

	isCorrect := utils.CheckPassword(user.PasswordHash, u.Password)
	if !isCorrect {
		return nil, utils.ErrAuthenticationFailure
	}

	hash, err := utils.EncryptPassword(u.Password)
	if err != nil {
		return nil, err
	}

	user.PasswordHash = hash

	err = a.DB.UpdateOne(user)
	if err != nil {
		return nil, err
	}

	return user, nil
}

func (a *auth) setCookie(t *Token) {
	http.SetCookie(a.Writer, &http.Cookie{
		Name:     "token",
		Value:    t.RefreshToken,
		HttpOnly: true,
		MaxAge:   int(t.RefreshExpiresAt / int64(time.Second)),
		SameSite: http.SameSiteNoneMode,
		Secure:   false,
	})
}

func (a *auth) SetContext(ctx *gin.Context) {
	a.Context = ctx
}

func (a *auth) sendCode(user *model.User, code string, path string) error {
	err := a.RDBS.Set(user.ID, strings.TrimSpace(code), 3600)
	if err != nil {
		return err
	}

	apphost := os.Getenv("APP_HOST")
	url := fmt.Sprintf("%s/%s?code=%s", apphost, path, code)
	data := map[string]interface{}{
		"link":     url,
		"fullname": user.FullName,
	}

	body, err := utils.ParseTemplate("signup", data)
	if err != nil {
		return err
	}

	mail := mail.Mailer{
		ToAddrs: []string{user.Email},
		Subject: "Account Activation",
		Body:    body,
	}

	err = a.Mail.Send(mail)
	if err != nil {
		return err
	}

	return nil
}
