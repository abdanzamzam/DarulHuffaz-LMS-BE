import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonMater } from './entities/lesson-mater.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LessonMater])],
  controllers: [],
  providers: [],
  exports: [TypeOrmModule],
})
export class LessonMatersModule {}
