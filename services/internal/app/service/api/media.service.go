package api

import (
	"context"

	"github.com/cavelms/internal/model"
)

func (api *API) CreateMedia(ctx context.Context, input model.CreatMediaInput) (*model.Media, error) {
	file := &model.File{
		Name:     input.File.Name,
		Mimetype: input.File.MimeType,
		Size:     input.File.Size,
		URL:      input.File.URL,
	}

	media := model.Media{
		Title:       input.Title,
		Description: input.Description,
		Category:    input.Category,
		MediaType:   input.MediaType,
		File:        file,
	}

	err := api.DB.Create(&media)
	if err != nil {
		return nil, err
	}

	return &media, nil
}

func (api *API) UpdateMedia(ctx context.Context, input model.UpdateMediaInput) (*model.Media, error) {
	file := &model.File{
		Name:     input.File.Name,
		Mimetype: input.File.Mimetype,
		Size:     input.File.Size,
		URL:      input.File.URL,
	}

	media := model.Media{
		ID:          input.ID,
		Title:       input.Title,
		Description: input.Description,
		Category:    input.Category,
		MediaType:   input.MediaType,
		File:        file,
	}

	err := api.DB.Create(&media)
	if err != nil {
		return nil, err
	}

	return &media, nil
}

func (api *API) GetMediaById(ctx context.Context, id string) (*model.Media, error) {
	media := &model.Media{}
	media.ID = id
	err := api.DB.FetchByID(media)
	if err != nil {
		return nil, err
	}

	return media, nil
}

func (api *API) DeleteMedia(ctx context.Context, id string) (*model.Media, error) {
	media := &model.Media{}
	media.ID = id
	err := api.DB.Delete(media)
	if err != nil {
		return nil, err
	}

	return media, nil
}

func (api *API) GetMediaByType(ctx context.Context, typeArg model.MediaType) ([]model.Media, error) {
	media := &model.Media{}
	medias := []model.Media{}

	err := api.DB.FetchManyWhere(medias, media, string(typeArg))
	if err != nil {
		return nil, err
	}

	return medias, nil
}

func (api *API) GetAllMedias(ctx context.Context) ([]model.Media, error) {
	media := &model.Media{}
	medias := []model.Media{}

	err := api.DB.FetchAll(medias, media)
	if err != nil {
		return nil, err
	}

	return medias, nil
}
