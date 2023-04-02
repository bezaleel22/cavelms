package api

import (
	"context"

	"github.com/cavelms/internal/model"
)

func (api *API) CreateEvaluationCriteria(ctx context.Context, input model.CreateEvaluationCriteriaInput) (*model.EvaluationCriteria, error) {
	evaluationCriteria := model.EvaluationCriteria{
		PassingScore:       input.PassingScore,
		Weight:             input.Weight,
		ResubmissionPolicy: *input.ResubmissionPolicy,
		IsPassFail:         input.IsPassFail,
		QuizID:             input.QuizID,
	}
	err := api.DB.Create(&evaluationCriteria)
	if err != nil {
		return nil, err
	}
	return &evaluationCriteria, nil
}

func (api *API) UpdateEvaluationCriteria(ctx context.Context, id string, input model.UpdateEvaluationCriteriaInput) (*model.EvaluationCriteria, error) {
	var evaluationCriteria model.EvaluationCriteria
	err := api.DB.FetchByID(&evaluationCriteria)
	if err != nil {
		return nil, err
	}
	if input.PassingScore != nil {
		evaluationCriteria.PassingScore = *input.PassingScore
	}
	if input.Weight != nil {
		evaluationCriteria.Weight = *input.Weight
	}
	if input.ResubmissionPolicy != nil {
		evaluationCriteria.ResubmissionPolicy = *input.ResubmissionPolicy
	}
	if input.IsPassFail != nil {
		evaluationCriteria.IsPassFail = *input.IsPassFail
	}
	if input.QuizID != nil {
		evaluationCriteria.QuizID = *input.QuizID
	}
	err = api.DB.UpdateOne(&evaluationCriteria)
	if err != nil {
		return nil, err
	}
	return &evaluationCriteria, nil
}

func (api *API) DeleteEvaluationCriteria(ctx context.Context, id string) (*model.EvaluationCriteria, error) {
	var evaluationCriteria model.EvaluationCriteria
	err := api.DB.FetchByID(&evaluationCriteria)
	if err != nil {
		return nil, err
	}
	err = api.DB.Delete(&evaluationCriteria)
	if err != nil {
		return nil, err
	}
	return &evaluationCriteria, nil
}

func (api *API) EvaluationCriterias(ctx context.Context) ([]model.EvaluationCriteria, error) {
	var evaluationCriterias []model.EvaluationCriteria
	err := api.DB.FetchAll(&evaluationCriterias, &model.EvaluationCriteria{})
	if err != nil {
		return nil, err
	}
	return evaluationCriterias, nil
}

func (api *API) EvaluationCriteria(ctx context.Context, id string) (*model.EvaluationCriteria, error) {
	var evaluationCriteria model.EvaluationCriteria
	err := api.DB.FetchByID(&evaluationCriteria)
	if err != nil {
		return nil, err
	}
	return &evaluationCriteria, nil
}
