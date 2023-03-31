package controller

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"

	"github.com/cavelms/internal/model"
)

// CreateMedia is the resolver for the createMedia field.
func (r *mutationResolver) CreateMedia(ctx context.Context, input model.CreatMediaInput) (*model.Media, error) {
	media, err := r.Service.CreateMedia(ctx, input)
	if err != nil {
		return nil, err
	}
	return media, nil
}

// UpdateMedia is the resolver for the updateMedia field.
func (r *mutationResolver) UpdateMedia(ctx context.Context, input model.UpdateMediaInput) (*model.Media, error) {
	media, err := r.Service.UpdateMedia(ctx, input)
	if err != nil {
		return nil, err
	}
	return media, nil
}

// DeleteMedia is the resolver for the deleteMedia field.
func (r *mutationResolver) DeleteMedia(ctx context.Context, id string) (*model.Media, error) {
	media, err := r.Service.DeleteMedia(ctx, id)
	if err != nil {
		return nil, err
	}
	return media, nil
}

// Media is the resolver for the media field.
func (r *queryResolver) Media(ctx context.Context, id string) (*model.Media, error) {
	media, err := r.Service.GetMediaById(ctx, id)
	if err != nil {
		return nil, err
	}
	return media, nil
}

// MediaByType is the resolver for the mediaByType field.
func (r *queryResolver) MediaByType(ctx context.Context, typeArg model.MediaType) ([]model.Media, error) {
	media, err := r.Service.GetMediaByType(ctx, typeArg)
	if err != nil {
		return nil, err
	}
	return media, nil
}

// AllMedia is the resolver for the allMedia field.
func (r *queryResolver) AllMedia(ctx context.Context) ([]model.Media, error) {
	media, err := r.Service.GetAllMedias(ctx)
	if err != nil {
		return nil, err
	}
	return media, nil
}
