package repository

import (
	"context"
	"errors"
	"time"

	"github.com/cavelms/config"
)

type redisDB struct {
	context.Context
}

type Redis interface {
	Set(key, val string, exp int) error
	Get(key string) (*string, error)
	Del(key string) (int64, error)
}

func newRedisRepository() Redis {
	return &redisDB{
		context.Background(),
	}
}

func (ctx *redisDB) Set(key, val string, exp int) error {
	rdb, err := config.RedisClient(0)
	if err != nil {
		return err
	}
	defer rdb.Close()

	expireTime := time.Duration(exp) * time.Second
	err = rdb.Set(ctx, key, val, expireTime).Err()
	if err != nil {
		return errors.New("RequestTokens(): rdb.Set: accessToken: " + err.Error())
	}

	return nil
}

func (ctx *redisDB) Get(key string) (*string, error) {
	rdb, err := config.RedisClient(0)
	if err != nil {
		return nil, err
	}
	defer rdb.Close()

	val, err := rdb.Get(ctx, key).Result()
	if err != nil {
		return nil, err
	}

	return &val, nil
}

func (ctx *redisDB) Del(key string) (int64, error) {
	rdb, err := config.RedisClient(0)
	if err != nil {
		return 0, err
	}
	defer rdb.Close()

	val, err := rdb.Del(ctx, key).Result()
	if err != nil {
		return 0, err
	}

	return val, nil
}
