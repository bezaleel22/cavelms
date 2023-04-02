package api

import (
	"context"
	"encoding/json"

	"github.com/cavelms/internal/model"
	"github.com/cavelms/pkg/utils"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

// CreateUser is the resolver for the createUser field.
func (api *API) CreateUser(ctx context.Context, input model.NewUser) (*model.User, error) {
	hash, err := utils.EncryptPassword(input.Password)
	if err != nil {
		return nil, err
	}

	user := model.User{
		FirstName:    input.FirstName,
		LastName:     input.LastName,
		Email:        input.Email,
		PasswordHash: hash,
	}
	err = api.DB.Create(&user)
	if err != nil {
		return nil, err
	}

	return &user, nil
}

// UpdateUser is the resolver for the updateUser field.
func (api *API) UpdateUser(ctx context.Context, data interface{}) (*model.User, error) {
	user := model.User{}

	ub, err := json.Marshal(data)
	if err != nil {
		return nil, err
	}

	err = json.Unmarshal(ub, &user)
	if err != nil {
		return nil, err
	}

	err = api.DB.UpdateOne(user)
	if err != nil {
		return nil, err
	}

	err = api.DB.FetchByID(&user)
	if err != nil {
		return nil, err
	}

	return &user, nil
}

func (api *API) DeleteUser(ctx context.Context, id string) (*model.User, error) {
	user := &model.User{}
	user.ID = id
	err := api.DB.Delete(user)
	if err != nil {
		return nil, err
	}

	return user, nil
}

// DeleteManyUsers is the resolver for the deleteManyUsers field.
func (api *API) DeleteManyUsers(ctx context.Context, ids []string) (*model.User, error) {
	user := &model.User{}
	err := api.DB.DeleteMany(user, ids)
	if err != nil {
		return nil, err
	}

	return user, nil
}

// GetUsers is the resolver for the getUsers field.
func (api *API) GetUsers(ctx context.Context) ([]*model.User, error) {
	user := new(model.User)
	users := []model.User{}
	err := api.DB.FetchAll(&users, user)
	if err != nil {
		return nil, err
	}

	userList := []*model.User{}
	for i := 0; i < len(users); i++ {
		userList = append(userList, &users[i])
	}

	return userList, nil
}

// GetUserByID is the resolver for the getUserById field.
func (api *API) GetUserByID(ctx context.Context, id string) (*model.User, error) {
	user := new(model.User)
	user.ID = id
	err := api.DB.FetchByID(user)
	if err != nil {
		return nil, err
	}

	return user, nil
}

// GetUserByEmail is the resolver for the getUserByEmail field.
func (api *API) GetUserByEmail(ctx context.Context, email string) (*model.User, error) {
	user := new(model.User)
	user.Email = email
	err := api.DB.FetchByID(user)
	if err != nil {
		return nil, err
	}

	return user, nil
}

func (api *API) CreateRefree(ctx context.Context, userID string, input model.NewReferee) (*model.Referee, error) {

	referee := model.Referee{
		ID:       primitive.NewObjectID().Hex(),
		FullName: input.FullName,
		Email:    input.Email,
		Phone:    input.Phone,
	}

	user := new(model.User)
	user.ID = userID
	err := api.DB.FetchByID(user)
	if err != nil {
		return nil, err
	}

	user.Referees = append(user.Referees, referee)
	err = api.DB.Create(user)
	if err != nil {
		return nil, err
	}

	return &referee, nil
}

func (api *API) CreateQualification(ctx context.Context, userID string, input model.NewQualification) (*model.Qualification, error) {

	qualification := model.Qualification{
		ID:             primitive.NewObjectID().Hex(),
		Degree:         input.Degree,
		Institution:    input.Institution,
		GraduationYear: input.GraduationYear,
	}

	user := new(model.User)
	user.ID = userID
	err := api.DB.FetchByID(user)
	if err != nil {
		return nil, err
	}

	user.Qualifications = append(user.Qualifications, qualification)
	err = api.DB.Create(&user)
	if err != nil {
		return nil, err
	}

	return &qualification, nil
}
