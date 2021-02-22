package database

import (
	"bili/pkg/logger"
	"database/sql"
	"time"

	"github.com/go-sql-driver/mysql"
)

var DB *sql.DB

func Initialize() {
	initDB()
}

func initDB(){
	var err error

	config := mysql.Config{
		User:                 "root",
		Passwd:               "1807102",
		Addr:                 "localhost:3306",
		Net:                  "tcp",
		DBName:               "bili",
		AllowNativePasswords: true,
	}//按实际情况修改

	// 准备数据库连接池
	DB, err = sql.Open("mysql", config.FormatDSN())
	logger.LogError(err)

	// 设置最大连接数
	DB.SetMaxOpenConns(100)
	// 设置最大空闲连接数
	DB.SetMaxIdleConns(25)
	// 设置每个链接的过期时间
	DB.SetConnMaxLifetime(5 * time.Minute)

	// 尝试连接，失败会报错
	err = DB.Ping()
	logger.LogError(err)
}
