package controller

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"

	"github.com/cavelms/internal/model"
)

// CreateQuiz is the resolver for the createQuiz field.
func (r *mutationResolver) CreateQuiz(ctx context.Context, input model.CreateQuizInput) (*model.Quiz, error) {
	panic(fmt.Errorf("not implemented: CreateQuiz - createQuiz"))
}

// UpdateQuiz is the resolver for the updateQuiz field.
func (r *mutationResolver) UpdateQuiz(ctx context.Context, id string, input model.UpdateQuizInput) (*model.Quiz, error) {
	panic(fmt.Errorf("not implemented: UpdateQuiz - updateQuiz"))
}

// DeleteQuiz is the resolver for the deleteQuiz field.
func (r *mutationResolver) DeleteQuiz(ctx context.Context, id string) (bool, error) {
	panic(fmt.Errorf("not implemented: DeleteQuiz - deleteQuiz"))
}

// SubmitQuiz is the resolver for the submitQuiz field.
func (r *mutationResolver) SubmitQuiz(ctx context.Context, quizID string, input model.SubmissionInput) (*model.Submission, error) {
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

// !!! WARNING !!!
// The code below was going to be deleted when updating resolvers. It has been copied here so you have
// one last chance to move it out of harms way if you want. There are two reasons this happens:
//   - When renaming or deleting a resolver the old code will be put in here. You can safely delete
//     it when you're done.
//   - You have helper methods in this file. Move them out to keep these resolver files clean.
func (r *Resolver) CreateQuiz(ctx context.Context, input model.CreateQuizInput) (*model.Quiz, error) {
	quiz, err := r.Service.CreateQuiz(ctx, input)
	if err != nil {
		return nil, err
	}
	return quiz, nil
}
func (r *Resolver) UpdateQuiz(ctx context.Context, id string, input model.UpdateQuizInput) (*model.Quiz, error) {
	quiz, err := r.Service.UpdateQuiz(ctx, id, input)
	if err != nil {
		return nil, err
	}
	return quiz, nil
}
func (r *Resolver) DeleteQuiz(ctx context.Context, id string) (bool, error) {
	deleted, err := r.Service.DeleteQuiz(ctx, id)
	if err != nil {
		return false, err
	}
	return deleted, nil
}
func (r *Resolver) SubmitQuiz(ctx context.Context, quizID string, input model.SubmissionInput) (*model.Submission, error) {
	submission, err := r.Service.SubmitQuiz(ctx, quizID, input)
	if err != nil {
		return nil, err
	}
	return submission, nil
}
func (r *Resolver) Quiz(ctx context.Context, id string) (*model.Quiz, error) {
	quiz, err := r.Service.GetQuize(ctx, id)
	if err != nil {
		return nil, err
	}
	return quiz, nil
}
func (r *Resolver) Quizzes(ctx context.Context) ([]model.Quiz, error) {
	quizzes, err := r.Service.GetQuizes(ctx, nil)
	if err != nil {
		return nil, err
	}
	return quizzes, nil
}
func (r *Resolver) Submission(ctx context.Context, id string) (*model.Submission, error) {
	submission, err := r.Service.GetSubmission(ctx, id)
	if err != nil {
		return nil, err
	}
	return submission, nil
}
func (r *Resolver) Submissions(ctx context.Context) ([]model.Submission, error) {
	submissions, err := r.Service.GetSubmissions(ctx, nil)
	if err != nil {
		return nil, err
	}
	return submissions, nil
}
