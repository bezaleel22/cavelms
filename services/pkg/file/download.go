package file

// import (
// 	"bytes"
// 	"io"
// 	"net/http"
// 	"os"
// 	"strconv"

// 	"github.com/cavelms/internal/model"
// 	"github.com/gin-gonic/gin"
// )

// func (f *API) DownloadFile(c *gin.Context) error {
// 	// c := ctx.Value(apiCtx("apiCtx")).(*gin.Context)
// 	media := model.Media{ID: c.Query("id")}
// 	err := f.DB.FetchByID(&media)
// 	if err != nil {
// 		return err
// 	}

// 	user := model.User{ID: media.UserID}
// 	err = f.DB.FetchByID(&user)
// 	if err != nil {
// 		return err
// 	}

// 	buffer, err := os.ReadFile(media.Path)
// 	if err != nil {
// 		return err
// 	}

// 	// set the default MIME type to send
// 	mime := http.DetectContentType(buffer)
// 	fileSize := len(string(buffer))

// 	reader := bytes.NewReader(buffer)

// 	// Generate the server headers
// 	c.Request.Header.Set("Content-Type", mime)
// 	c.Request.Header.Set("Content-Disposition", "attachment; filename="+user.FullName+media.Category+"")
// 	c.Request.Header.Set("Expires", "0")
// 	c.Request.Header.Set("Content-Transfer-Encoding", "binary")
// 	c.Request.Header.Set("Content-Length", strconv.Itoa(fileSize))
// 	c.Request.Header.Set("Content-Control", "private, no-transform, no-store, must-revalidate")

// 	_, err = io.Copy(c.Writer, reader)
// 	if err != nil {
// 		return err
// 	}

// 	return nil
// }
