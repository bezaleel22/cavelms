package api

import (
	"context"
	"encoding/json"

	"github.com/cavelms/internal/model"
)

func (api *API) CreateCourse(ctx context.Context, input *model.CreateCourseInput) (*model.Course, error) {
	course := model.Course{
		Code:             input.Code,
		Title:            input.Title,
		UserID:           input.UserID,
		ShortDescription: input.ShortDescription,
		Description:      input.Description,
		Semester:         input.Semester,
		StartDate:        input.StartDate,
		EndDate:          input.EndDate,
		CoverImageURL:    input.CoverImageURL,
		Type:             input.Type,
		Status:           input.Status,
		ProgramType:      input.ProgramType,
		InstructorIds:    input.InstructorIds,
	}

	err := api.DB.Create(&course)
	if err != nil {
		return nil, err
	}

	return &course, nil
}

func (api *API) UpdateCourse(ctx context.Context, data interface{}) (*model.Course, error) {
	course := model.Course{}

	ub, err := json.Marshal(data)
	if err != nil {
		return nil, err
	}

	err = json.Unmarshal(ub, &course)
	if err != nil {
		return nil, err
	}

	err = api.DB.UpdateOne(&course)
	if err != nil {
		return nil, err
	}

	err = api.DB.FetchByID(&course)
	if err != nil {
		return nil, err
	}

	return &course, nil
}

func (api *API) GetCourses(ctx context.Context, userId *string) ([]model.Course, error) {
	course := new(model.Course)
	courses := []model.Course{}

	if userId != nil {
		course.UserID = *userId
		err := api .DB.FetchByUserID(&courses, course)
		if err != nil {
			return nil, err
		}
	} else {
		err := api .DB.FetchAll(&courses, course)
		if err != nil {
			return nil, err
		}
	}

	return courses, nil
}

func (api *API) GetCourseByID(ctx context.Context, id string) (*model.Course, error) {
	course := new(model.Course)
	course.ID = id
	err := api.DB.FetchByID(course)
	if err != nil {
		return nil, err
	}

	return course, nil
}

func (api *API) DeleteCourse(ctx context.Context, id string) (*model.Course, error) {
	course := new(model.Course)
	course.ID = id
	err := api.DB.FetchByID(course)
	if err != nil {
		return nil, err
	}

	return course, nil
}
