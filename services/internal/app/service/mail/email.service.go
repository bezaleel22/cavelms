package mail

import (
	"fmt"
	"io"
	"mime"
	"net/http"

	"github.com/cavelms/internal/model"
	"github.com/cavelms/pkg/mail"
	"github.com/cavelms/pkg/utils"
)

func (m *mailer) SendMail(input *model.MailInput) error {
	body, err := utils.ParseTemplate(input.Template, input.Content)
	if err != nil {
		return err
	}

	msg := mail.Mailer{
		ToAddrs: input.To,
		Subject: input.Subject,
		Body:    body,
	}

	if input.AttachmentURL != nil {
		resp, err := http.Get(*input.AttachmentURL)
		if err != nil {
			return err
		}
		defer resp.Body.Close()

		if resp.StatusCode != http.StatusOK {
			return fmt.Errorf("bad status: %s", resp.Status)
		}

		msg.Attachment, err = io.ReadAll(resp.Body)
		if err != nil {
			return err
		}

		_, params, err := mime.ParseMediaType(resp.Header.Get("Content-Disposition"))
		if err != nil {
			return err
		}

		msg.Filename = params["filename"]
	}

	err = m.Mail.Send(msg)
	if err != nil {
		return err
	}

	return nil
}

func (m *mailer) DeleteMail(input *model.MailInput) error { return nil }
