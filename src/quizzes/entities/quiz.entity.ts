import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Module } from '../../modules/entities/module.entity';

@Entity('quizzes')
export class Quiz {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  moduleId: string;

  @Column({ nullable: true })
  question: string;

  @Column({ nullable: true })
  questionType: string;

  @Column({ nullable: true })
  answer1: string;

  @Column({ nullable: true })
  answer2: string;

  @Column({ nullable: true })
  answer3: string;

  @Column({ nullable: true })
  answer4: string;

  @Column({ nullable: true })
  answer5: string;

  @Column({ nullable: true })
  correctAnswer: string;

  @Column({ default: true })
  isPublished: boolean;

  @Column()
  createdBy: string;

  @Column()
  updatedBy: string;

  @Column({ nullable: true })
  deletedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // Relations
  @ManyToOne(() => Module, (module) => module.quizzes)
  @JoinColumn({ name: 'moduleId' })
  module: Module;
}