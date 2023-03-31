package controller

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"

	"github.com/cavelms/graph/generated"
	"github.com/cavelms/internal/model"
)

// CreateEvaluationCriteria is the resolver for the createEvaluationCriteria field.
func (r *mutationResolver) CreateEvaluationCriteria(ctx context.Context, input model.CreateEvaluationCriteriaInput) (*model.EvaluationCriteria, error) {
	panic(fmt.Errorf("not implemented: CreateEvaluationCriteria - createEvaluationCriteria"))
}

// UpdateEvaluationCriteria is the resolver for the updateEvaluationCriteria field.
func (r *mutationResolver) UpdateEvaluationCriteria(ctx context.Context, id string, input model.UpdateEvaluationCriteriaInput) (*model.EvaluationCriteria, error) {
	panic(fmt.Errorf("not implemented: UpdateEvaluationCriteria - updateEvaluationCriteria"))
}

// DeleteEvaluationCriteria is the resolver for the deleteEvaluationCriteria field.
func (r *mutationResolver) DeleteEvaluationCriteria(ctx context.Context, id string) (*model.EvaluationCriteria, error) {
	panic(fmt.Errorf("not implemented: DeleteEvaluationCriteria - deleteEvaluationCriteria"))
}

// EvaluationCriterias is the resolver for the evaluationCriterias field.
func (r *queryResolver) EvaluationCriterias(ctx context.Context) ([]model.EvaluationCriteria, error) {
	panic(fmt.Errorf("not implemented: EvaluationCriterias - evaluationCriterias"))
}

// EvaluationCriteria is the resolver for the evaluationCriteria field.
func (r *queryResolver) EvaluationCriteria(ctx context.Context, id string) (*model.EvaluationCriteria, error) {
	panic(fmt.Errorf("not implemented: EvaluationCriteria - evaluationCriteria"))
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
