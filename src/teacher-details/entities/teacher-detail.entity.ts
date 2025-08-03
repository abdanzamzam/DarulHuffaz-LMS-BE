import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('teacher_details')
export class TeacherDetail {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  biodata: string;

  @Column()
  education: string;

  @Column()
  numberPhone: string;

  @Column()
  lessonId: string;

  @Column()
  classId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true })
  nip: string;

  // Relations
  @OneToOne(() => User, (user) => user.teacherDetail)
  @JoinColumn()
  user: User;
}
