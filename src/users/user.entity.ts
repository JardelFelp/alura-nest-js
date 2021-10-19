import { Exclude } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IsUniqueUsername } from './validators/is-unique-username.validator';

export class User {
  id: number;

  @IsNotEmpty()
  @IsString()
  @IsUniqueUsername({
    message: 'Username is already in use',
  })
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Exclude({ toPlainOnly: true })
  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  entryDate: Date;
}
