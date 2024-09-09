import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { JobsService } from './jobs.service';
import { AddJobRequest } from './dto/add-job/add-job-request.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @ApiOperation({
    summary: 'Get all jobs',
    description: 'Endpoint to retrieve all jobs from the database',
  })
  @HttpCode(HttpStatus.OK)
  @Get() // to retrieve a list of jobs from the DB
  async getJobs() {
    console.log('getJobs');
    return this.jobsService.getJobs();
  }

  @ApiOperation({
    summary: 'Get job',
    description:
      "Endpoint to retrieve a job from the database using the job's ID",
  })
  @HttpCode(HttpStatus.OK)
  @Get(':id') // to query & retrieve a specific job from the DB
  async getJobById(@Param('id') id: string) {
    return this.jobsService.getJobById(id);
  }

  @ApiOperation({
    summary: 'Add job',
    description: 'Endpoint to add a job to the database',
  })
  @HttpCode(HttpStatus.OK)
  @Post() //to add a new job to the DB
  /*
  accepts: 
  - name
  - description
  - status
  - interval
  creation date, update date & any other attribute will be dynamically handled
  */
  async addJob(@Body() addJobRequest: AddJobRequest) {
    return this.jobsService.addJob(addJobRequest);
  }
}
