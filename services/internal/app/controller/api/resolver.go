package controller

import (
	"github.com/cavelms/internal/app/service"
)

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct {
	Service service.Service
}
