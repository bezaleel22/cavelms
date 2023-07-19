package config

import (
	"context"
	"fmt"
	"log"
	"strings"
	"time"

	"github.com/go-redis/redis/v8"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// MongoInstance contains the Mongo client and database objects
type DB struct {
	MongoClient *mongo.Client
	MongoDB     *mongo.Database
	RDB         *redis.Client
}

func NewDBConnection() *DB {
	mongo, mongoClient, err := connectMongo()
	if err != nil {
		fmt.Println(strings.Repeat("!", 40))
		fmt.Println("☹️  Could Not Create Mongo DB Client")
		fmt.Println(strings.Repeat("!", 40))
		log.Fatal(err)
	}

	fmt.Println(strings.Repeat("-", 40))
	fmt.Println("😀 Connected To Mongo DB")
	fmt.Println(strings.Repeat("-", 40))

	// rdb, err := RedisClient(1)
	// if err != nil {
	// 	fmt.Println(strings.Repeat("!", 40))
	// 	fmt.Println("☹️  Could Not Establish Redis Connection")
	// 	fmt.Println(strings.Repeat("!", 40))
	// 	log.Fatal(err)
	// }

	// fmt.Println(strings.Repeat("-", 40))
	// fmt.Println("😀 Connected To Redis Server")
	// fmt.Println(strings.Repeat("-", 40))

	return &DB{
		MongoClient: mongoClient,
		MongoDB:     mongo,
	}
}

// ConnectMongo Returns the Mongo DB Instance
func connectMongo() (*mongo.Database, *mongo.Client, error) {
	uri := GetConfig().Mongo.URI
	opts := options.Client().ApplyURI(uri)
	client, err := mongo.NewClient(opts)
	if err != nil {
		return nil, nil, err
	}

	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()

	name := GetConfig().Mongo.MongoDBName
	err = client.Connect(ctx)
	mongo := client.Database(name)
	if err != nil {
		return nil, nil, err
	}

	return mongo, client, nil
}

// ConnectRedis returns the Redis Instance
func RedisClient(dbn int) (*redis.Client, error) {
	client := redis.NewClient(&redis.Options{
		Addr:     fmt.Sprintf("%s:%s", GetConfig().Redis.HOST, GetConfig().Redis.PORT),
		Password: "my-redis", // no password set
		DB: dbn, // database number
	})

	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()

	err := client.Ping(ctx).Err()
	if err != nil {
		return nil, err
	}

	return client, nil
}
