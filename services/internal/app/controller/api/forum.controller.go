package controller

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"

	"github.com/cavelms/internal/model"
)

// Forums is the resolver for the forums field.
func (r *queryResolver) Forums(ctx context.Context, courseID *string) ([]model.Forum, error) {
	forums, err := r.Service.Forums(ctx, courseID)
	if err != nil {
		return nil, err
	}
	return forums, nil
}

// Forum is the resolver for the forum field.
func (r *queryResolver) Forum(ctx context.Context, id string) (*model.Forum, error) {
	forum, err := r.Service.Forum(ctx, id)
	if err != nil {
		return nil, err
	}
	return forum, nil
}

// ForumPosts is the resolver for the forumPosts field.
func (r *queryResolver) ForumPosts(ctx context.Context, courseID *string, tags []string) ([]model.ForumPost, error) {
	posts, err := r.Service.ForumPosts(ctx, courseID, tags)
	if err != nil {
		return nil, err
	}
	return posts, nil
}

// ForumPost is the resolver for the forumPost field.
func (r *queryResolver) ForumPost(ctx context.Context, id string) (*model.ForumPost, error) {
	post, err := r.Service.ForumPost(ctx, id)
	if err != nil {
		return nil, err
	}
	return post, nil
}

// ForumComments is the resolver for the forumComments field.
func (r *queryResolver) ForumComments(ctx context.Context, courseID *string) ([]model.ForumComment, error) {
	comments, err := r.Service.ForumComments(ctx, courseID)
	if err != nil {
		return nil, err
	}
	return comments, nil
}

// ForumComment is the resolver for the forumComment field.
func (r *queryResolver) ForumComment(ctx context.Context, id string) (*model.ForumComment, error) {
	comment, err := r.Service.ForumComment(ctx, id)
	if err != nil {
		return nil, err
	}
	return comment, nil
}
