# Sidekicker Coding Challenge

# Instruction
* Build: `docker-compose build`
* Run: `docker-compose up`
* Setup .env file (e.g. Rename ./backend/.env.example file to .env)
* run `docker-compose exec coding-challenge-backend php artisan migrate`
* Go to http://localhost and start to use App

## Setup
* Install [Docker](https://docs.docker.com/get-started/)
* Build: `docker-compose build`
* Run: `docker-compose up`
* Execute tasks: `docker-compose exec <container_name> <cmd>`. 
  * e.g. `docker-compose exec coding-challenge-backend php artisan migrate`

## Development
* React frontend: http://localhost
* Lumen backend: http://localhost:8000
