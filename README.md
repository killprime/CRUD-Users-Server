# CRUD Users server

## Setup

`$ npm install`

## Postgres

Connection settings in the file - .env


	DATABASE_URL = postgres://login:password@localhost/database_name
	DATABASE_TEST_URL = postgres://login:password@localhost/database_name_test


## Run migrations

`$ knex migrate:latest`


## Run seeds

`$ knex seed:run`

## Run app

`$ npm run dev`

## Test

`$ npm test`

## ERD

![](https://app.lucidchart.com/publicSegments/view/e59d6311-9540-4458-8f0e-030fbc6af25e/image.png)
