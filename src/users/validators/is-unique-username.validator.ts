import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UserService } from '../user.service';

@Injectable()
@ValidatorConstraint()
export class IsUniqueUsernameConstraint
  implements ValidatorConstraintInterface
{
  constructor(private userService: UserService) {}

  validate(value: any): boolean | Promise<boolean> {
    return !this.userService.findByName(value);
  }
}

export function IsUniqueUsername(validationOptions?: ValidationOptions) {
  // eslint-disable-next-line
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUniqueUsernameConstraint,
    });
  };
}
