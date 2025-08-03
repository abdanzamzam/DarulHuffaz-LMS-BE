import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Lesson } from '../../lessons/entities/lesson.entity';
import { ModuleScore } from '../../module-scores/entities/module-score.entity';

@Entity('sessions')
export class Session {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  lessonMaterId: string;

  @Column()
  lessonId: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

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

  @Column({ nullable: true })
  index: number;

  // Relations
  @ManyToOne(() => Lesson, (lesson) => lesson.sessions)
  @JoinColumn({ name: 'lessonId' })
  lesson: Lesson;

  @OneToMany(() => ModuleScore, (moduleScore) => moduleScore.session)
  moduleScores: ModuleScore[];
}
