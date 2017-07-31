# Hello Redis

A playground project to get to explore redis and to see what we can build with it.

## Install it using docker

    # start the redis container with the name of bitstack-redis
    docker run -d --name bitstack-redis -p 6379:6379 redis:4-alpine
    
    # tail the logs
    docker logs -f bitstack-redis
    
    # connect to the container and run the redis-cli command
    docker exec -it bitstack-redis redis-cli

## Step 1

Confirm that we can connect to it and set a test value.

    yarn step1