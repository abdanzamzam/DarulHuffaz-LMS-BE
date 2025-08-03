import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeacherDetail } from './entities/teacher-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TeacherDetail])],
  controllers: [],
  providers: [],
  exports: [TypeOrmModule],
})
export class TeacherDetailsModule {}