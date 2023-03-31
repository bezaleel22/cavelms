package auth

import (
	"github.com/cavelms/internal/app/repository"
	"github.com/cavelms/internal/model"
	"github.com/gin-gonic/gin"
)

type auth struct {
	*repository.Repository
	*gin.Context
	// claims *jwt.MapClaims
}

type AuthService interface {
	// Authentication interface
	SignUp(u *model.NewUser) (*model.User, error)
	SignIn(u *model.NewUser) (*model.User, error)
	SignOut() error
	RefreshToken(token string) (*model.User, error)
	VerifyEmail(verify *model.VerifyInput) (*model.User, error)
	ForgetPassword(u *model.NewUser) (*model.User, error)
	ResetPassword(u *model.NewUser) (*model.User, error)
	ChangePassword(u *model.NewUser) (*model.User, error)
}

func NewService(repo *repository.Repository) AuthService {
	return &auth{
		Repository: repo,
	}
}
