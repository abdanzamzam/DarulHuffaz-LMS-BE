import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { ModuleScore } from '../../module-scores/entities/module-score.entity';
import { Quiz } from '../../quizzes/entities/quiz.entity';

@Entity('modules')
export class Module {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  sessionId: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  contentText: string;

  @Column({ nullable: true })
  contentVideo: string;

  @Column({ nullable: true })
  files: string;

  @Column({ nullable: true })
  moduleType: string;

  @Column({ nullable: true })
  status: string;

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
  @OneToMany(() => ModuleScore, (moduleScore) => moduleScore.module)
  moduleScores: ModuleScore[];

  @OneToMany(() => Quiz, (quiz) => quiz.module)
  quizzes: Quiz[];
}