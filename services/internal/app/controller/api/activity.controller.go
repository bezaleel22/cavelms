package controller

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"

	"github.com/cavelms/internal/model"
)

// CreateActivity is the resolver for the createActivity field.
func (r *mutationResolver) CreateActivity(ctx context.Context, input model.CreateActivityInput) (*model.Activity, error) {
	panic(fmt.Errorf("not implemented: CreateActivity - createActivity"))
}

// UpdateActivity is the resolver for the updateActivity field.
func (r *mutationResolver) UpdateActivity(ctx context.Context, input model.UpdateActivityInput) (*model.Activity, error) {
	panic(fmt.Errorf("not implemented: UpdateActivity - updateActivity"))
}

// DeleteActivity is the resolver for the deleteActivity field.
func (r *mutationResolver) DeleteActivity(ctx context.Context, id string) (bool, error) {
	panic(fmt.Errorf("not implemented: DeleteActivity - deleteActivity"))
}

// Activities is the resolver for the activities field.
func (r *queryResolver) Activities(ctx context.Context, courseID *string) ([]model.Activity, error) {
	panic(fmt.Errorf("not implemented: Activities - activities"))
}

// Activity is the resolver for the activity field.
func (r *queryResolver) Activity(ctx context.Context, id string) (*model.Activity, error) {
	panic(fmt.Errorf("not implemented: Activity - activity"))
}

// ActivityAdded is the resolver for the activityAdded field.
func (r *subscriptionResolver) ActivityAdded(ctx context.Context) (<-chan *model.Activity, error) {
	panic(fmt.Errorf("not implemented: ActivityAdded - activityAdded"))
}

// ActivityUpdated is the resolver for the activityUpdated field.
func (r *subscriptionResolver) ActivityUpdated(ctx context.Context) (<-chan *model.Activity, error) {
	panic(fmt.Errorf("not implemented: ActivityUpdated - activityUpdated"))
}

// ActivityDeleted is the resolver for the activityDeleted field.
func (r *subscriptionResolver) ActivityDeleted(ctx context.Context) (<-chan *string, error) {
	panic(fmt.Errorf("not implemented: ActivityDeleted - activityDeleted"))
}
