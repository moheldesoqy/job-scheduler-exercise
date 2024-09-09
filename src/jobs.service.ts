import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AddJobRequest } from './dto/add-job/add-job-request.dto';
import { PostgresQLDBService } from './db/postgres-database';
import { JobsSchedulerHelper } from './helper/jobs.schedulers';
import { NextDate } from './util/next-date-calculation.util';

@Injectable()
export class JobsService {
  constructor(
    private readonly postresqlDbService: PostgresQLDBService,
    private readonly jobSchedulerHelper: JobsSchedulerHelper,
  ) {}
  async getJobs() {
    try {
      const jobs = await this.postresqlDbService.getJobsFromDb();
      return {
        jobs: jobs,
      };
    } catch (error) {
      throw new HttpException(
        'Failed to get jobs',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getJobById(id: string) {
    try {
      const job = await this.postresqlDbService.getJobByIdFromDb(id);
      return job;
    } catch (error) {
      throw new HttpException(
        'Failed to get job',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async addJob(addJobRequest: AddJobRequest) {
    const { interval } = addJobRequest;
    try {
      addJobRequest.creationDate = new Date();
      addJobRequest.nextRun = NextDate(interval);

      const addJob = await this.postresqlDbService.addJobToDb(addJobRequest);

      console.log(`Job executed - Created job: ${addJobRequest.name}`);
      await this.jobSchedulerHelper.scheduleSingularJob(addJob);
      return addJob;
    } catch (error) {
      throw new HttpException(
        'Failed to add job',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
