package controller

import (
	"fmt"
	"net/http"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/cavelms/config"
	"github.com/cavelms/graph/generated"
	apiCtr "github.com/cavelms/internal/app/controller/api"
	authCtr "github.com/cavelms/internal/app/controller/auth"
	mailCtr "github.com/cavelms/internal/app/controller/mail"
	"github.com/cavelms/internal/app/service"
	"github.com/gin-gonic/gin"
)

func NewController(r *gin.Engine, s service.Service) *http.Server {
	r.Use(CORSMiddleware())

	auth := r.Group("/auth")
	authHandlers(auth, s)

	api := r.Group("/api")
	apiHandlers(api, s)

	mail := r.Group("/mail")
	mailHandlers(mail, s)

	config := config.GetConfig()
	port := fmt.Sprintf(":%s", config.Port)

	return &http.Server{
		Addr:    port,
		Handler: r,
	}
}

func authHandlers(auth *gin.RouterGroup, s service.Service) {
	ctr := &authCtr.Auth{Service: s}
	auth.POST("/signup", ctr.SignUp)
	auth.POST("/signin", ctr.SignIn)
	auth.POST("/signout", ctr.SignOut)
	auth.POST("/refresh_token", ctr.Refresh)
	auth.POST("/verify_email", ctr.VerifyEmail)
	auth.POST("/ForgetPassword", ctr.ForgetPassword)
	auth.POST("/reset_password", ctr.ResetPassword)
	auth.POST("/change_password", ctr.ChangePassword)
}

func apiHandlers(api *gin.RouterGroup, s service.Service) {
	re := &apiCtr.Resolver{Service: s}
	gqlcfg := generated.Config{Resolvers: re}

	api.GET("/", playgroundHanler())
	api.POST("/query", queryHanler(gqlcfg))
}

func mailHandlers(mail *gin.RouterGroup, s service.Service) {
	ctr := &mailCtr.Mail{Service: s}
	mail.POST("/send", ctr.Send)
	mail.POST("/delete", ctr.DeleteMail)
}

func queryHanler(cfg generated.Config) gin.HandlerFunc {
	schema := generated.NewExecutableSchema(cfg)
	h := handler.NewDefaultServer(schema)
	return func(c *gin.Context) {
		h.ServeHTTP(c.Writer, c.Request)
	}
}

func playgroundHanler() gin.HandlerFunc {
	h := playground.Handler("GraphQL playground", "/api/query")
	return func(c *gin.Context) {
		h.ServeHTTP(c.Writer, c.Request)
	}
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "*")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}
