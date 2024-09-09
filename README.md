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

## Scaling

When it comes to following the microservices approach during the deployment process, one of the best ways to optimize scaling & communication between APIs is deployment using AWS's Elastic Container Services, or Elastic Kubernetes Services. We can essentially build an efficient CI/CD that gives the APIs the ability to communicate with each other, we can create an AWS Elastic Kubernetes Service cluster, and connect it with Bitbucket Pipeliens by following their official documentation:

https://support.atlassian.com/bitbucket-cloud/docs/deploy-to-aws-eks-kubernetes/

AWS also provides us with AWS Auto Scaling, for automatic adjustment of the traffic load on our instances that are running on the EKS cluster.

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

