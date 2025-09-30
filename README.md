# myblog-symfony

A blog using Symfony framework

## Run project locally

Run docker containers:

    docker-compose up --build -d

Run frontend:

    yarn && yarn watch

Go to http://localhost:8080

## Debug with vscode

Create the file:
    
    .vscode/launch.json

And add there the content:

    {
        "version": "0.2.0",
        "configurations": [
            {
                "name": "Listen for Xdebug",
                "type": "php",
                "request": "launch",
                "port": 9003,
                "pathMappings": {
                    "/var/www/myblog": "${workspaceFolder}"
                }
            },
        ]
    }