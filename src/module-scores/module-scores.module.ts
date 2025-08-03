import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModuleScore } from './entities/module-score.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ModuleScore])],
  controllers: [],
  providers: [],
  exports: [TypeOrmModule],
})
export class ModuleScoresModule {}
