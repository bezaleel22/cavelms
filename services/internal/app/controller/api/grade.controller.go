package controller

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"

	"github.com/cavelms/internal/model"
)

// CreateGrade is the resolver for the createGrade field.
func (r *mutationResolver) CreateGrade(ctx context.Context, input model.CreateGradeInput) (*model.Grade, error) {
	grade, err := r.Service.CreateGrade(ctx, input)
	if err != nil {
		return nil, err
	}
	return grade, nil
}

// UpdateGrade is the resolver for the updateGrade field.
func (r *mutationResolver) UpdateGrade(ctx context.Context, id string, input model.UpdateGradeInput) (*model.Grade, error) {
	grade, err := r.Service.UpdateGrade(ctx, id, input)
	if err != nil {
		return nil, err
	}
	return grade, nil
}

// DeleteGrade is the resolver for the deleteGrade field.
func (r *mutationResolver) DeleteGrade(ctx context.Context, id string) (bool, error) {
	deleted, err := r.Service.DeleteGrade(ctx, id)
	if err != nil {
		return false, err
	}
	return deleted, nil
}

// Grades is the resolver for the grades field.
func (r *queryResolver) Grades(ctx context.Context) ([]model.Grade, error) {
	grades, err := r.Service.GetGrades(ctx)
	if err != nil {
		return nil, err
	}
	return grades, nil
}

// Grade is the resolver for the grade field.
func (r *queryResolver) Grade(ctx context.Context, id string) (*model.Grade, error) {
	grade, err := r.Service.GetGradeById(ctx, id)
	if err != nil {
		return nil, err
	}
	return grade, nil
}
