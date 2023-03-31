package mail

import (
	"github.com/cavelms/internal/app/repository"
	"github.com/cavelms/internal/model"
)

type MailService interface {
	SendMail(input *model.MailInput) error
	DeleteMail(input *model.MailInput) error
}

type mailer struct {
	*repository.Repository
}

func NewService(repo *repository.Repository) MailService {
	return &mailer{
		Repository: repo,
	}
}
