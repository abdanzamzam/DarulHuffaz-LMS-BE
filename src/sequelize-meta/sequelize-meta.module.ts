import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SequelizeMeta } from './entities/sequelize-meta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SequelizeMeta])],
  controllers: [],
  providers: [],
  exports: [TypeOrmModule],
})
export class SequelizeMetaModule {}