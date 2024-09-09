## Exercise description

- Utilized Nest.JS to build a Job Scheduler application, that can return all or specific jobs from the PostgresQL database, and can add a Job given the request requirement.
- Utilized Amazon Web Services RDS to host a cloud PostgresQL database, with simple credentials for exercise purposes.
- Used Nest.JS Cron Job scheduling to demo how to schedule a job dynamically.
- Insured proper utilization of best software design practices, by following clean code & SOLID design principles, separating files into helpers, utils, db, etc..
- Extra: Provided a small .rest file from the extension Rest Client as an extra, to test the endpoints from within the repository.
- Extra: Provided a simple dockerfile to build an image of the API.

## Libraries/technologies used

1. Node.JS/Nest.JS
2. PostgresQL
3. Prisma ORM
4. AWS RDS
5. AWS ECR
6. AWS EC2
7. Docker

## Installation

```bash
$ npm install
```

## Running the app

```bash

#Build the project
$ npm run build

#Start the project & enter file name
$ npm run start:dev
