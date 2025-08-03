import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDailyActiveLog } from './entities/user-daily-active-log.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserDailyActiveLog])],
  controllers: [],
  providers: [],
  exports: [TypeOrmModule],
})
export class UserDailyActiveLogsModule {}