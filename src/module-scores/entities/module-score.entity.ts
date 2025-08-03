import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Module } from '../../modules/entities/module.entity';
import { Session } from '../../sessions/entities/session.entity';

@Entity('module_scores')
export class ModuleScore {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  lessonId: string;

  @Column()
  lessonMaterId: string;

  @Column()
  sessionId: string;

  @Column()
  moduleId: string;

  @Column()
  userId: string;

  @Column({ nullable: true })
  status: string;

  @Column({ type: 'float', nullable: true })
  score: number;

  @Column({ type: 'json', nullable: true })
  answers: any;

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
  @ManyToOne(() => User, (user) => user.moduleScores)
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Module, (module) => module.moduleScores)
  @JoinColumn({ name: 'moduleId' })
  module: Module;

  @ManyToOne(() => Session, (session) => session.moduleScores)
  @JoinColumn({ name: 'sessionId' })
  session: Session;
}