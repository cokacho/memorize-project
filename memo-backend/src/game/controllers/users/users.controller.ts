import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { User } from '../../models/user/user.model';
import { CreateUserDto } from '../../dto/create-user.dto';
import { UsersService } from '../../services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  /**
   * Find if the user exist using the email
   * otherwise create the user and return it
   *
   * @param registerUserDto
   */
  @Post('register')
  register(@Body() registerUserDto: CreateUserDto): Promise<User> {
    return this.service.findOneByEmail(registerUserDto.email)
      .then((result) => {
      if (result) {
        let updateUser = this.service.update({
          id: result.id,
          ... registerUserDto
        });

        return updateUser.then((result) => result[0]);
      }

      return this.service.create(registerUserDto);
    })
  }

  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.service.create(createUserDto);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.service.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.service.remove(id);
  }
}
