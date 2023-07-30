package service

import (
	"github.com/cavelms/internal/app/repository"
	"github.com/cavelms/internal/app/service/api"
	"github.com/cavelms/internal/app/service/auth"
	"github.com/gin-gonic/gin"
)

type Service interface {
	api.APIService
	auth.AuthService
}

type service struct {
	Ctx *gin.Context
	api.APIService
	auth.AuthService
}

func NewService(repo *repository.Repository) Service {
	return &service{
		APIService:  api.NewService(repo),
		AuthService: auth.NewAuthService(repo),
	}
}
