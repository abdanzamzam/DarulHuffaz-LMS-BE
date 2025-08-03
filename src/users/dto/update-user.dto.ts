import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsOptional, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({
    description: 'Password pengguna (minimal 8 karakter)',
    example: 'newpassword123',
    required: false,
    minLength: 8
  })
  @IsString()
  @IsOptional()
  @MinLength(8)
  password?: string;
}