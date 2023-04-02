package api

import (
	"context"

	"github.com/cavelms/internal/model"
)

func (api *API) CreateQuiz(ctx context.Context, input model.CreateQuizInput) (*model.Quiz, error) {
	questions := []model.Question{}

	for _, q := range input.Questions {
		choices := []model.AnswerChoice{}
		for _, c := range q.Choices {
			choice := model.AnswerChoice(c)
			choices = append(choices, choice)
		}

		matchingPairs := []model.MatchingPair{}
		for _, m := range q.MatchingPairs {
			matchingPair := model.MatchingPair{
				Left:  m.Left,
				Right: m.Right,
			}

			matchingPairs = append(matchingPairs, matchingPair)
		}

		question := model.Question{
			CorrectAnswer: q.CorrectAnswer,
			Type:          q.Type,
			Feedback:      q.Feedback,
			Choices:       choices,
			Text:          q.Text,
			Categories:    q.Categories,
			Hints:         q.Hints,
			MatchingPairs: matchingPairs,
			PointValue:    q.PointValue,
		}
		questions = append(questions, question)
	}

	quiz := &model.Quiz{
		Name:             input.Name,
		TimeLimit:        input.TimeLimit,
		ShuffleQuestions: input.ShuffleQuestions,
		Categories:       input.Categories,
		Questions:        questions,
	}

	err := api.DB.Create(quiz)
	if err != nil {
		return nil, err
	}

	return quiz, nil
}

func (api *API) UpdateQuiz(ctx context.Context, id string, input model.UpdateQuizInput) (*model.Quiz, error) {
	questions := []model.Question{}

	for _, q := range input.Questions {

		choices := []model.AnswerChoice{}
		for _, c := range q.Choices {
			choice := model.AnswerChoice(c)
			choices = append(choices, choice)
		}

		matchingPairs := []model.MatchingPair{}
		for _, m := range q.MatchingPairs {
			matchingPair := model.MatchingPair{
				Left:  m.Left,
				Right: m.Right,
			}

			matchingPairs = append(matchingPairs, matchingPair)
		}

		question := model.Question{
			ID:            q.ID,
			CorrectAnswer: q.CorrectAnswer,
			Type:          q.Type,
			Feedback:      q.Feedback,
			Choices:       choices,
			Text:          q.Text,
			Categories:    q.Categories,
			Hints:         q.Hints,
			MatchingPairs: matchingPairs,
			PointValue:    q.PointValue,
		}
		questions = append(questions, question)
	}

	quiz := &model.Quiz{
		ID:               id,
		Name:             input.Name,
		TimeLimit:        input.TimeLimit,
		ShuffleQuestions: input.ShuffleQuestions,
		Categories:       input.Categories,
		Questions:        questions,
	}

	err := api.DB.UpdateOne(quiz)
	if err != nil {
		return nil, err
	}
	return quiz, nil
}

func (api *API) DeleteQuiz(ctx context.Context, id string) (bool, error) {
	err := api.DB.Delete(&model.Quiz{ID: id})
	if err != nil {
		return false, err
	}
	return true, nil
}

func (api *API) SubmitQuiz(ctx context.Context, quizID string, input model.SubmissionInput) (*model.Submission, error) {

	answers := []model.Answer{}
	for _, a := range input.Answers {

		choices := []model.AnswerChoice{}
		for _, c := range a.Choices {
			choice := model.AnswerChoice(c)
			choices = append(choices, choice)
		}

		answer := model.Answer{
			QuestionID:    a.QuestionID,
			Feedback:      a.Feedback,
			Choices:       choices,
			IsCorrect:     a.IsCorrect,
			PointsAwarded: a.PointsAwarded,
		}

		answers = append(answers, answer)
	}

	submission := &model.Submission{
		QuizID:  quizID,
		Answers: answers,
	}

	err := api.DB.Create(submission)
	if err != nil {
		return nil, err
	}
	return submission, nil
}

func (api *API) GetQuizes(ctx context.Context, courseId *string) ([]model.Quiz, error) {
	quiz := new(model.Quiz)
	quizes := []model.Quiz{}

	if courseId != nil {
		quiz.CourseID = *courseId
		err := api.DB.FetchByUserID(&quizes, quiz)
		if err != nil {
			return nil, err
		}
	} else {
		err := api.DB.FetchAll(&quizes, quiz)
		if err != nil {
			return nil, err
		}
	}

	return quizes, nil
}

func (api *API) GetQuize(ctx context.Context, id string) (*model.Quiz, error) {
	quiz := new(model.Quiz)
	quiz.ID = id
	err := api.DB.FetchByID(quiz)
	if err != nil {
		return nil, err
	}

	return quiz, nil
}

func (api *API) GetSubmissions(ctx context.Context, quizID *string) ([]model.Submission, error) {
	submission := new(model.Submission)
	submissions := []model.Submission{}

	if quizID != nil {
		submission.QuizID = *quizID
		err := api.DB.FetchByUserID(&submissions, submission)
		if err != nil {
			return nil, err
		}
	} else {
		err := api.DB.FetchAll(&submissions, submission)
		if err != nil {
			return nil, err
		}
	}

	return submissions, nil
}

func (api *API) GetSubmission(ctx context.Context, id string) (*model.Submission, error) {
	submission := new(model.Submission)
	submission.ID = id
	err := api.DB.FetchByID(submission)
	if err != nil {
		return nil, err
	}

	return submission, nil
}
