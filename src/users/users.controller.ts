import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam, ApiBearerAuth } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto';
import { User } from './entities/user.entity';

@ApiTags('Users')
@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Buat pengguna baru', description: 'Endpoint untuk membuat pengguna baru' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ 
    status: 201, 
    description: 'Pengguna berhasil dibuat',
    type: User
  })
  @ApiResponse({ status: 400, description: 'Bad Request - Data tidak valid' })
  @ApiResponse({ status: 409, description: 'Conflict - Email sudah terdaftar' })
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Dapatkan semua pengguna', description: 'Endpoint untuk mendapatkan daftar semua pengguna' })
  @ApiResponse({ 
    status: 200, 
    description: 'Daftar pengguna berhasil diambil',
    type: [User]
  })
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Dapatkan pengguna berdasarkan ID', description: 'Endpoint untuk mendapatkan detail pengguna berdasarkan ID' })
  @ApiParam({ name: 'id', description: 'ID pengguna', example: '550e8400-e29b-41d4-a716-446655440000' })
  @ApiResponse({ 
    status: 200, 
    description: 'Detail pengguna berhasil diambil',
    type: User
  })
  @ApiResponse({ status: 404, description: 'Not Found - Pengguna tidak ditemukan' })
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Perbarui pengguna', description: 'Endpoint untuk memperbarui data pengguna berdasarkan ID' })
  @ApiParam({ name: 'id', description: 'ID pengguna', example: '550e8400-e29b-41d4-a716-446655440000' })
  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({ 
    status: 200, 
    description: 'Pengguna berhasil diperbarui',
    type: User
  })
  @ApiResponse({ status: 400, description: 'Bad Request - Data tidak valid' })
  @ApiResponse({ status: 404, description: 'Not Found - Pengguna tidak ditemukan' })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Hapus pengguna', description: 'Endpoint untuk menghapus pengguna berdasarkan ID' })
  @ApiParam({ name: 'id', description: 'ID pengguna', example: '550e8400-e29b-41d4-a716-446655440000' })
  @ApiResponse({ 
    status: 200, 
    description: 'Pengguna berhasil dihapus'
  })
  @ApiResponse({ status: 404, description: 'Not Found - Pengguna tidak ditemukan' })
  remove(@Param('id') id: string): Promise<void> {
    return this.usersService.remove(id);
  }
}