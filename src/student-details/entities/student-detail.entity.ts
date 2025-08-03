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

@Entity('student_details')
export class StudentDetail {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  biodata: string;

  @Column()
  education: string;

  @Column()
  classId: string;

  @Column()
  numberOfMemorization: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true })
  nisn: string;

  // Relations
  @OneToOne(() => User, (user) => user.studentDetail)
  @JoinColumn()
  user: User;
}
