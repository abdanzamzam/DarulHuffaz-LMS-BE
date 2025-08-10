import { ApiProperty } from '@nestjs/swagger';
import { UserResponseDto } from './user-response.dto';

export class CreateUserResponseDto {
  @ApiProperty({
    description: 'Status of the operation',
    example: 'success',
    enum: ['success', 'error'],
  })
  status: string;

  @ApiProperty({
    description: 'Message describing the result of the operation',
    example: 'User created successfully',
  })
  message: string;

  @ApiProperty({
    description: 'Created user data',
    type: UserResponseDto,
  })
  data: UserResponseDto;
}
