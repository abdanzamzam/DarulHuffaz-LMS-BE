import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Class } from '../../classes/entities/class.entity';
import { Session } from '../../sessions/entities/session.entity';
import { LessonMater } from '../../lesson-maters/entities/lesson-mater.entity';
import { LessonAccessRole } from '../../lesson-access-roles/entities/lesson-access-role.entity';

@Entity('lessons')
export class Lesson {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  classId: string;

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

  // Relations
  @ManyToOne(() => Class, (cls) => cls.lessons)
  @JoinColumn({ name: 'classId' })
  class: Class;

  @OneToMany(() => Session, (session) => session.lesson)
  sessions: Session[];

  @OneToMany(() => LessonMater, (lessonMater) => lessonMater.lesson)
  lessonMaters: LessonMater[];

  @OneToMany(() => LessonAccessRole, (lessonAccessRole) => lessonAccessRole.lesson)
  lessonAccessRoles: LessonAccessRole[];
}