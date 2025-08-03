import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { ApiProperty, ApiHideProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { Role } from '../../roles/entities/role.entity';
import { TeacherDetail } from '../../teacher-details/entities/teacher-detail.entity';
import { StudentDetail } from '../../student-details/entities/student-detail.entity';
import { ModuleScore } from '../../module-scores/entities/module-score.entity';

@Entity('users')
export class User {
  @ApiProperty({
    description: 'ID unik pengguna',
    example: '550e8400-e29b-41d4-a716-446655440000'
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    description: 'Nama lengkap pengguna',
    example: 'John Doe'
  })
  @Column()
  name: string;

  @ApiProperty({
    description: 'Alamat email pengguna (unik)',
    example: 'user@example.com'
  })
  @Column({ unique: true })
  email: string;

  @ApiHideProperty()
  @Exclude()
  @Column()
  password: string;

  @ApiProperty({
    description: 'ID peran pengguna',
    example: '1',
    required: false
  })
  @Column({ nullable: true })
  roleId: string;

  @ApiProperty({
    description: 'URL avatar pengguna',
    example: 'https://example.com/avatar.jpg',
    required: false
  })
  @Column({ nullable: true })
  avatar: string;

  @ApiProperty({
    description: 'ID detail guru (jika pengguna adalah guru)',
    example: '550e8400-e29b-41d4-a716-446655440000',
    required: false
  })
  @Column({ nullable: true })
  teacherDetailId: string;

  @ApiProperty({
    description: 'ID detail siswa (jika pengguna adalah siswa)',
    example: '550e8400-e29b-41d4-a716-446655440000',
    required: false
  })
  @Column({ nullable: true })
  studentDetailId: string;

  @ApiProperty({
    description: 'Konfigurasi pengguna (JSON string)',
    example: '{"theme":"dark","notifications":true}',
    required: false
  })
  @Column({ nullable: true })
  config: string;

  @ApiProperty({
    description: 'Status pengguna',
    example: 'active',
    enum: ['active', 'inactive', 'suspended']
  })
  @Column({ default: 'active' })
  status: string;

  @ApiProperty({
    description: 'Tanggal penghapusan (soft delete)',
    example: '2023-01-01T00:00:00Z',
    required: false
  })
  @Column({ nullable: true })
  deletedAt: Date;

  @ApiProperty({
    description: 'Tanggal pembuatan',
    example: '2023-01-01T00:00:00Z'
  })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({
    description: 'Tanggal pembaruan terakhir',
    example: '2023-01-01T00:00:00Z'
  })
  @UpdateDateColumn()
  updatedAt: Date;

  // Relations
  @ApiProperty({
    description: 'Peran pengguna',
    type: () => Role
  })
  @ManyToOne(() => Role, (role) => role.users)
  @JoinColumn({ name: 'roleId' })
  role: Role;

  @ApiProperty({
    description: 'Detail guru',
    type: () => TeacherDetail,
    required: false
  })
  @OneToOne(() => TeacherDetail, (teacherDetail) => teacherDetail.user)
  teacherDetail: TeacherDetail;

  @ApiProperty({
    description: 'Detail siswa',
    type: () => StudentDetail,
    required: false
  })
  @OneToOne(() => StudentDetail, (studentDetail) => studentDetail.user)
  studentDetail: StudentDetail;

  @ApiProperty({
    description: 'Skor modul pengguna',
    type: () => [ModuleScore]
  })
  @OneToMany(() => ModuleScore, (moduleScore) => moduleScore.user)
  moduleScores: ModuleScore[];
}