package controller

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"fmt"
	"net/http"

	"github.com/cavelms/internal/model"
	"github.com/gin-gonic/gin"
)

// Send is the resolver for the send field.
func (m *Mail) Send(c *gin.Context) {
	mail := &model.MailInput{}
	err := c.BindJSON(m)
	if err != nil {
		c.JSON(http.StatusBadRequest, err)
	}

	err = m.Service.SendMail(mail)
	if err != nil {
		c.JSON(http.StatusUnprocessableEntity, err)
	}

	c.JSON(http.StatusOK, mail)
}

// DeleteMail is the resolver for the deleteMail field.
func (m *Mail) DeleteMail(c *gin.Context) {
	panic(fmt.Errorf("not implemented: DeleteMail - deleteMail"))
}

// Mail is the resolver for the mail field.
func (m *Mail) Mail(c *gin.Context) {
	panic(fmt.Errorf("not implemented: Mail - mail"))
}

// Mails is the resolver for the mails field.
func (m *Mail) Mails(c *gin.Context) {
	panic(fmt.Errorf("not implemented: Mails - mails"))
}
