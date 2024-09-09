import { Transform } from 'class-transformer';
import { IsString, IsDate } from 'class-validator';

export class AddJobRequest {
    @IsString()
    name: string;

    @IsString()
    description: string;

    @IsString()
    status: string;
    
    nextRun: Date;

    @IsString()
    interval: string;

    creationDate?: Date;

    updateDate?: Date;

    runtime?: string;
}
