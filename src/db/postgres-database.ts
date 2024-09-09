import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { AddJobRequest } from 'src/dto/add-job/add-job-request.dto';

import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PostgresQLDBService {
  constructor(private prisma: PrismaService) {}

  async getJobsFromDb() {
    try {
      const jobs = await this.prisma.jobs.findMany();
      console.log(jobs);
      return jobs;
    } catch (error) {
      throw new NotFoundException('Failed to find jobs in DB');
    }
  }

  async getJobByIdFromDb(id: string) {
    try {
      const job = await this.prisma.jobs.findUnique({
        where: { id: id },
      });
      return job;
    } catch (error) {
      throw new NotFoundException('Failed to find job in DB');
    }
  }

  async addJobToDb(addJobRequest: AddJobRequest) {
    const { name, description, status, interval, creationDate, nextRun } =
      addJobRequest;
    try {
      const addJob = await this.prisma.jobs.create({
        data: {
          name: name,
          description: description,
          status: status,
          creationDate: creationDate,
          updateDate: creationDate,
          runtime: '0:00:00',
          nextRun: nextRun,
          interval: interval,
        },
      });
      return addJob;
    } catch (error) {
      throw new InternalServerErrorException('Failed to add job to DB');
    }
  }
}
