import { ApiProperty } from '@nestjs/swagger';
import { UserResponseDto } from './user-response.dto';

export class GetUserResponseDto {
  @ApiProperty({
    description: 'Status of the operation',
    example: 'success',
    enum: ['success', 'error'],
  })
  status: string;

  @ApiProperty({
    description: 'Message describing the result of the operation',
    example: 'User retrieved successfully',
  })
  message: string;

  @ApiProperty({
    description: 'User data',
    type: UserResponseDto,
  })
  data: UserResponseDto;
}

export class GetUsersResponseDto {
  @ApiProperty({
    description: 'Status of the operation',
    example: 'success',
    enum: ['success', 'error'],
  })
  status: string;

  @ApiProperty({
    description: 'Message describing the result of the operation',
    example: 'Users retrieved successfully',
  })
  message: string;

  @ApiProperty({
    description: 'List of users',
    type: [UserResponseDto],
  })
  data: UserResponseDto[];
}