package auth

import (
	"github.com/cavelms/config"
	"github.com/cavelms/internal/app/repository"
	"github.com/cavelms/internal/model"
	"github.com/gin-gonic/gin"
)

type auth struct {
	*repository.Repository
	authSecret string
	issure     string
	*gin.Context
	// claims *jwt.MapClaims
}

type AuthService interface {
	// Authentication interface
	SignUp(input model.NewUser) (*model.User, error)
	SignIn(input model.AuthUser) (*model.User, error)
	SignOut(token string) (*model.User, error)
	RefreshToken(token string) (*model.User, error)
	VerifyEmail(token string) (*model.User, error)
	ForgetPassword(email string) (*model.User, error)
	ResetPassword(token string, password string) (*model.User, error)
	ChangePassword(userId string, password string) (*model.User, error)
	AuthMidleware(c *gin.Context)
}

func NewAuthService(repo *repository.Repository) AuthService {
	return &auth{
		Repository: repo,
		authSecret: config.GetConfig().AuthSecrete,
		issure:     config.GetConfig().JWTIssuer,
	}
}
