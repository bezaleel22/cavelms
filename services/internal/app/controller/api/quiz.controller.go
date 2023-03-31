package controller

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"

	"github.com/cavelms/internal/model"
)

// CreateQuiz is the resolver for the createQuiz field.
func (r *mutationResolver) CreateQuiz(ctx context.Context, input model.CreateQuestionInput) (*model.Quiz, error) {
	panic(fmt.Errorf("not implemented: CreateQuiz - createQuiz"))
}

// UpdateQuiz is the resolver for the updateQuiz field.
func (r *mutationResolver) UpdateQuiz(ctx context.Context, id string, input model.UpdateQuizInput) (*model.Quiz, error) {
	panic(fmt.Errorf("not implemented: UpdateQuiz - updateQuiz"))
}

// DeleteQuiz is the resolver for the deleteQuiz field.
func (r *mutationResolver) DeleteQuiz(ctx context.Context, id string) (*bool, error) {
	panic(fmt.Errorf("not implemented: DeleteQuiz - deleteQuiz"))
}

// SubmitQuiz is the resolver for the submitQuiz field.
func (r *mutationResolver) SubmitQuiz(ctx context.Context, quizID string, answers []model.AnswerInput) (*model.Submission, error) {
	panic(fmt.Errorf("not implemented: SubmitQuiz - submitQuiz"))
}

// Quiz is the resolver for the quiz field.
func (r *queryResolver) Quiz(ctx context.Context, id string) (*model.Quiz, error) {
	panic(fmt.Errorf("not implemented: Quiz - quiz"))
}

// Quizzes is the resolver for the quizzes field.
func (r *queryResolver) Quizzes(ctx context.Context) ([]model.Quiz, error) {
	panic(fmt.Errorf("not implemented: Quizzes - quizzes"))
}

// Submission is the resolver for the submission field.
func (r *queryResolver) Submission(ctx context.Context, id string) (*model.Submission, error) {
	panic(fmt.Errorf("not implemented: Submission - submission"))
}

// Submissions is the resolver for the submissions field.
func (r *queryResolver) Submissions(ctx context.Context) ([]model.Submission, error) {
	panic(fmt.Errorf("not implemented: Submissions - submissions"))
}
