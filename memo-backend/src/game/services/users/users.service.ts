import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../../models/user/user.model';
import { CreateUserDto } from '../../dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}


  create(createUserDto: CreateUserDto): Promise<User> {
    const body = JSON.stringify(createUserDto);

    return this.userModel.create(JSON.parse(body));
  }

  update(user): Promise<[User, boolean]> {

    return this.userModel.upsert(user);
  }

  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  findOne(id: string): Promise<User> {
    return this.userModel.findOne({
      where: {
        id,
      },
    });
  }

  findOneByEmail(email: string): Promise<User> {
    return this.userModel.findOne(
      {
        where: {
          email,
        }
      }
    )
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
