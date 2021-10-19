import {
  Body,
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { NestResponse } from '../core/http/nest-response';
import { NestResponseBuilder } from '../core/http/nest-response-builder';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  public create(@Body() user: User): NestResponse {
    const dto = this.userService.create(user);

    return new NestResponseBuilder()
      .status(HttpStatus.CREATED)
      .headers({ location: `/users/${user.username}` })
      .body(dto)
      .build();
  }

  @Get(':username')
  public findByName(@Param('username') username: string): User {
    const user = this.userService.findByName(username);

    if (!user) {
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'User not found',
      });
    }

    return user;
  }
}
