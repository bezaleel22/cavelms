package controller

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"fmt"
	"net/http"

	"github.com/cavelms/internal/model"
	"github.com/gin-gonic/gin"
)

func (auth *Auth) SignIn(c *gin.Context) {
	newUser := &model.NewUser{}
	err := c.BindJSON(newUser)
	if err != nil {
		c.JSON(http.StatusBadRequest, err)
	}

	user, err := auth.Service.SignIn(newUser)
	if err != nil {
		c.JSON(http.StatusUnprocessableEntity, err)
	}

	c.JSON(http.StatusOK, user)
}

func (auth *Auth) SignUp(c *gin.Context) {
	newUser := &model.NewUser{}
	err := c.BindJSON(newUser)
	if err != nil {
		c.JSON(http.StatusBadRequest, err)
	}

	user, err := auth.Service.SignUp(newUser)
	if err != nil {
		c.JSON(http.StatusUnprocessableEntity, err)
	}

	c.JSON(http.StatusOK, user)
}

func (auth *Auth) SignOut(c *gin.Context) {
	err := auth.Service.SignOut()
	if err != nil {
		c.JSON(http.StatusUnprocessableEntity, err)
	}
	c.JSON(http.StatusOK, "logged out")
}

func (auth *Auth) VerifyEmail(c *gin.Context) {
	verify := &model.VerifyInput{}
	err := c.BindJSON(verify)
	if err != nil {
		c.JSON(http.StatusBadRequest, err)
	}

	user, err := auth.Service.VerifyEmail(verify)
	if err != nil {
		c.JSON(http.StatusUnprocessableEntity, err)
	}

	c.JSON(http.StatusOK, user)
}

func (auth *Auth) Refresh(c *gin.Context) {
	token, err := c.Cookie("token")
	if err != nil {
		c.JSON(http.StatusBadRequest, err)
	}

	user, err := auth.Service.RefreshToken(token)
	if err != nil {
		c.JSON(http.StatusUnprocessableEntity, err)
	}

	c.JSON(http.StatusOK, user)
}

func (auth *Auth) ForgetPassword(c *gin.Context) {
	panic(fmt.Errorf("not implemented: ForgetPassword - forgetPassword"))
}

func (auth *Auth) ResetPassword(c *gin.Context) {
	panic(fmt.Errorf("not implemented: ResetPassword - resetPassword"))
}

func (auth *Auth) ChangePassword(c *gin.Context) {
	panic(fmt.Errorf("not implemented: ChangePassword - changePassword"))
}