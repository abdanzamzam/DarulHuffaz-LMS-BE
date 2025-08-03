import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonAccessRole } from './entities/lesson-access-role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LessonAccessRole])],
  controllers: [],
  providers: [],
  exports: [TypeOrmModule],
})
export class LessonAccessRolesModule {}
