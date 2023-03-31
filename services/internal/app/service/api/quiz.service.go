package api

// import (
// 	"context"

// 	"github.com/cavelms/internal/model"
// )

// func (api *API) CreateQuiz(ctx context.Context, input model.CreateQuizInput) (*model.Quiz, error) {
// 	quiz := &model.Quiz{
// 		Name:               input.Name,
// 		Description:        input.Description,
// 		QuizType:           input.QuizType,
// 		Duration:           input.Duration,
// 		PassingScore:       input.PassingScore,
// 		ProctoringMethod:   input.ProctoringMethod,
// 		ResultsReleaseDate: input.ResultsReleaseDate,
// 		Certificate:        input.Certificate,
// 		StartTime:          input.StartTime,
// 		EndTime:            input.EndTime,
// 		StartDate:          input.StartDate,
// 		DueDate:            input.DueDate,
// 		TimeLimit:          input.TimeLimit,
// 		RandomizeQuestions: input.RandomizeQuestions,
// 		RandomizeAnswers:   input.RandomizeAnswers,
// 		Categories:         input.Categories,
// 	}
// 	err := api.DB.Create(quiz)
// 	if err != nil {
// 		return nil, err
// 	}
// 	return quiz, nil
// }

// func (api *API) UpdateQuiz(ctx context.Context, id string, input model.UpdateQuizInput) (*model.Quiz, error) {
// 	quiz := &model.Quiz{
// 		ID:                 id,
// 		Name:               input.Name,
// 		Duration:           input.Duration,
// 		PassingScore:       input.PassingScore,
// 		ProctoringMethod:   input.ProctoringMethod,
// 		ResultsReleaseDate: input.ResultsReleaseDate,
// 		Certificate:        input.Certificate,
// 		TimeLimit:          input.TimeLimit,
// 		RandomizeQuestions: input.RandomizeQuestions,
// 		RandomizeAnswers:   input.RandomizeAnswers,
// 	}
// 	err := api.DB.UpdateOne(quiz)
// 	if err != nil {
// 		return nil, err
// 	}
// 	return quiz, nil
// }

// func (api *API) DeleteQuiz(ctx context.Context, id string) (*bool, error) {
// 	err := api.DB.Delete(&model.Quiz{ID: id})
// 	if err != nil {
// 		return nil, err
// 	}
// 	return true, nil
// }

// func (api *API) SubmitQuiz(ctx context.Context, quizID string, answers []model.AnswerInput) (*model.Submission, error) {
// 	submission := &model.Submission{
// 		QuizID,
// 		Answers,
// 	}
// 	err := api.DB.Create(submission)
// 	if err != nil {
// 		return nil, err
// 	}
// 	return submission, nil
// }

// func (api *API) CreateCategory(ctx context.Context, input model.CreateCategoryInput) (*model.Category, error) {
// 	category := &model.Category{
// 		Name:        input.Name,
// 		Description: input.Description,
// 	}
// 	err := api.DB.Create(category)
// 	if err != nil {
// 		return nil, err
// 	}
// 	return category, nil
// }

// func (api *API) UpdateCategory(ctx context.Context, id string, input model.UpdateCategoryInput) (*model.Category, error) {
// 	category := &model.Category{
// 		ID:          id,
// 		Name:        input.Name,
// 		Description: input.Description,
// 	}
// 	err := api.DB.UpdateOne(category)
// 	if err != nil {
// 		return nil, err
// 	}
// 	return category, nil
// }

// func (api *API) DeleteCategory(ctx context.Context, id string) (*bool, error) {
// 	err := api.DB.Delete(&model.Category{ID: id})
// 	if err != nil {
// 		return nil, err
// 	}
// 	return true, nil
// }

// func (api *API) CreateMatchingPair(ctx context.Context, input model.CreateMatchingPairInput) (*model.MatchingPair, error) {
// 	matchingPair := &model.MatchingPair{
// 		LeftItem:  input.LeftItem,
// 		RightItem: input.RightItem,
// 	}
// 	err := api.DB.Create(matchingPair)
// 	if err != nil {
// 		return nil, err
// 	}
// 	return matchingPair, nil
// }

// func (api *API) UpdateMatchingPair(ctx context.Context, id string, input model.UpdateMatchingPairInput) (*model.MatchingPair, error) {
// 	matchingPair := &model.MatchingPair{
// 		ID:        id,
// 		LeftItem:  input.LeftItem,
// 		RightItem: input.RightItem,
// 	}
// 	err := api.DB.UpdateOne(matchingPair)
// 	if err != nil {
// 		return nil, err
// 	}
// 	return matchingPair, nil
// }

// func (api *API) DeleteMatchingPair(ctx context.Context, id string) (*bool, error) {
// 	err := api.DB.Delete(&model.MatchingPair{ID: id})
// 	if err != nil {
// 		return nil, err
// 	}
// 	return true, nil
// }
