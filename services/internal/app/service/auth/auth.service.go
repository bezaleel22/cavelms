package auth

import (
	"errors"

	"github.com/cavelms/internal/model"
	"github.com/cavelms/pkg/utils"
)

func (a *auth) SignUp(input model.NewUser) (*model.User, error) {
	hash, err := utils.EncryptPassword(input.Password)
	if err != nil {
		return nil, err
	}

	user := model.User{
		Email:        input.Email,
		PasswordHash: hash,
		FirstName:    input.FirstName,
		LastName:     input.LastName,
		Platform:     input.Platform,
		Program:      input.Program,
	}

	err = a.DB.Create(&user)
	if err != nil {
		return nil, err
	}

	err = a.generateVerificationToken(&user)
	if err != nil {
		return nil, err
	}

	return &user, nil
}

func (a *auth) SignIn(input model.AuthUser) (*model.User, error) {
	user := model.User{}
	user.Email = input.Email
	err := a.DB.FetchByEmail(user)
	if err != nil {
		return nil, err
	}

	isCorrect := utils.CheckPassword(user.PasswordHash, input.Password)
	if !isCorrect {
		return nil, utils.ErrAuthenticationFailure
	}

	err = a.generateAuthToken(&user, false)
	if err != nil {
		return nil, err
	}

	user.IsAuthenticated = true
	return &user, nil
}

func (a *auth) SignOut(token string) (*model.User, error) {
	user := &model.User{}

	claims, err := a.verifyToken(token)
	if err != nil {
		return nil, err
	}

	tokenID := claims["tokenId"].(string)
	deleted, err := a.RDBS.Del(tokenID)
	if err != nil {
		return nil, errors.New("error: Token Expired")
	}

	if deleted == 1 {
		user.ID = claims["userId"].(string)
		user.IsAuthenticated = false
		err = a.DB.UpdateOne(user)
		if err != nil {
			return nil, err
		}
	}

	user.ID = ""
	return user, nil
}

func (a *auth) RefreshToken(token string) (*model.User, error) {

	claims, err := a.verifyToken(token)
	if err != nil {
		return nil, err
	}

	tokenID := claims["tokenId"].(string)
	userId, err := a.RDBS.Get(tokenID)
	if err != nil {
		return nil, errors.New("error: Expired Code")
	}

	user := model.User{ID: *userId}
	err = a.DB.FetchByID(&user)
	if err != nil {
		return nil, err
	}

	err = a.generateAuthToken(&user, true)
	if err != nil {
		return nil, err
	}

	return &user, nil
}

func (a *auth) VerifyEmail(token string) (*model.User, error) {
	user := &model.User{}

	claims, err := a.verifyToken(token)
	if err != nil {
		return nil, err
	}

	tokenID := claims["tokenId"].(string)
	userId, err := a.RDBS.Get(tokenID)
	if err != nil {
		return nil, errors.New("error: Token Expired")
	}

	user.ID = *userId
	err = a.DB.FetchByID(user)
	if err != nil {
		return nil, err
	}

	user.IsVerified = true
	err = a.DB.UpdateOne(user)
	if err != nil {
		return nil, err
	}

	return user, nil
}
 
func (a *auth) ForgetPassword(email string) (*model.User, error) {
	user := model.User{Email: email}
	err := a.DB.FetchByEmail(user)
	if err != nil {
		return nil, err
	}

	err = a.generateVerificationToken(&user) // 6070
	if err != nil {
		return nil, err
	}
	// Return the user object with sensitive information removed
	return &user, nil
}

func (a *auth) ResetPassword(token string, password string) (*model.User, error) {
	user := &model.User{}

	claims, err := a.verifyToken(token)
	if err != nil {
		return nil, err
	}

	tokenID := claims["tokenId"].(string)
	userId, err := a.RDBS.Get(tokenID)
	if err != nil {
		return nil, errors.New("error: Token Expired")
	}

	user.ID = *userId
	err = a.DB.FetchByID(user)
	if err != nil {
		return nil, err
	}

	hash, err := utils.EncryptPassword(password)
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

func (a *auth) ChangePassword(userId string, password string) (*model.User, error) {
	user := &model.User{}

	user.ID = userId
	err := a.DB.FetchByID(user)
	if err != nil {
		return nil, err
	}

	isCorrect := utils.CheckPassword(user.PasswordHash, password)
	if !isCorrect {
		return nil, utils.ErrAuthenticationFailure
	}

	hash, err := utils.EncryptPassword(password)
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
