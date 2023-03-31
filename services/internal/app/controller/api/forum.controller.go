package controller

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"

	"github.com/cavelms/internal/model"
)

// Forums is the resolver for the forums field.
func (r *queryResolver) Forums(ctx context.Context, courseID *string) ([]model.Forum, error) {
	panic(fmt.Errorf("not implemented: Forums - forums"))
}

// Forum is the resolver for the forum field.
func (r *queryResolver) Forum(ctx context.Context, id string) (*model.Forum, error) {
	panic(fmt.Errorf("not implemented: Forum - forum"))
}

// ForumPosts is the resolver for the forumPosts field.
func (r *queryResolver) ForumPosts(ctx context.Context, courseID *string, tags []*string) ([]model.ForumPost, error) {
	panic(fmt.Errorf("not implemented: ForumPosts - forumPosts"))
}

// ForumPost is the resolver for the forumPost field.
func (r *queryResolver) ForumPost(ctx context.Context, id string) (*model.ForumPost, error) {
	panic(fmt.Errorf("not implemented: ForumPost - forumPost"))
}

// ForumComments is the resolver for the forumComments field.
func (r *queryResolver) ForumComments(ctx context.Context, courseID *string) ([]model.ForumComment, error) {
	panic(fmt.Errorf("not implemented: ForumComments - forumComments"))
}

// ForumComment is the resolver for the forumComment field.
func (r *queryResolver) ForumComment(ctx context.Context, id string) (*model.ForumComment, error) {
	panic(fmt.Errorf("not implemented: ForumComment - forumComment"))
}
