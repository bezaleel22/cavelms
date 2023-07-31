package main

import (
	"context"
	"flag"
	"log"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/cavelms/internal/app"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	fg := flag.String("s", "monolith", "service gql, chat or stream")
	flag.Parse()
	s := gin.Default()
	s.Use(gin.Recovery())
	s.Use(gin.Logger())
	s.Use(cors.Default())

	a := app.New(s)
	switch *fg {
	case "monolith":
		a.Run()
	case "api":
		a.Api.Run(a.Server)
	}

	quit := make(chan os.Signal, 1)
	signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)

	<-quit
	log.Println("Shutdown Servers ...")
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	if err := a.Api.Shutdown(a.Server, ctx); err != nil {
		log.Fatal("Server Shutdown:", err)
	}

	<-ctx.Done()
	log.Println("timeout of 5 seconds.")
	log.Println("Server exiting")
}
