package controller

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"

	"github.com/cavelms/internal/model"
)

// UpdatePermission is the resolver for the updatePermission field.
func (r *mutationResolver) UpdatePermission(ctx context.Context, input model.PermissionInput) (*model.Permission, error) {
	panic(fmt.Errorf("not implemented: UpdatePermission - updatePermission"))
}

// GrantPermission is the resolver for the grantPermission field.
func (r *mutationResolver) GrantPermission(ctx context.Context, input model.PermissionInput) (*model.Permission, error) {
	panic(fmt.Errorf("not implemented: GrantPermission - grantPermission"))
}

// RevokePermission is the resolver for the revokePermission field.
func (r *mutationResolver) RevokePermission(ctx context.Context, input model.PermissionInput) (*model.Permission, error) {
	panic(fmt.Errorf("not implemented: RevokePermission - revokePermission"))
}

// GetPermissionsForUser is the resolver for the getPermissionsForUser field.
func (r *queryResolver) GetPermissionsForUser(ctx context.Context, role model.Role) ([]model.Permission, error) {
	panic(fmt.Errorf("not implemented: GetPermissionsForUser - getPermissionsForUser"))
}

// GetPermissionsForModel is the resolver for the getPermissionsForModel field.
func (r *queryResolver) GetPermissionsForModel(ctx context.Context, model model.AllowedModel) ([]model.Permission, error) {
	panic(fmt.Errorf("not implemented: GetPermissionsForModel - getPermissionsForModel"))
}
