import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Class } from './entities/class.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Class])],
  controllers: [],
  providers: [],
  exports: [TypeOrmModule],
})
export class ClassesModule {}