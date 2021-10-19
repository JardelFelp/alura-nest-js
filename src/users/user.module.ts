import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { IsUniqueUsernameConstraint } from './validators/is-unique-username.validator';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, IsUniqueUsernameConstraint],
  exports: [UserService],
})
export class UserModule {}
