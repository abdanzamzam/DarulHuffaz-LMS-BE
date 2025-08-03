import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module as ModuleEntity } from './entities/module.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ModuleEntity])],
  controllers: [],
  providers: [],
  exports: [TypeOrmModule],
})
export class ModulesModule {}