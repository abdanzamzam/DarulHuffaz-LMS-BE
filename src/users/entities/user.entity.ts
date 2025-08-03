import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { ApiProperty, ApiHideProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { Role } from '../../roles/entities/role.entity';
import { TeacherDetail } from '../../teacher-details/entities/teacher-detail.entity';
import { StudentDetail } from '../../student-details/entities/student-detail.entity';
import { ModuleScore } from '../../module-scores/entities/module-score.entity';

@Entity('users')
export class User {
  @ApiProperty({
    description: 'Unique user ID',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    description: 'User full name',
    example: 'John Doe',
  })
  @Column()
  name: string;

  @ApiProperty({
    description: 'User email address (unique)',
    example: 'user@example.com',
  })
  @Column({ unique: true })
  email: string;

  @ApiHideProperty()
  @Exclude()
  @Column()
  password: string;

  @ApiProperty({
    description: 'User role ID',
    example: '1',
    required: false,
  })
  @Column({ nullable: true })
  roleId: string;

  @ApiProperty({
    description: 'User avatar URL',
    example: 'https://example.com/avatar.jpg',
    required: false,
  })
  @Column({ nullable: true })
  avatar: string;

  @ApiProperty({
    description: 'Teacher detail ID (if user is a teacher)',
    example: '550e8400-e29b-41d4-a716-446655440000',
    required: false,
  })
  @Column({ nullable: true })
  teacherDetailId: string;

  @ApiProperty({
    description: 'Student detail ID (if user is a student)',
    example: '550e8400-e29b-41d4-a716-446655440000',
    required: false,
  })
  @Column({ nullable: true })
  studentDetailId: string;

  @ApiProperty({
    description: 'User configuration (JSON string)',
    example: '{"theme":"dark","notifications":true}',
    required: false,
  })
  @Column({ nullable: true })
  config: string;

  @ApiProperty({
    description: 'User status',
    example: 'active',
    enum: ['active', 'inactive', 'suspended'],
  })
  @Column({ default: 'active' })
  status: string;

  @ApiProperty({
    description: 'Deletion date (soft delete)',
    example: '2023-01-01T00:00:00Z',
    required: false,
  })
  @Column({ nullable: true })
  deletedAt: Date;

  @ApiProperty({
    description: 'Creation date',
    example: '2023-01-01T00:00:00Z',
  })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({
    description: 'Last update date',
    example: '2023-01-01T00:00:00Z',
  })
  @UpdateDateColumn()
  updatedAt: Date;

  // Relations
  @ApiProperty({
    description: 'User role',
    type: () => Role,
  })
  @ManyToOne(() => Role, (role) => role.users)
  @JoinColumn({ name: 'roleId' })
  role: Role;

  @ApiProperty({
    description: 'Teacher details',
    type: () => TeacherDetail,
    required: false,
  })
  @OneToOne(() => TeacherDetail, (teacherDetail) => teacherDetail.user)
  teacherDetail: TeacherDetail;

  @ApiProperty({
    description: 'Student details',
    type: () => StudentDetail,
    required: false,
  })
  @OneToOne(() => StudentDetail, (studentDetail) => studentDetail.user)
  studentDetail: StudentDetail;

  @ApiProperty({
    description: 'User module scores',
    type: () => [ModuleScore],
  })
  @OneToMany(() => ModuleScore, (moduleScore) => moduleScore.user)
  moduleScores: ModuleScore[];
}
