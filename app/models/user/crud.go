package user

import (
	"bili/pkg/logger"
	"bili/pkg/model"
	"bili/pkg/types"
)

func (user *User) Create() (err error) {
	if err = model.DB.Create(&user).Error; err != nil {
		logger.LogError(err)
		return err
	}

	return nil
}

func GetByEmail(email string) (User,error) {
	var user User
	if err:=model.DB.First(&user,"email",email).Error;err!=nil{
		return user,err
	}
	return user,nil
}

func GetByPhone(phone string) (User,error) {
	var user User
	if err:=model.DB.First(&user,"phone",phone).Error;err!=nil{
		return user,err
	}
	return user,nil
}

func Get(idstr string) (User, error) {
	var user User
	id := types.StringToInt(idstr)
	if err := model.DB.First(&user, id).Error; err != nil {
		return user, err
	}

	return user, nil
}
