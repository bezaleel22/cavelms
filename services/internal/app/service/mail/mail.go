package mail

import (
	"context"

	"github.com/cavelms/internal/app/repository"
	"github.com/cavelms/internal/model"
)

type MailService interface {
	SendMail(ctx context.Context, input *model.MailInput) (*model.Mail, error)
	DeleteMail(ctx context.Context, input *model.MailInput) (*model.Mail, error)
}

type mailer struct {
	*repository.Repository
}

func NewService(repo *repository.Repository) MailService {
	return &mailer{
		Repository: repo,
	}
}
