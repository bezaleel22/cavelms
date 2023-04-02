package controller

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"

	"github.com/cavelms/graph/generated"
	"github.com/cavelms/internal/model"
)

// CreateEvaluationCriteria is the resolver for the createEvaluationCriteria field.
func (r *mutationResolver) CreateEvaluationCriteria(ctx context.Context, input model.CreateEvaluationCriteriaInput) (*model.EvaluationCriteria, error) {
	evalCriteria, err := r.Service.CreateEvaluationCriteria(ctx, input)
	if err != nil {
		return nil, err
	}
	return evalCriteria, nil
}

// UpdateEvaluationCriteria is the resolver for the updateEvaluationCriteria field.
func (r *mutationResolver) UpdateEvaluationCriteria(ctx context.Context, id string, input model.UpdateEvaluationCriteriaInput) (*model.EvaluationCriteria, error) {
	evalCriteria, err := r.Service.UpdateEvaluationCriteria(ctx, id, input)
	if err != nil {
		return nil, err
	}
	return evalCriteria, nil
}

// DeleteEvaluationCriteria is the resolver for the deleteEvaluationCriteria field.
func (r *mutationResolver) DeleteEvaluationCriteria(ctx context.Context, id string) (*model.EvaluationCriteria, error) {
	evalCriteria, err := r.Service.DeleteEvaluationCriteria(ctx, id)
	if err != nil {
		return nil, err
	}
	return evalCriteria, nil
}

// EvaluationCriterias is the resolver for the evaluationCriterias field.
func (r *queryResolver) EvaluationCriterias(ctx context.Context) ([]model.EvaluationCriteria, error) {
	evalCriterias, err := r.Service.EvaluationCriterias(ctx)
	if err != nil {
		return nil, err
	}
	return evalCriterias, nil
}

// EvaluationCriteria is the resolver for the evaluationCriteria field.
func (r *queryResolver) EvaluationCriteria(ctx context.Context, id string) (*model.EvaluationCriteria, error) {
	evalCriteria, err := r.Service.EvaluationCriteria(ctx, id)
	if err != nil {
		return nil, err
	}
	return evalCriteria, nil
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
