package controller

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"

	"github.com/cavelms/internal/model"
)

// CreateGrade is the resolver for the createGrade field.
func (r *mutationResolver) CreateGrade(ctx context.Context, input model.CreateGradeInput) (*model.Grade, error) {
	panic(fmt.Errorf("not implemented: CreateGrade - createGrade"))
}

// UpdateGrade is the resolver for the updateGrade field.
func (r *mutationResolver) UpdateGrade(ctx context.Context, id string, input model.UpdateGradeInput) (*model.Grade, error) {
	panic(fmt.Errorf("not implemented: UpdateGrade - updateGrade"))
}

// DeleteGrade is the resolver for the deleteGrade field.
func (r *mutationResolver) DeleteGrade(ctx context.Context, id string) (bool, error) {
	panic(fmt.Errorf("not implemented: DeleteGrade - deleteGrade"))
}

// Grades is the resolver for the grades field.
func (r *queryResolver) Grades(ctx context.Context) ([]model.Grade, error) {
	panic(fmt.Errorf("not implemented: Grades - grades"))
}

// Grade is the resolver for the grade field.
func (r *queryResolver) Grade(ctx context.Context, id string) (*model.Grade, error) {
	panic(fmt.Errorf("not implemented: Grade - grade"))
}
