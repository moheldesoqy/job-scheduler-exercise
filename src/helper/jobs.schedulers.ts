import { Injectable, Logger } from '@nestjs/common';
import { CronJob } from 'cron';
import { Interval } from 'src/data/enum/interval.enum';
import { PostgresQLDBService } from 'src/db/postgres-database';
import { AddJobRequest } from 'src/dto/add-job/add-job-request.dto';
import { GetExpression } from 'src/util/cron-expression.util';

@Injectable()
export class JobsSchedulerHelper {
  private readonly logger = new Logger(JobsSchedulerHelper.name);
  private jobs: CronJob[] = [];

  constructor(private readonly postresqlDbService: PostgresQLDBService) {}

  async scheduleJobs() {
    try {
      const jobs = await this.postresqlDbService.getJobsFromDb();
      jobs.forEach((job) => {
        const cronExpression = Interval[job.interval];
        if (cronExpression) {
          const cronJob = new CronJob(cronExpression, async () => {
            await this.executeJob(job);
          });
          this.jobs.push(cronJob);
          cronJob.start();
          this.logger.log(
            `Scheduled job "${job.name}" with cron expression: ${cronExpression}`,
          );
        } else {
          this.logger.warn(`Invalid interval for job "${job.name}"`);
        }
      });
    } catch (error) {
      this.logger.error('Failed to schedule jobs', error.stack);
    }
  }

  async scheduleSingularJob(job: AddJobRequest) {
    const { name, interval } = job;
    try {
      if (interval) {
        const cronExpression = GetExpression(interval);
        if (cronExpression) {
          const cronJob = new CronJob(cronExpression, async () => {
            await this.executeJob(job);
          });
          this.jobs.push(cronJob);
          cronJob.start();
          this.logger.log(
            `Scheduled job "${name}" with cron expression: ${cronExpression}`,
          );
        } else {
          this.logger.warn(
            `Invalid cron expression for interval "${interval}"`,
          );
        }
      }
    } catch (error) {
      this.logger.error('Failed to schedule job', error.stack);
    }
  }

  async executeJob(job: AddJobRequest) {
    try {
      this.logger.log(`Executing job "${job.name}"`);
      // we can implement dummy job service here, be it email notifications etc.. as mentioned in the assessment doc
    } catch (error) {
      this.logger.error(`Failed to execute job "${job.name}"`, error.stack);
    }
  }
}
