import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentDetail } from './entities/student-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StudentDetail])],
  controllers: [],
  providers: [],
  exports: [TypeOrmModule],
})
export class StudentDetailsModule {}
