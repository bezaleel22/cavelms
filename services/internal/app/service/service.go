package service

import (
	"github.com/cavelms/internal/app/repository"
	"github.com/cavelms/internal/app/service/api"
	"github.com/cavelms/internal/app/service/auth"
	"github.com/cavelms/internal/app/service/mail"
	"github.com/gin-gonic/gin"
)

type Service interface {
	api.APIService
	auth.AuthService
	mail.MailService
}

type service struct {
	Ctx *gin.Context
	api.APIService
	auth.AuthService
	mail.MailService
}

func NewService(repo *repository.Repository) Service {
	return &service{
		APIService:  api.NewService(repo),
		AuthService: auth.NewAuthService(repo),
		MailService: mail.NewService(repo),
	}
}

// func (s *service) Midleware(c *gin.Context) {
// 	PREFIX := "Bearer "
// 	auth := c.GetHeader("Authorization")
// 	authToken := strings.TrimPrefix(auth, PREFIX)
// 	claims, err := JWTAuthService().ValidateAccessToken(authToken)
// 	if err != nil {
// 		s.claims = nil
// 		c.JSON(http.StatusForbidden, utils.ErrUnauthorized)
// 	}

// 	s.claims = &claims
// 	c.Next()
// }

func (s *service) getCtx(c *gin.Context) {

}
