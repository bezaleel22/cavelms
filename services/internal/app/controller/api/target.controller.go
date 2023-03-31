package controller

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"

	"github.com/cavelms/internal/model"
)

// CreateTarget is the resolver for the createTarget field.
func (r *mutationResolver) CreateTarget(ctx context.Context, input model.CreateTargetInput) (*model.Target, error) {
	panic(fmt.Errorf("not implemented: CreateTarget - createTarget"))
}

// UpdateTarget is the resolver for the updateTarget field.
func (r *mutationResolver) UpdateTarget(ctx context.Context, id string, input model.UpdateTargetInput) (*model.Target, error) {
	panic(fmt.Errorf("not implemented: UpdateTarget - updateTarget"))
}

// DeleteTarget is the resolver for the deleteTarget field.
func (r *mutationResolver) DeleteTarget(ctx context.Context, id string) (*model.Target, error) {
	panic(fmt.Errorf("not implemented: DeleteTarget - deleteTarget"))
}

// Targets is the resolver for the targets field.
func (r *queryResolver) Targets(ctx context.Context, courseID *string) ([]model.Target, error) {
	panic(fmt.Errorf("not implemented: Targets - targets"))
}

// Target is the resolver for the target field.
func (r *queryResolver) Target(ctx context.Context, id string) (*model.Target, error) {
	panic(fmt.Errorf("not implemented: Target - target"))
}
