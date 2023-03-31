package file

// import (
// 	"bytes"
// 	"fmt"
// 	"io"
// 	"net/http"
// 	"os"
// 	"strconv"

// 	"github.com/cavelms/internal/model"
// 	"github.com/gin-gonic/gin"
// )

// const MAX_UPLOAD_SIZE = 1000 * 1024 * 1024 // 1GB

// func UploadFile() error {
// 	media := model.Media{
// 	}

// 	err := os.MkdirAll("./uploads/"+media.UserID, os.ModePerm)
// 	if err != nil {
// 		return nil, err
// 	}

// 	err = api.DB.Create(&media)
// 	if err != nil {
// 		return nil, err
// 	}

// 	url := fmt.Sprintf("%s_%s", media.ID, media.Filename)
// 	path := fmt.Sprintf("./uploads/%s/%s", media.UserID, url)
// 	f, err := os.Create(path)
// 	if err != nil {
// 		return nil, err
// 	}
// 	defer f.Close()

// 	_, err = io.Copy(f, input.Media.Media)
// 	if err != nil {
// 		return nil, err
// 	}

// 	user := model.User{ID: input.UserID}
// 	user.Files = append(user.Files, media.ID)

// 	err = api.DB.UpdateOne(user)
// 	if err != nil {
// 		return nil, err
// 	}

// 	media.Path = path
// 	media.URL = url
// 	err = api.DB.UpdateOne(&media)
// 	if err != nil {
// 		return nil, err
// 	}

// 	return &media, nil
// }
