package api

import (
	"context"
	"fmt"

	"github.com/cavelms/internal/model"
)

func (api *API) CreateUserSetting(ctx context.Context, UserID string, Input model.NewSetting) (*model.UserSetting, error) {
	// Create a new model.UserSetting object from the input
	setting := model.UserSetting{
		UserID: UserID,
		Type:   Input.Type,
		Key:    *Input.UserKey,
		Value:  Input.Value,
	}

	// Insert the new model.UserSetting into the database
	err := api.DB.Create(&setting)
	if err != nil {
		return nil, fmt.Errorf("failed to create user setting: %v", err)
	}

	return &setting, nil
}

func (api *API) UpdateUserSetting(ctx context.Context, ID string, Input model.UpdateSetting) (*model.UserSetting, error) {
	// Fetch the existing model.UserSetting object from the database
	setting := model.UserSetting{ID: ID}
	err := api.DB.FetchByID(&setting)
	if err != nil {
		return nil, fmt.Errorf("failed to fetch user setting: %v", err)
	}

	// Update the model.UserSetting object with the new value
	setting.Value = *Input.Value

	// Update the model.UserSetting in the database
	err = api.DB.UpdateOne(&setting)
	if err != nil {
		return nil, fmt.Errorf("failed to update user setting: %v", err)
	}

	return &setting, nil
}

func (api *API) DeleteUserSetting(ctx context.Context, ID string) (bool, error) {
	// Delete the model.UserSetting object from the database
	setting := model.UserSetting{ID: ID}
	err := api.DB.Delete(&setting)
	if err != nil {
		return false, fmt.Errorf("failed to delete user setting: %v", err)
	}

	return true, nil
}

func (api *API) UserSetting(ctx context.Context, id string) (*model.UserSetting, error) {
	// Fetch the model.UserSetting object from the database
	setting := model.UserSetting{ID: id}
	err := api.DB.FetchByID(&setting)
	if err != nil {
		return nil, fmt.Errorf("failed to fetch user setting: %v", err)
	}

	return &setting, nil
}

func (api *API) UserSettings(ctx context.Context, UserID string, Limit int, Offset int) ([]model.UserSetting, error) {
	// Fetch all model.UserSetting objects for the given user ID from the database
	settings := []model.UserSetting{}
	err := api.DB.FetchByUserID(&settings, &model.UserSetting{UserID: UserID})
	if err != nil {
		return nil, fmt.Errorf("failed to fetch user settings: %v", err)
	}

	return settings, nil
}

// Define the GlobalSetting resolver methods.
func (api *API) GlobalSetting(ctx context.Context, id string) (*model.GlobalSetting, error) {
	setting := model.GlobalSetting{ID: id}
	err := api.DB.FetchByID(&setting)
	if err != nil {
		return nil, err
	}
	return &setting, nil
}

func (api *API) GlobalSettings(ctx context.Context, Limit int, Offset int) ([]model.GlobalSetting, error) {
	var settings []model.GlobalSetting
	err := api.DB.FetchAll(&settings, &model.GlobalSetting{})
	if err != nil {
		return nil, err
	}
	return settings, nil
}

func (api *API) CreateGlobalSetting(ctx context.Context, Input model.NewSetting) (*model.GlobalSetting, error) {
	setting := &model.GlobalSetting{
		Type:  Input.Type,
		Key:   *Input.GlobalKey,
		Value: Input.Value,
	}
	err := api.DB.Create(setting)
	if err != nil {
		return nil, err
	}
	return setting, nil
}

func (api *API) UpdateGlobalSetting(ctx context.Context, id string, Input *model.UpdateSetting) (*model.GlobalSetting, error) {
	// Fetch global setting by ID
	gs := &model.GlobalSetting{ID: id}
	if err := api.DB.FetchByID(gs); err != nil {
		return nil, err
	}

	// Update global setting with new value
	if Input.Value != nil {
		gs.Value = *Input.Value
	}

	// Update global setting in the database
	if err := api.DB.UpdateOne(gs); err != nil {
		return nil, err
	}

	// Return updated global setting
	return gs, nil
}

func (api *API) DeleteGlobalSetting(ctx context.Context, id string) (bool, error) {
	// Fetch the global setting with the given ID
	gs := model.GlobalSetting{ID: id}
	if err := api.DB.FetchByID(&gs); err != nil {
		return false, err
	}

	// Delete the global setting from the database
	if err := api.DB.Delete(&gs); err != nil {
		return false, err
	}

	return true, nil
}
