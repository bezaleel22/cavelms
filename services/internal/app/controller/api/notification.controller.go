package controller

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"

	"github.com/cavelms/graph/generated"
	"github.com/cavelms/internal/model"
)

// CreateNotification is the resolver for the createNotification field.
func (r *mutationResolver) CreateNotification(ctx context.Context, input model.CreateNotificationInput) (*model.Notification, error) {
	notification, err := r.Service.CreateNotification(ctx, &input)
	if err != nil {
		return nil, err
	}
	return notification, nil
}

// UpdateNotification is the resolver for the updateNotification field.
func (r *mutationResolver) UpdateNotification(ctx context.Context, id string, input model.UpdateNotificationInput) (*model.Notification, error) {
	notification, err := r.Service.UpdateNotification(ctx, id, &input)
	if err != nil {
		return nil, err
	}
	return notification, nil
}

// DeleteNotification is the resolver for the deleteNotification field.
func (r *mutationResolver) DeleteNotification(ctx context.Context, id string) (*model.Notification, error) {
	notification, err := r.Service.DeleteNotification(ctx, id)
	if err != nil {
		return nil, err
	}
	return notification, nil
}

// Notifications is the resolver for the notifications field.
func (r *queryResolver) Notifications(ctx context.Context, courseID *string, recipientID *string, read *bool) ([]model.Notification, error) {
	notifications, err := r.Service.Notifications(ctx, *courseID, *recipientID, *read)
	if err != nil {
		return nil, err
	}
	return notifications, nil
}

// NotificationAdded is the resolver for the notificationAdded field.
func (r *subscriptionResolver) NotificationAdded(ctx context.Context) (<-chan *model.Notification, error) {
	notifications, err := r.Service.NotificationAdded(ctx)
	if err != nil {
		return nil, err
	}
	return notifications, nil
}

// Subscription returns generated.SubscriptionResolver implementation.
func (r *Resolver) Subscription() generated.SubscriptionResolver { return &subscriptionResolver{r} }

type subscriptionResolver struct{ *Resolver }
