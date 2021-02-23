package user

import (
	"bili/app/models"
	"bili/pkg/password"
)

type User struct {
	models.BaseModel
	Name     string `gorm:"type:varchar(255);not null;unique" valid:"name"`
	Email    string `gorm:"type:varchar(255);unique;" valid:"email"`
	Phone	 string `gorm:"type:varchar(11);unique;" valid:"phone"`
	Password string `gorm:"type:varchar(255)" valid:"password"`
}

func (u User) ComparePassword(_password string) bool  {
	return password.CheckHash(_password, u.Password)
}
