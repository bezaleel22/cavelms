package controller

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"

	"github.com/cavelms/internal/model"
)

// CreateTarget is the resolver for the createTarget field.
func (r *mutationResolver) CreateTarget(ctx context.Context, input model.CreateTargetInput) (*model.Target, error) {
	target, err := r.Service.CreateTarget(ctx, input)
	if err != nil {
		return nil, err
	}
	return target, nil
}

// UpdateTarget is the resolver for the updateTarget field.
func (r *mutationResolver) UpdateTarget(ctx context.Context, id string, input model.UpdateTargetInput) (*model.Target, error) {
	target, err := r.Service.UpdateTarget(ctx, id, &input)
	if err != nil {
		return nil, err
	}
	return target, nil
}

// DeleteTarget is the resolver for the deleteTarget field.
func (r *mutationResolver) DeleteTarget(ctx context.Context, id string) (*model.Target, error) {
	target, err := r.Service.DeleteTarget(ctx, id)
	if err != nil {
		return nil, err
	}
	return target, nil
}

// Targets is the resolver for the targets field.
func (r *queryResolver) Targets(ctx context.Context, courseID *string) ([]model.Target, error) {
	var targets []model.Target
	var err error
	if courseID == nil {
		targets, err = r.Service.GetTargets(ctx, "")
	} else {
		targets, err = r.Service.GetTargets(ctx, *courseID)
	}
	if err != nil {
		return nil, err
	}
	return targets, nil
}

// Target is the resolver for the target field.
func (r *queryResolver) Target(ctx context.Context, id string) (*model.Target, error) {
	target, err := r.Service.GetTarget(ctx, id)
	if err != nil {
		return nil, err
	}
	return target, nil
}
