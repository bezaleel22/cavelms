package api

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"

	"github.com/cavelms/internal/model"
)

func (api *API) UpdatePermission(ctx context.Context, input model.PermissionInput) (*model.Permission, error) {
	// Check if the model and permissions are valid
	if !input.Model.IsValid() {
		return nil, fmt.Errorf("invalid model: %s", input.Model)
	}
	if !isValidPermissions(input.Permissions){
		return nil, fmt.Errorf("invalid permissions")
	}

	permission := model.Permission{
		Permissions: input.Permissions,
	}

	// Update the permissions for the permission model
	err := api.DB.UpdateOne(&permission)
	if err != nil {
		return nil, err
	}

	return &permission, nil
}

func (api *API) GrantPermission(ctx context.Context, input model.PermissionInput) (*model.Permission, error) {
	// Check if the model and permission are valid

	if !input.Model.IsValid() {
		return nil, fmt.Errorf("invalid model: %s", input.Model)
	}
	if !isValidPermissions(input.Permissions) {
		return nil, fmt.Errorf("invalid permissions")
	}

	// Find the existing permission model
	permission := model.Permission{
		Role:      input.Role,
		Permissions: input.Permissions,
		Model:       input.Model,
	}

	err := api.DB.FetchByID(&permission)
	if err != nil {
		err = api.DB.Create(&permission)
		if err != nil {
			return nil, err
		}
	}

	// If the permission already exists, append the new permission to the existing permissions
	if !containsMany(permission.Permissions, input.Permissions) {
		permission.Permissions = append(permission.Permissions, input.Permissions...)
		err := api.DB.UpdateOne(&permission)
		if err != nil {
			return nil, err
		}
	}

	return &permission, nil
}

func (api *API) RevokePermission(ctx context.Context, input model.PermissionInput) (*model.Permission, error) {
	// Check if the model and permission are valid
	if !input.Model.IsValid() {
		return nil, fmt.Errorf("invalid model: %s", input.Model)
	}
	if !isValidPermissions(input.Permissions){
		return nil, fmt.Errorf("invalid permissions")
	}

	// Find the existing permission model
	var permission model.Permission
	err := api.DB.FetchByID(&permission)
	if err != nil {
		return nil, err
	}

	// Remove the permission from the permission model
	removeInvalidPermissions(&permission, input.Permissions)

	// Save the permission model to the database
	err = api.DB.UpdateOne(&permission)
	if err != nil {
		return nil, err
	}

	return &permission, nil
}

func (api *API) GetPermissionsForUser(ctx context.Context, userID string) ([]model.Permission, error) {
	var permissions []model.Permission
	var permission model.Permission
	err := api.DB.FetchManyWhere(&permission, &permission, userID)
	if err != nil {
		return nil, err
	}

	return permissions, nil
}

func (api *API) GetPermissionsForModel(ctx context.Context, mod model.AllowedModel) ([]model.Permission, error) {
	// Check if the model is valid
	if !mod.IsValid() {
		return nil, fmt.Errorf("invalid model: %s", mod)
	}

	var permissions []model.Permission
	var permission model.Permission
	err := api.DB.FetchManyWhere(&permission, &permission, (mod).String())
	if err != nil {
		return nil, err
	}
	return permissions, nil
}
