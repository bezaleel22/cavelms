package api

import (
	"context"

	"github.com/cavelms/internal/model"
)

func (api *API) Notifications(ctx context.Context, CourseID string, RecipientID string, Read bool) ([]model.Notification, error) {
	var notifications []model.Notification
	var n model.Notification
	err := api.DB.FetchManyWhere(&notifications, n, CourseID)
	if err != nil {
		return nil, err
	}
	return notifications, nil
}

func (api *API) CreateNotification(ctx context.Context, Input *model.CreateNotificationInput) (*model.Notification, error) {
	n := model.Notification{
		SenderID:    Input.SenderID,
		RecipientID: Input.RecipientID,
		CourseID:    Input.CourseID,
		Type:        Input.Type,
		Text:        Input.Text,
		Title:       Input.Title,
		Link:        Input.Link,
	}
	err := api.DB.Create(&n)
	if err != nil {
		return nil, err
	}
	return &n, nil
}

func (api *API) UpdateNotification(ctx context.Context, id string, Input *model.UpdateNotificationInput) (*model.Notification, error) {
	n := model.Notification{ID: id}
	err := api.DB.FetchByID(&n)
	if err != nil {
		return nil, err
	}
	if Input.Read != nil {
		n.Seen = *Input.Read
	}
	err = api.DB.UpdateOne(&n)
	if err != nil {
		return nil, err
	}
	return &n, nil
}

func (api *API) DeleteNotification(ctx context.Context, id string) (*model.Notification, error) {
	n := model.Notification{ID: id}
	err := api.DB.FetchByID(&n)
	if err != nil {
		return nil, err
	}
	err = api.DB.Delete(&n)
	if err != nil {
		return nil, err
	}
	return &n, nil
}

func (api *API) NotificationAdded(ctx context.Context) (<-chan *model.Notification, error) {
	// TODO: Implement subscription functionality using pub/sub model
	return nil, nil
}
