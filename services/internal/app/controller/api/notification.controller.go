package controller

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"

	"github.com/cavelms/graph/generated"
	"github.com/cavelms/internal/model"
)

// CreateNotification is the resolver for the createNotification field.
func (r *mutationResolver) CreateNotification(ctx context.Context, input model.CreateNotificationInput) (*model.Notification, error) {
	panic(fmt.Errorf("not implemented: CreateNotification - createNotification"))
}

// UpdateNotification is the resolver for the updateNotification field.
func (r *mutationResolver) UpdateNotification(ctx context.Context, id string, input model.UpdateNotificationInput) (*model.Notification, error) {
	panic(fmt.Errorf("not implemented: UpdateNotification - updateNotification"))
}

// DeleteNotification is the resolver for the deleteNotification field.
func (r *mutationResolver) DeleteNotification(ctx context.Context, id string) (*model.Notification, error) {
	panic(fmt.Errorf("not implemented: DeleteNotification - deleteNotification"))
}

// Notifications is the resolver for the notifications field.
func (r *queryResolver) Notifications(ctx context.Context, courseID *string, recipientID *string, read *bool) ([]model.Notification, error) {
	panic(fmt.Errorf("not implemented: Notifications - notifications"))
}

// NotificationAdded is the resolver for the notificationAdded field.
func (r *subscriptionResolver) NotificationAdded(ctx context.Context) (<-chan *model.Notification, error) {
	panic(fmt.Errorf("not implemented: NotificationAdded - notificationAdded"))
}

// Subscription returns generated.SubscriptionResolver implementation.
func (r *Resolver) Subscription() generated.SubscriptionResolver { return &subscriptionResolver{r} }

type subscriptionResolver struct{ *Resolver }
