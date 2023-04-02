package api

import (
	"context"
	"fmt"

	"github.com/cavelms/internal/model"
)

// CreateActivity is the resolver for the createActivity field.
func (api *API) CreateActivity(ctx context.Context, input model.CreateActivityInput) (*model.Activity, error) {
	activity := &model.Activity{
		UserID:          input.UserID,
		CourseID:        input.CourseID,
		CourseContentID: input.CourseContentID,
		ActivityType:    input.ActivityType,
	}
	err := api.DB.Create(activity)
	if err != nil {
		return nil, err
	}
	return activity, nil
}

// UpdateActivity is the resolver for the updateActivity field.
func (api *API) UpdateActivity(ctx context.Context, input model.UpdateActivityInput) (*model.Activity, error) {
	activity := &model.Activity{
		ID:              input.ID,
		CourseContentID: input.CourseContentID,
		ActivityType:    input.ActivityType,
	}
	err := api.DB.UpdateOne(activity)
	if err != nil {
		return nil, err
	}
	return activity, nil
}

// DeleteActivity is the resolver for the deleteActivity field.
func (api *API) DeleteActivity(ctx context.Context, id string) (bool, error) {
	activity := &model.Activity{
		ID: id,
	}
	err := api.DB.Delete(activity)
	if err != nil {
		return false, err
	}
	return true, nil
}

// Activities is the resolver for the activities field.
func (api *API) GetActivities(ctx context.Context, courseID *string) ([]model.Activity, error) {
	var activities []model.Activity
	var err error
	if courseID == nil {
		err = api.DB.FetchAll(&activities, &model.Activity{})
	} else {
		err = api.DB.FetchManyWhere(&activities, &model.Activity{CourseID: *courseID}, "course_id")
	}
	if err != nil {
		return nil, err
	}
	return activities, nil
}

// Activity is the resolver for the activity field.
func (api *API) GetActivity(ctx context.Context, id string) (*model.Activity, error) {
	activity := &model.Activity{
		ID: id,
	}
	err := api.DB.FetchByID(activity)
	if err != nil {
		return nil, err
	}
	return activity, nil
}

func (api *API) ActivityAdded(ctx context.Context) (<-chan *model.Activity, error) {
	// TODO: Implement subscription to get added activities
	panic(fmt.Errorf("not implemented: ActivityAdded - activityAdded"))
}

func (api *API) ActivityUpdated(ctx context.Context) (<-chan *model.Activity, error) {
	// TODO: Implement subscription to get updated activities
	panic(fmt.Errorf("not implemented: ActivityUpdated - activityUpdated"))
}

func (api *API) ActivityDeleted(ctx context.Context) (<-chan *string, error) {
	// TODO: Implement subscription to get deleted activity IDs
	panic(fmt.Errorf("not implemented: ActivityDeleted - activityDeleted"))
}
