package controller

import (
	"fmt"
	"net/http"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/cavelms/config"
	"github.com/cavelms/graph/generated"
	apiCtr "github.com/cavelms/internal/app/controller/api"
	"github.com/cavelms/internal/app/service"
	"github.com/gin-gonic/gin"
)

func NewController(r *gin.Engine, s service.Service) *http.Server {
	api := r.Group("/api")
	apiHandlers(api, s)

	config := config.GetConfig()
	port := fmt.Sprintf(":%s", config.Port)

	return &http.Server{
		Addr:    port,
		Handler: r,
	}
}

func apiHandlers(api *gin.RouterGroup, s service.Service) {
	re := &apiCtr.Resolver{Service: s}
	gqlcfg := generated.Config{Resolvers: re}

	api.GET("/", playgroundHanler())
	api.POST("/query", queryHanler(gqlcfg))
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
