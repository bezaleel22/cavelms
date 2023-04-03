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
	DeleteManyUsers(ctx context.Context, ids []string) (*model.User, error)
	GetUsers(ctx context.Context) ([]*model.User, error)
	GetUserByID(ctx context.Context, id string) (*model.User, error)
	GetUserByEmail(ctx context.Context, email string) (*model.User, error)
	CreateQualification(ctx context.Context, userID string, input model.NewQualification) (*model.Qualification, error)
	CreateRefree(ctx context.Context, userID string, input model.NewReferee) (*model.Referee, error)

	// Activity Interface
	CreateActivity(ctx context.Context, input model.CreateActivityInput) (*model.Activity, error)
	UpdateActivity(ctx context.Context, input model.UpdateActivityInput) (*model.Activity, error)
	DeleteActivity(ctx context.Context, id string) (bool, error)
	GetActivities(ctx context.Context, courseID *string) ([]model.Activity, error)
	GetActivity(ctx context.Context, id string) (*model.Activity, error)
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
	CreateForum(ctx context.Context, input model.CreateForumInput) (*model.Forum, error)
	UpdateForum(ctx context.Context, id string, input model.UpdateForumInput) (*model.Forum, error)
	DeleteForum(ctx context.Context, id string) (*model.Forum, error)
	CreateForumPost(ctx context.Context, input model.CreateForumPostInput) (*model.ForumPost, error)
	UpdateForumPost(ctx context.Context, id string, input model.UpdateForumPostInput) (*model.ForumPost, error)
	DeleteForumPost(ctx context.Context, id string) (*model.ForumPost, error)
	CreateForumComment(ctx context.Context, input model.CreateForumCommentInput) (*model.ForumComment, error)
	UpdateForumComment(ctx context.Context, id string, input model.UpdateForumCommentInput) (*model.ForumComment, error)
	DeleteForumComment(ctx context.Context, id string) (*model.ForumComment, error)
	CreateTag(ctx context.Context, input model.CreateTagInput) (*model.Tag, error)
	UpdateTag(ctx context.Context, id string, input model.UpdateTagInput) (*model.Tag, error)
	DeleteTag(ctx context.Context, id string) (*model.Tag, error)

	// EvaluationCriteria Interface
	CreateEvaluationCriteria(ctx context.Context, input model.CreateEvaluationCriteriaInput) (*model.EvaluationCriteria, error)
	UpdateEvaluationCriteria(ctx context.Context, id string, input model.UpdateEvaluationCriteriaInput) (*model.EvaluationCriteria, error)
	DeleteEvaluationCriteria(ctx context.Context, id string) (*model.EvaluationCriteria, error)
	EvaluationCriterias(ctx context.Context) ([]model.EvaluationCriteria, error)
	EvaluationCriteria(ctx context.Context, id string) (*model.EvaluationCriteria, error)

	// Grade Interface
	GetGrades(ctx context.Context) ([]model.Grade, error)
	GetGradeById(ctx context.Context, id string) (*model.Grade, error)
	CreateGrade(ctx context.Context, input model.CreateGradeInput) (*model.Grade, error)
	UpdateGrade(ctx context.Context, id string, input model.UpdateGradeInput) (*model.Grade, error)
	DeleteGrade(ctx context.Context, id string) (bool, error)

	// Notification interface
	Notifications(ctx context.Context, CourseID string, RecipientID string, Read bool) ([]model.Notification, error)
	CreateNotification(ctx context.Context, Input *model.CreateNotificationInput) (*model.Notification, error)
	UpdateNotification(ctx context.Context, id string, Input *model.UpdateNotificationInput) (*model.Notification, error)
	DeleteNotification(ctx context.Context, id string) (*model.Notification, error)
	NotificationAdded(ctx context.Context) (<-chan *model.Notification, error)

	// SettingService interface
	CreateUserSetting(ctx context.Context, UserID string, Input model.NewSetting) (*model.UserSetting, error)
	UpdateUserSetting(ctx context.Context, ID string, Input model.UpdateSetting) (*model.UserSetting, error)
	DeleteUserSetting(ctx context.Context, ID string) (bool, error)
	UserSetting(ctx context.Context, id string) (*model.UserSetting, error)
	UserSettings(ctx context.Context, UserID string, Limit int, Offset int) ([]model.UserSetting, error)
	GlobalSetting(ctx context.Context, id string) (*model.GlobalSetting, error)
	GlobalSettings(ctx context.Context, Limit int, Offset int) ([]model.GlobalSetting, error)
	CreateGlobalSetting(ctx context.Context, Input model.NewSetting) (*model.GlobalSetting, error)
	UpdateGlobalSetting(ctx context.Context, id string, Input *model.UpdateSetting) (*model.GlobalSetting, error)
	DeleteGlobalSetting(ctx context.Context, id string) (bool, error)

	// TargetService interface
	CreateTarget(ctx context.Context, input model.CreateTargetInput) (*model.Target, error)
	UpdateTarget(ctx context.Context, id string, input *model.UpdateTargetInput) (*model.Target, error)
	DeleteTarget(ctx context.Context, id string) (*model.Target, error)
	GetTargets(ctx context.Context, courseID string) ([]model.Target, error)
	GetTarget(ctx context.Context, id string) (*model.Target, error)

	// QuizService interface
	CreateQuiz(ctx context.Context, input model.CreateQuizInput) (*model.Quiz, error)
	UpdateQuiz(ctx context.Context, id string, input model.UpdateQuizInput) (*model.Quiz, error)
	DeleteQuiz(ctx context.Context, id string) (bool, error)
	SubmitQuiz(ctx context.Context, quizID string, input model.SubmissionInput) (*model.Submission, error)
	GetQuizes(ctx context.Context, courseId *string) ([]model.Quiz, error)
	GetQuize(ctx context.Context, id string) (*model.Quiz, error)
	GetSubmissions(ctx context.Context, quizID *string) ([]model.Submission, error)
	GetSubmission(ctx context.Context, id string) (*model.Submission, error)
}

func NewService(repo *repository.Repository) APIService {
	return &API{repo}
}
