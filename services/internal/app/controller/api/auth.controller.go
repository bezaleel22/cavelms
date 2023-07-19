package controller

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"

	"github.com/cavelms/internal/model"
)

// SignIn is the resolver for the signIn field.
func (r *mutationResolver) SignIn(ctx context.Context, input model.AuthUser) (*model.User, error) {
	user, err := r.Service.SignIn(input)
	if err != nil {
		return nil, err
	}

	return user, nil
}

// SignUp is the resolver for the signUp field.
func (r *mutationResolver) SignUp(ctx context.Context, input model.NewUser) (*model.User, error) {
	user, err := r.Service.SignUp(input)
	if err != nil {
		return nil, err
	}

	return user, nil
}

// ForgetPassword is the resolver for the forgetPassword field.
func (r *mutationResolver) ForgetPassword(ctx context.Context, email string) (*model.User, error) {
	user, err := r.Service.ForgetPassword(email)
	if err != nil {
		return nil, err
	}

	return user, nil
}

// ResetPassword is the resolver for the resetPassword field.
func (r *mutationResolver) ResetPassword(ctx context.Context, refreshToken string, password string) (*model.User, error) {
	user, err := r.Service.ResetPassword(refreshToken, password)
	if err != nil {
		return nil, err
	}

	return user, nil
}

// ChangePassword is the resolver for the changePassword field.
func (r *mutationResolver) ChangePassword(ctx context.Context, refreshToken string, userID string) (*model.User, error) {
	user, err := r.Service.ChangePassword(refreshToken, userID)
	if err != nil {
		return nil, err
	}

	return user, nil
}

// VerifyEmail is the resolver for the verifyEmail field.
func (r *mutationResolver) VerifyEmail(ctx context.Context, refreshToken string) (*model.User, error) {
	user, err := r.Service.VerifyEmail(refreshToken)
	if err != nil {
		return nil, err
	}

	return user, nil
}

// Refresh is the resolver for the refresh field.
func (r *queryResolver) Refresh(ctx context.Context, refreshToken string) (*model.User, error) {
	user, err := r.Service.RefreshToken(refreshToken)
	if err != nil {
		return nil, err
	}

	return user, nil
}

// SignOut is the resolver for the signOut field.
func (r *queryResolver) SignOut(ctx context.Context, refreshToken string) (*model.User, error) {
	user, err := r.Service.SignOut(refreshToken)
	if err != nil {
		return nil, err
	}

	return user, nil
}
