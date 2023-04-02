package controller

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"

	"github.com/cavelms/internal/model"
)

// UpdatePermission is the resolver for the updatePermission field.
func (r *mutationResolver) UpdatePermission(ctx context.Context, input model.PermissionInput) (*model.Permission, error) {
	permission, err := r.Service.UpdatePermission(ctx, input)
	if err != nil {
		return nil, err
	}
	return permission, nil
}

// GrantPermission is the resolver for the grantPermission field.
func (r *mutationResolver) GrantPermission(ctx context.Context, input model.PermissionInput) (*model.Permission, error) {
	permission, err := r.Service.GrantPermission(ctx, input)
	if err != nil {
		return nil, err
	}
	return permission, nil
}

// RevokePermission is the resolver for the revokePermission field.
func (r *mutationResolver) RevokePermission(ctx context.Context, input model.PermissionInput) (*model.Permission, error) {
	permission, err := r.Service.RevokePermission(ctx, input)
	if err != nil {
		return nil, err
	}
	return permission, nil
}

// GetPermissionsForUser is the resolver for the getPermissionsForUser field.
func (r *queryResolver) GetPermissionsForUser(ctx context.Context, userID string) ([]model.Permission, error) {
	permissions, err := r.Service.GetPermissionsForUser(ctx, userID)
	if err != nil {
		return nil, err
	}
	return permissions, nil
}

// GetPermissionsForModel is the resolver for the getPermissionsForModel field.
func (r *queryResolver) GetPermissionsForModel(ctx context.Context, model model.AllowedModel) ([]model.Permission, error) {
	permissions, err := r.Service.GetPermissionsForModel(ctx, model)
	if err != nil {
		return nil, err
	}
	return permissions, nil
}
