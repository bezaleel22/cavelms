package api

import (
	"context"

	"github.com/cavelms/internal/model"
	"github.com/google/uuid"
)

func (api *API) Forums(ctx context.Context, courseID *string) ([]model.Forum, error) {
	var forums []model.Forum
	err := api.DB.FetchAll(&forums, &model.Forum{
		CourseID: *courseID,
	})
	if err != nil {
		return nil, err
	}
	return forums, nil
}

func (api *API) Forum(ctx context.Context, id string) (*model.Forum, error) {
	var forum model.Forum
	err := api.DB.FetchByID(&model.Forum{
		ID: id,
	})
	if err != nil {
		return nil, err
	}
	return &forum, nil
}

func (api *API) ForumPosts(ctx context.Context, courseID *string, tags []string) ([]model.ForumPost, error) {
	var posts []model.ForumPost
	query := &model.ForumPost{
		CourseID: *courseID,
	}
	if len(tags) > 0 {
		query.Tags = tags
	}
	err := api.DB.FetchManyWhere(&posts, query, "tagIds")
	if err != nil {
		return nil, err
	}
	return posts, nil
}

func (api *API) ForumPost(ctx context.Context, id string) (*model.ForumPost, error) {
	var post model.ForumPost
	err := api.DB.FetchByID(&model.ForumPost{
		ID: id,
	})
	if err != nil {
		return nil, err
	}
	return &post, nil
}

func (api *API) ForumComments(ctx context.Context, courseID *string) ([]model.ForumComment, error) {
	var comments []model.ForumComment
	err := api.DB.FetchManyWhere(&comments, &model.ForumComment{
		CourseID: *courseID,
	}, "postId")
	if err != nil {
		return nil, err
	}
	return comments, nil
}

func (api *API) ForumComment(ctx context.Context, id string) (*model.ForumComment, error) {
	var comment model.ForumComment
	err := api.DB.FetchByID(&model.ForumComment{
		ID: id,
	})
	if err != nil {
		return nil, err
	}
	return &comment, nil
}

func (api *API) CreateForum(ctx context.Context, input model.CreateForumInput) (*model.Forum, error) {
	forum := &model.Forum{
		Name:        input.Name,
		Description: input.Description,
	}
	err := api.DB.Create(forum)
	if err != nil {
		return nil, err
	}
	return forum, nil
}

func (api *API) UpdateForum(ctx context.Context, id string, input model.UpdateForumInput) (*model.Forum, error) {
	forum := &model.Forum{
		ID: id,
	}
	err := api.DB.FetchByID(forum)
	if err != nil {
		return nil, err
	}
	if input.Name != nil {
		forum.Name = *input.Name
	}
	if input.Description != nil {
		forum.Description = input.Description
	}
	err = api.DB.UpdateOne(forum)
	if err != nil {
		return nil, err
	}
	return forum, nil
}

func (api *API) DeleteForum(ctx context.Context, id string) (*model.Forum, error) {
	forum := &model.Forum{
		ID: id,
	}
	err := api.DB.Delete(forum)
	if err != nil {
		return nil, err
	}
	return forum, nil
}

func (api *API) CreateForumPost(ctx context.Context, input model.CreateForumPostInput) (*model.ForumPost, error) {
	post := &model.ForumPost{
		Title:   input.Title,
		Content: input.Content,
		ForumID: input.ForumID,
		UserID:  input.UserID,
	}
	err := api.DB.Create(post)
	if err != nil {
		return nil, err
	}
	return post, nil
}

func (api *API) UpdateForumPost(ctx context.Context, id string, input model.UpdateForumPostInput) (*model.ForumPost, error) {
	post := &model.ForumPost{
		ID: id,
	}
	err := api.DB.FetchByID(post)
	if err != nil {
		return nil, err
	}
	if input.Title != nil {
		post.Title = *input.Title
	}
	if input.Content != nil {
		post.Content = *input.Content
	}
	err = api.DB.UpdateOne(post)
	if err != nil {
		return nil, err
	}
	return post, nil
}

func (api *API) DeleteForumPost(ctx context.Context, id string) (*model.ForumPost, error) {
	post := &model.ForumPost{
		ID: id,
	}
	err := api.DB.Delete(post)
	if err != nil {
		return nil, err
	}
	return post, nil
}

func (api *API) CreateForumComment(ctx context.Context, input model.CreateForumCommentInput) (*model.ForumComment, error) {
	comment := &model.ForumComment{
		Content:  input.Content,
		PostID:   input.PostID,
		UserID:   input.UserID,
		ParentID: input.ParentID,
	}
	err := api.DB.Create(comment)
	if err != nil {
		return nil, err
	}
	return comment, nil
}

func (api *API) UpdateForumComment(ctx context.Context, id string, input model.UpdateForumCommentInput) (*model.ForumComment, error) {
	comment := &model.ForumComment{
		ID: id,
	}
	err := api.DB.FetchByID(comment)
	if err != nil {
		return nil, err
	}
	if input.Content != nil {
		comment.Content = *input.Content
	}
	err = api.DB.UpdateOne(comment)
	if err != nil {
		return nil, err
	}
	return comment, nil
}

// DeleteForumComment deletes a forum comment with the specified ID
func (api *API) DeleteForumComment(ctx context.Context, id string) (*model.ForumComment, error) {
	comment := &model.ForumComment{
		ID: id,
	}
	err := api.DB.Delete(comment)
	if err != nil {
		return nil, err
	}
	return comment, nil
}

// CreateTag creates a new tag
func (api *API) CreateTag(ctx context.Context, input model.CreateTagInput)  (*model.Tag, error) {
	tag := &model.Tag{
		ID:   uuid.New().String(),
		Name: input.Name,
	}
	err := api.DB.Create(tag)
	if err != nil {
		return nil, err
	}
	return tag, nil
}

// UpdateTag updates an existing tag with the specified ID
func (api *API) UpdateTag(ctx context.Context, id string, input model.UpdateTagInput) (*model.Tag, error) {
	tag := &model.Tag{
		ID: id,
	}
	err := api.DB.FetchByID(tag)
	if err != nil {
		return nil, err
	}
	if input.Name != nil {
		tag.Name = *input.Name
	}
	err = api.DB.UpdateOne(tag)
	if err != nil {
		return nil, err
	}
	return tag, nil
}

// DeleteTag deletes a tag with the specified ID
func (api *API) DeleteTag(ctx context.Context, id string) (*model.Tag, error) {
	tag := &model.Tag{
		ID: id,
	}
	err := api.DB.Delete(tag)
	if err != nil {
		return nil, err
	}
	return tag, nil
}
