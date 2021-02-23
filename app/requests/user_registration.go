package requests

import (
	"bili/app/models/user"
	"github.com/thedevsaddam/govalidator"
)

// ValidateRegistrationForm 验证表单，返回 errs 长度等于零即通过
func ValidateRegistrationForm(data user.User) map[string][]string {

	// 1. 定制认证规则
	rules := govalidator.MapData{
		"name":             []string{"not_exists:users,name"},
		"phone":            []string{"not_exists:users,phone"},
	}


	// 3. 配置初始化
	opts := govalidator.Options{
		Data:          &data,
		Rules:         rules,
		TagIdentifier: "valid", // 模型中的 Struct 标签标识符
	}

	// 4. 开始验证
	errs := govalidator.New(opts).ValidateStruct()

	return errs
}
