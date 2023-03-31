package auth

import (
	"errors"
	"log"
	"net/http"
	"strings"
	"time"

	"github.com/cavelms/internal/model"
	"github.com/cavelms/pkg/mail"
	"github.com/cavelms/pkg/utils"
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
	log.Println(user.ID)
	code := utils.GenerateVerificationCode()
	err = a.RDBS.Set(user.ID, strings.TrimSpace(code), 600)
	if err != nil {
		return nil, err
	}

	data := map[string]interface{}{
		"code":     code,
		"fullname": strings.Join([]string{u.FirstName, u.LastName}, " "),
	}

	body, err := utils.ParseTemplate("signup", data)
	if err != nil {
		return nil, err
	}

	mail := mail.Mailer{
		ToAddrs: []string{u.Email},
		Subject: "Account Activation",
		Body:    body,
	}

	err = a.Mail.Send(mail)
	if err != nil {
		return nil, err
	}
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
	user.TokenExpiredAt = t.AccessExpiresAt / int64(time.Second)
	return user, nil
}

func (a *auth) SignOut() error {
	http.SetCookie(a.Writer, &http.Cookie{
		Name:     "token",
		Value:    "",
		HttpOnly: true,
		Expires:  time.Now().Add(-time.Hour),
	})
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
		Role:  []model.Role{claims["email"].(model.Role)},
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
	user.ID = verify.ID

	err := a.DB.FetchByID(user)
	if err != nil {
		return nil, err
	}

	if verify.Resend {
		c := utils.GenerateVerificationCode()
		err := a.sendCode(user, c)
		if err != nil {
			return nil, err
		}
		return user, nil
	}

	c, err := a.RDBS.Get(verify.ID)
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

func (a *auth) ResendCode(id string) (*model.User, error)            { return nil, nil }
func (a *auth) ForgetPassword(u *model.NewUser) (*model.User, error) { return nil, nil }
func (a *auth) ResetPassword(u *model.NewUser) (*model.User, error)  { return nil, nil }
func (a *auth) ChangePassword(u *model.NewUser) (*model.User, error) { return nil, nil }

func (a *auth) setCookie(t *Token) {
	http.SetCookie(a.Writer, &http.Cookie{
		Name:     "token",
		Value:    t.RefreshToken,
		HttpOnly: true,
		MaxAge:   int(t.RefreshExpiresAt / int64(time.Second)),
		SameSite: http.SameSiteNoneMode,
		Secure:   true,
	})

}

func (a *auth) sendCode(user *model.User, code string) error {
	err := a.RDBS.Set(user.ID, strings.TrimSpace(code), 600)
	if err != nil {
		return err
	}

	data := map[string]interface{}{
		"code":     code,
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
