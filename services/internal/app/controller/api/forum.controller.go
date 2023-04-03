package controller

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"

	"github.com/cavelms/internal/model"
)

// CreateForum is the resolver for the createForum field.
func (r *mutationResolver) CreateForum(ctx context.Context, input model.CreateForumInput) (*model.Forum, error) {
	panic(fmt.Errorf("not implemented: CreateForum - createForum"))
}

// UpdateForum is the resolver for the updateForum field.
func (r *mutationResolver) UpdateForum(ctx context.Context, id string, input model.UpdateForumInput) (*model.Forum, error) {
	panic(fmt.Errorf("not implemented: UpdateForum - updateForum"))
}

// DeleteForum is the resolver for the deleteForum field.
func (r *mutationResolver) DeleteForum(ctx context.Context, id string) (*model.Forum, error) {
	panic(fmt.Errorf("not implemented: DeleteForum - deleteForum"))
}

// CreateForumPost is the resolver for the createForumPost field.
func (r *mutationResolver) CreateForumPost(ctx context.Context, input model.CreateForumPostInput) (*model.ForumPost, error) {
	panic(fmt.Errorf("not implemented: CreateForumPost - createForumPost"))
}

// UpdateForumPost is the resolver for the updateForumPost field.
func (r *mutationResolver) UpdateForumPost(ctx context.Context, id string, input model.UpdateForumPostInput) (*model.ForumPost, error) {
	post, err := r.Service.UpdateForumPost(ctx, id, input)
	if err != nil {
		return nil, err
	}
	return post, nil
}

// DeleteForumPost is the resolver for the deleteForumPost field.
func (r *mutationResolver) DeleteForumPost(ctx context.Context, id string) (*model.ForumPost, error) {
	post, err := r.Service.DeleteForumPost(ctx, id)
	if err != nil {
		return nil, err
	}
	return post, nil
}

// CreateForumComment is the resolver for the createForumComment field.
func (r *mutationResolver) CreateForumComment(ctx context.Context, input model.CreateForumCommentInput) (*model.ForumComment, error) {
	comment, err := r.Service.CreateForumComment(ctx, input)
	if err != nil {
		return nil, err
	}
	return comment, nil
}

// UpdateForumComment is the resolver for the updateForumComment field.
func (r *mutationResolver) UpdateForumComment(ctx context.Context, id string, input model.UpdateForumCommentInput) (*model.ForumComment, error) {
	comment, err := r.Service.UpdateForumComment(ctx, id, input)
	if err != nil {
		return nil, err
	}
	return comment, nil
}

// DeleteForumComment is the resolver for the deleteForumComment field.
func (r *mutationResolver) DeleteForumComment(ctx context.Context, id string) (*model.ForumComment, error) {
	comment, err := r.Service.DeleteForumComment(ctx, id)
	if err != nil {
		return nil, err
	}
	return comment, nil
}

// CreateTag is the resolver for the createTag field.
func (r *mutationResolver) CreateTag(ctx context.Context, input model.CreateTagInput) (*model.Tag, error) {
	tag, err := r.Service.CreateTag(ctx, input)
	if err != nil {
		return nil, err
	}
	return tag, nil
}

// UpdateTag is the resolver for the updateTag field.
func (r *mutationResolver) UpdateTag(ctx context.Context, id string, input model.UpdateTagInput) (*model.Tag, error) {
	tag, err := r.Service.UpdateTag(ctx, id, input)
	if err != nil {
		return nil, err
	}
	return tag, nil
}

// DeleteTag is the resolver for the deleteTag field.
func (r *mutationResolver) DeleteTag(ctx context.Context, id string) (*model.Tag, error) {
	tag, err := r.Service.DeleteTag(ctx, id)
	if err != nil {
		return nil, err
	}
	return tag, nil
}

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
