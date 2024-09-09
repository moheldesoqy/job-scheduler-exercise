import { Module } from '@nestjs/common';
import { JobsController } from './jobs.controller';
import { JobsService } from './jobs.service';
import { PostgresQLDBService } from './db/postgres-database';
import { PrismaService } from './prisma.service';
import { JobsSchedulerHelper } from './helper/jobs.schedulers';

@Module({
  imports: [],
  controllers: [JobsController],
  providers: [JobsService, PostgresQLDBService, PrismaService, JobsSchedulerHelper],
})
export class AppModule {
  // constructor(private readonly jobsSchedulerHelper: JobsSchedulerHelper) {}

  // async onModuleInit() {
  //   await this.jobsSchedulerHelper.scheduleJobs();
  // }
}
