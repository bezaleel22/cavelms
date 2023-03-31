package api

import (
	"context"

	"github.com/cavelms/internal/model"
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
