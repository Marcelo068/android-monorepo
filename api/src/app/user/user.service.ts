import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { Repository, DeleteResult, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from './entities/user.entity'


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(request: CreateUserDto) {
    return await this.userRepository.save(request)
  }

  async findAll() {
    const [ result, count] = await this.userRepository.findAndCount({
      order: {
        updatedDate: 'DESC',
      }
    });

    return { data: result, count: count }
  }

  findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  async update(id: string, request: UpdateUserDto) {
    return await this.userRepository.update(
      { id: id },
      request,
    )
  }

  async remove(id: string) {
    return await this.userRepository.delete(
      { id: id},
    )
  }
}
