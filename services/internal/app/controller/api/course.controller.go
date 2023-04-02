package controller

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"

	"github.com/cavelms/internal/model"
)

// CreateCourse is the resolver for the createCourse field.
func (r *mutationResolver) CreateCourse(ctx context.Context, input *model.CreateCourseInput) (*model.Course, error) {
	course, err := r.Service.CreateCourse(ctx, input)
	if err != nil {
		return nil, err
	}

	return course, nil
}

// UpdateCourse is the resolver for the updateCourse field.
func (r *mutationResolver) UpdateCourse(ctx context.Context, input interface{}) (*model.Course, error) {
	course, err := r.Service.UpdateCourse(ctx, input)
	if err != nil {
		return nil, err
	}

	return course, nil
}

// DeleteCourse is the resolver for the deleteCourse field.
func (r *mutationResolver) DeleteCourse(ctx context.Context, id string) (*model.Course, error) {
	course, err := r.Service.DeleteCourse(ctx, id)
	if err != nil {
		return nil, err
	}

	return course, nil
}

// Courses is the resolver for the Courses field.
func (r *queryResolver) Courses(ctx context.Context, userID *string) ([]model.Course, error) {
	course, err := r.Service.GetCourses(ctx, userID)
	if err != nil {
		return nil, err
	}

	return course, nil
}

// Course is the resolver for the course field.
func (r *queryResolver) Course(ctx context.Context, id string) (*model.Course, error) {
	course, err := r.Service.GetCourseByID(ctx, id)
	if err != nil {
		return nil, err
	}

	return course, nil
}
