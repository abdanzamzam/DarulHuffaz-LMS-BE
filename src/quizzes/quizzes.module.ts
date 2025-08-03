import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Quiz])],
  controllers: [],
  providers: [],
  exports: [TypeOrmModule],
})
export class QuizzesModule {}