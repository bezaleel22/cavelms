package api

import (
	"context"

	"github.com/cavelms/internal/model"
)

func (api *API) GetGrades(ctx context.Context) ([]model.Grade, error) {
	var grades []model.Grade
	err := api.DB.FetchAll(&grades, &model.Grade{})
	if err != nil {
		return nil, err
	}
	return grades, nil
}

func (api *API) GetGradeById(ctx context.Context, id string) (*model.Grade, error) {
	grade := model.Grade{ID: id}
	err := api.DB.FetchByID(&grade)
	if err != nil {
		return nil, err
	}
	return &grade, nil
}

func (api *API) CreateGrade(ctx context.Context, input model.CreateGradeInput) (*model.Grade, error) {

	grade := &model.Grade{
		StudentID: input.StudentID,
		CourseID:  input.CourseID,
		QuizID:    input.QuizID,
		Value:     input.Value,
		Criteria:  input.Criteria,
		Comments:  input.Comments,
	}

	err := api.DB.Create(grade)
	if err != nil {
		return nil, err
	}

	return grade, nil
}

func (api *API) UpdateGrade(ctx context.Context, id string, input model.UpdateGradeInput) (*model.Grade, error) {
	grade := model.Grade{ID: id}
	err := api.DB.FetchByID(&grade)
	if err != nil {
		return nil, err
	}

	if input.StudentID != "" {
		grade.StudentID = input.StudentID
	}
	if input.CourseID != "" {
		grade.CourseID = input.CourseID
	}
	if input.QuizID != "" {
		grade.QuizID = input.QuizID
	}
	if input.Value != 0 {
		grade.Value = input.Value
	}
	if input.Criteria != "" {
		grade.Criteria = input.Criteria
	}
	if input.Comments != "" {
		grade.Comments = input.Comments
	}

	err = api.DB.UpdateOne(&grade)
	if err != nil {
		return nil, err
	}

	return &grade, nil
}

func (api *API) DeleteGrade(ctx context.Context, id string) (bool, error) {
	// Create a new model.Grade object to fetch the record from the database.
	grade := &model.Grade{ID: id}

	// Delete the record using the MongoDB repository.
	err := api.DB.Delete(grade)
	if err != nil {
		return false, err
	}

	return true, nil
}
