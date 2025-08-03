import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'Email pengguna',
    example: 'user@example.com',
    required: true
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Nama depan pengguna',
    example: 'John',
    required: true
  })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({
    description: 'Nama belakang pengguna',
    example: 'Doe',
    required: true
  })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({
    description: 'Password pengguna (minimal 8 karakter)',
    example: 'password123',
    required: true,
    minLength: 8
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}