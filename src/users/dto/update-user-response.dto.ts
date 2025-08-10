import { ApiProperty } from '@nestjs/swagger';
import { UserResponseDto } from './user-response.dto';

export class UpdateUserResponseDto {
  @ApiProperty({
    description: 'Status of the operation',
    example: 'success',
    enum: ['success', 'error'],
  })
  status: string;

  @ApiProperty({
    description: 'Message describing the result of the operation',
    example: 'User updated successfully',
  })
  message: string;

  @ApiProperty({
    description: 'Updated user data',
    type: UserResponseDto,
  })
  data: UserResponseDto;
}