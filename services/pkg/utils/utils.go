package utils

import (
	"os"
	"reflect"
)

func Contains(slice interface{}, item interface{}) bool {
	sliceValue := reflect.ValueOf(slice)

	if sliceValue.Kind() != reflect.Slice {
		panic("contains() called with a non-slice type")
	}

	for i := 0; i < sliceValue.Len(); i++ {
		if sliceValue.Index(i).Interface() == item {
			return true
		}
	}

	return false
}

func ParseHtml(f string) (string, error) {
	bs, err := os.ReadFile(f)
	if err != nil {
		return "", err
	}

	return string(bs), nil
}

// func init() {
// 	data := map[string]interface{}{
// 		"code":     12345,
// 		"fullname": "fullName",
// 	}

// 	body, err := ParseTemplate("signup", data)
// 	if err != nil {
// 		log.Fatal(err)
// 	}
// 	log.Println(body)
// }

// func ParseTemplate(tpl string, m interface{}) (string, error) {

// 	fs := mail.Template
// 	t, err := template.ParseFS(fs, "template/"+tpl+".html")
// 	if err != nil {
// 		return "", err
// 	}

// 	buf := new(bytes.Buffer)
// 	if err = t.Execute(buf, m); err != nil {
// 		return "", err
// 	}

// 	return buf.String(), nil
// }
