package auth

import (
	"time"

	"github.com/cavelms/internal/model"
	"github.com/cavelms/pkg/utils"
	"github.com/gin-gonic/gin"
	jwt "github.com/golang-jwt/jwt/v4"
	"github.com/google/uuid"
)

type Claims struct {
	TokenID string     `json:"tokenId"`
	UserID  string     `json:"userId"`
	Email   string     `json:"email"`
	Role    model.Role `json:"role"`
	jwt.RegisteredClaims
}

// IssueAccessToken generate access tokens used for authentication
func (a *auth) generateToken(u model.User, exp time.Duration) (*model.Token, error) {
	token := &model.Token{}

	// Generate encoded token
	claims := Claims{
		TokenID:          uuid.New().String(),
		UserID:           u.ID,
		Email:            u.Email,
		Role:             u.Role,
		RegisteredClaims: jwt.RegisteredClaims{Issuer: a.issure},
	}

	t := time.Now().Add(exp)
	claims.ExpiresAt = jwt.NewNumericDate(t)
	tc := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, err := tc.SignedString([]byte(a.authSecret))
	if err != nil {
		return nil, err
	}

	token.Token = tokenString
	token.ExpiresAt = int64(exp) / int64(time.Second)

	err = a.RDBS.Set(claims.TokenID, u.ID, int(token.ExpiresAt))
	if err != nil {
		return nil, err
	}

	return token, nil
}

func (a *auth) generateAuthToken(user *model.User, accessOnly bool) error {

	// IssueRefreshToken generate access tokens used for authentication
	token, err := a.generateToken(*user, (24*time.Hour)*14) // 14 days
	if err != nil {
		return err
	}
	user.RefreshToken = token

	// IssueAccessToken generate access tokens used for authentication
	token, err = a.generateToken(*user, time.Hour) // 1 hour
	if err != nil {
		return err
	}
	user.AccessToken = token
	return nil
}

func (a *auth) generateVerificationToken(u *model.User) error {
	token, err := a.generateToken(*u, time.Hour) // 1 hour
	if err != nil {
		return err
	}

	u.VerifycationToken = token
	return nil
}

func (a *auth) verifyToken(tokenString string) (jwt.MapClaims, error) {
	hmacSecret := []byte(a.authSecret)
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		return hmacSecret, nil
	})

	if err != nil {
		return nil, err
	}

	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		return claims, nil
	}

	return nil, utils.ErrInvalidAuthToken
}

func (a *auth) deleteToken(tokenString string) (int64, error) {
	claims, err := a.verifyToken(tokenString)
	if err != nil {
		return 0, err
	}

	tokenId := claims["tokenId"].(string)
	deleted, err := a.RDBS.Del(tokenId)
	if err != nil {
		return 0, err
	}

	return deleted, err
}

func (a *auth) AuthMidleware(c *gin.Context) {
	// PREFIX := "Bearer "
	// auth := c.GetHeader("Authorization")
	// authToken := strings.TrimPrefix(auth, PREFIX)
	// _, err := a.verifyToken(authToken)
	// if err != nil {
	// 	c.JSON(http.StatusForbidden, utils.ErrUnauthorized)
	// }

	c.Next()
}
