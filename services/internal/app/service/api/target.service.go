package api

import (
	"context"

	"github.com/cavelms/internal/model"
)

func (api *API) CreateTarget(ctx context.Context, input model.CreateTargetInput) (*model.Target, error) {
	target := &model.Target{
		Name:         input.Name,
		Description:  input.Description,
		DueDate:      input.EndDate,
		CourseID:     input.CourseID,
		IsCompleted:  false,
		TargetType:   *input.TargetType,
		TargetValue:  &input.TargetValue,
		TargetMetric: input.TargetMetric,
		Units:        *input.Units,
	}
	err := api.DB.Create(target)
	if err != nil {
		return nil, err
	}
	return target, nil
}

func (api *API) UpdateTarget(ctx context.Context, id string, input *model.UpdateTargetInput) (*model.Target, error) {

	target := &model.Target{ID: id}

	err := api.DB.FetchByID(target)
	if err != nil {
		return nil, err
	}
	if input.Name != nil {
		target.Name = *input.Name
	}
	if input.Description != nil {
		target.Description = input.Description
	}
	if input.StartDate != nil {
		target.StartDate = input.StartDate
	}
	if input.EndDate != nil {
		target.DueDate = input.EndDate
	}
	if input.TargetValue != nil {
		target.TargetValue = input.TargetValue
	}
	if input.Units != nil {
		target.Units = *input.Units
	}
	err = api.DB.UpdateOne(target)
	if err != nil {
		return nil, err
	}
	return target, nil
}

func (api *API) DeleteTarget(ctx context.Context, id string) (*model.Target, error) {
	target := &model.Target{ID: id}
	err := api.DB.FetchByID(target)
	if err != nil {
		return nil, err
	}
	err = api.DB.Delete(target)
	if err != nil {
		return nil, err
	}
	return target, nil
}

func (api *API) GetTargets(ctx context.Context, courseID string) ([]model.Target, error) {
	targets := []model.Target{}
	target := model.Target{}
	err := api.DB.FetchManyWhere(&target, &targets, courseID)
	if err != nil {
		return nil, err
	}
	return targets, nil
}

func (api *API) GetTarget(ctx context.Context, id string) (*model.Target, error) {

	target := &model.Target{ID: id}
	err := api.DB.FetchByID(target)
	if err != nil {
		return nil, err
	}
	return target, nil
}
