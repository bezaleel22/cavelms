package controller

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"

	"github.com/cavelms/internal/model"
)

// CreateUser is the resolver for the createUser field.
func (r *mutationResolver) CreateUser(ctx context.Context, input model.NewUser) (*model.User, error) {
	user, err := r.Service.CreateUser(ctx, input)
	if err != nil {
		return nil, err
	}
	return user, nil
}

// CreateRefree is the resolver for the createRefree field.
func (r *mutationResolver) CreateRefree(ctx context.Context, userID string, input model.NewReferee) (*model.Referee, error) {
	referee, err := r.Service.CreateRefree(ctx, userID, input)
	if err != nil {
		return nil, err
	}
	return referee, nil
}

// CreateQualification is the resolver for the createQualification field.
func (r *mutationResolver) CreateQualification(ctx context.Context, userID string, input model.NewQualification) (*model.Qualification, error) {
	qualification, err := r.Service.CreateQualification(ctx, userID, input)
	if err != nil {
		return nil, err
	}
	return qualification, nil
}

// UpdateUser is the resolver for the updateUser field.
func (r *mutationResolver) UpdateUser(ctx context.Context, data interface{}) (*model.User, error) {
	user, err := r.Service.UpdateUser(ctx, data)
	if err != nil {
		return nil, err
	}
	return user, nil
}

// DeleteUser is the resolver for the deleteUser field.
func (r *mutationResolver) DeleteUser(ctx context.Context, id string) (*model.User, error) {
	user, err := r.Service.DeleteUser(ctx, id)
	if err != nil {
		return nil, err
	}
	return user, nil
}

// DeleteManyUsers is the resolver for the deleteManyUsers field.
func (r *mutationResolver) DeleteManyUsers(ctx context.Context, ids []string) (*model.User, error) {
	users, err := r.Service.DeleteManyUsers(ctx, ids)
	if err != nil {
		return nil, err
	}
	return users, nil
}

// Users is the resolver for the users field.
func (r *queryResolver) Users(ctx context.Context) ([]*model.User, error) {
	users, err := r.Service.GetUsers(ctx)
	if err != nil {
		return nil, err
	}
	return users, nil
}

// User is the resolver for the user field.
func (r *queryResolver) User(ctx context.Context, id string) (*model.User, error) {
	user, err := r.Service.GetUserByID(ctx, id)
	if err != nil {
		return nil, err
	}
	return user, nil
}
