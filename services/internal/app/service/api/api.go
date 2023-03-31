package api

import (
	"context"

	"github.com/cavelms/internal/app/repository"
	"github.com/cavelms/internal/model"
)

type API struct {
	*repository.Repository
}

type APIService interface {

	// courseService interface
	CreateCourse(ctx context.Context, input *model.CreateCourseInput) (*model.Course, error)
	UpdateCourse(ctx context.Context, data interface{}) (*model.Course, error)
	GetCourseByID(ctx context.Context, id string) (*model.Course, error)
	GetCourses(ctx context.Context, userId *string) ([]model.Course, error)
	DeleteCourse(ctx context.Context, id string) (*model.Course, error)

	// fileService interface
	CreateMedia(ctx context.Context, input model.CreatMediaInput) (*model.Media, error)
	UpdateMedia(ctx context.Context, input model.UpdateMediaInput) (*model.Media, error)
	DeleteMedia(ctx context.Context, id string) (*model.Media, error)
	GetMediaById(ctx context.Context, id string) (*model.Media, error)
	GetMediaByType(ctx context.Context, typeArg model.MediaType) ([]model.Media, error)
	GetAllMedias(ctx context.Context) ([]model.Media, error)

	// Permission Interface
	UpdatePermission(ctx context.Context, input model.PermissionInput) (*model.Permission, error)
	GrantPermission(ctx context.Context, input model.PermissionInput) (*model.Permission, error)
	RevokePermission(ctx context.Context, input model.PermissionInput) (*model.Permission, error)
	GetPermissionsForUser(ctx context.Context, userID string) ([]model.Permission, error)
	GetPermissionsForModel(ctx context.Context, model model.AllowedModel) ([]model.Permission, error)

	// userService interface
	CreateUser(ctx context.Context, input model.NewUser) (*model.User, error)
	UpdateUser(ctx context.Context, data interface{}) (*model.User, error)
	DeleteUser(ctx context.Context, ids string) (*model.User, error)
	DeleteManyUsers(ctx context.Context, id []string) (*model.User, error)
	GetUsers(ctx context.Context) ([]*model.User, error)
	GetUserByID(ctx context.Context, id string) (*model.User, error)
	GetUserByEmail(ctx context.Context, email string) (*model.User, error)

	// Activity Interface
	CreateActivity(ctx context.Context, input model.CreateActivityInput) (*model.Activity, error)
	UpdateActivity(ctx context.Context, input model.UpdateActivityInput) (*model.Activity, error)
	DeleteActivity(ctx context.Context, id string) (bool, error)
	Activities(ctx context.Context, courseID *string) ([]model.Activity, error)
	Activity(ctx context.Context, id string) (*model.Activity, error)
	ActivityAdded(ctx context.Context) (<-chan *model.Activity, error)
	ActivityUpdated(ctx context.Context) (<-chan *model.Activity, error)
	ActivityDeleted(ctx context.Context) (<-chan *string, error)

	// Forum Interface
	Forums(ctx context.Context, courseID *string) ([]model.Forum, error)
	Forum(ctx context.Context, id string) (*model.Forum, error)
	ForumPosts(ctx context.Context, courseID *string, tags []string) ([]model.ForumPost, error)
	ForumPost(ctx context.Context, id string) (*model.ForumPost, error)
	ForumComments(ctx context.Context, courseID *string) ([]model.ForumComment, error)
	ForumComment(ctx context.Context, id string) (*model.ForumComment, error)
}

func NewService(repo *repository.Repository) APIService {
	return &API{repo}
}
