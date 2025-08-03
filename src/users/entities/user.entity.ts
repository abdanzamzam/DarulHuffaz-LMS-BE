import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { Role } from '../../roles/entities/role.entity';
import { TeacherDetail } from '../../teacher-details/entities/teacher-detail.entity';
import { StudentDetail } from '../../student-details/entities/student-detail.entity';
import { ModuleScore } from '../../module-scores/entities/module-score.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Exclude()
  @Column()
  password: string;

  @Column({ nullable: true })
  roleId: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ nullable: true })
  teacherDetailId: string;

  @Column({ nullable: true })
  studentDetailId: string;

  @Column({ nullable: true })
  config: string;

  @Column({ default: 'active' })
  status: string;

  @Column({ nullable: true })
  deletedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // Relations
  @ManyToOne(() => Role, (role) => role.users)
  @JoinColumn({ name: 'roleId' })
  role: Role;

  @OneToOne(() => TeacherDetail, (teacherDetail) => teacherDetail.user)
  teacherDetail: TeacherDetail;

  @OneToOne(() => StudentDetail, (studentDetail) => studentDetail.user)
  studentDetail: StudentDetail;

  @OneToMany(() => ModuleScore, (moduleScore) => moduleScore.user)
  moduleScores: ModuleScore[];
}