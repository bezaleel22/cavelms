package controller

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"

	"github.com/cavelms/internal/model"
)

// CreateUserSetting is the resolver for the createUserSetting field.
func (r *mutationResolver) CreateUserSetting(ctx context.Context, userID string, input model.NewSetting) (*model.UserSetting, error) {
	userSetting, err := r.Service.CreateUserSetting(ctx, userID, input)
	if err != nil {
		return nil, err
	}
	return userSetting, nil
}

// UpdateUserSetting is the resolver for the updateUserSetting field.
func (r *mutationResolver) UpdateUserSetting(ctx context.Context, id string, input model.UpdateSetting) (*model.UserSetting, error) {
	userSetting, err := r.Service.UpdateUserSetting(ctx, id, input)
	if err != nil {
		return nil, err
	}
	return userSetting, nil
}

// DeleteUserSetting is the resolver for the deleteUserSetting field.
func (r *mutationResolver) DeleteUserSetting(ctx context.Context, id string) (bool, error) {
	ok, err := r.Service.DeleteUserSetting(ctx, id)
	if err != nil {
		return false, err
	}
	return ok, nil
}

// CreateGlobalSetting is the resolver for the createGlobalSetting field.
func (r *mutationResolver) CreateGlobalSetting(ctx context.Context, input model.NewSetting) (*model.GlobalSetting, error) {
	globalSetting, err := r.Service.CreateGlobalSetting(ctx, input)
	if err != nil {
		return nil, err
	}
	return globalSetting, nil
}

// UpdateGlobalSetting is the resolver for the updateGlobalSetting field.
func (r *mutationResolver) UpdateGlobalSetting(ctx context.Context, id string, input model.UpdateSetting) (*model.GlobalSetting, error) {
	globalSetting, err := r.Service.UpdateGlobalSetting(ctx, id, &input)
	if err != nil {
		return nil, err
	}
	return globalSetting, nil
}

// DeleteGlobalSetting is the resolver for the deleteGlobalSetting field.
func (r *mutationResolver) DeleteGlobalSetting(ctx context.Context, id string) (bool, error) {
	ok, err := r.Service.DeleteGlobalSetting(ctx, id)
	if err != nil {
		return false, err
	}
	return ok, nil
}

// UserSetting is the resolver for the userSetting field.
func (r *queryResolver) UserSetting(ctx context.Context, id string) (*model.UserSetting, error) {
	userSetting, err := r.Service.UserSetting(ctx, id)
	if err != nil {
		return nil, err
	}
	return userSetting, nil
}

// UserSettings is the resolver for the userSettings field.
func (r *queryResolver) UserSettings(ctx context.Context, userID string, limit *int, offset *int) ([]model.UserSetting, error) {
	userSettings, err := r.Service.UserSettings(ctx, userID, *limit, *offset)
	if err != nil {
		return nil, err
	}
	return userSettings, nil
}

// GlobalSetting is the resolver for the globalSetting field.
func (r *queryResolver) GlobalSetting(ctx context.Context, id string) (*model.GlobalSetting, error) {
	globalSetting, err := r.Service.GlobalSetting(ctx, id)
	if err != nil {
		return nil, err
	}
	return globalSetting, nil
}

// GlobalSettings is the resolver for the globalSettings field.
func (r *queryResolver) GlobalSettings(ctx context.Context, limit *int, offset *int) ([]model.GlobalSetting, error) {
	globalSettings, err := r.Service.GlobalSettings(ctx, *limit, *offset)
	if err != nil {
		return nil, err
	}
	return globalSettings, nil
}
