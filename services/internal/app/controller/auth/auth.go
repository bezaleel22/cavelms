package controller

import "github.com/cavelms/internal/app/service"

type Auth struct {
	ID      string `json:"id,omitempty"`
	Code    string `json:"code,omitempty"`
	Resend  bool   `json:"resend,omitempty"`
	Service service.Service
}
