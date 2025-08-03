import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('sequelize_meta')
export class SequelizeMeta {
  @PrimaryColumn()
  name: string;
}