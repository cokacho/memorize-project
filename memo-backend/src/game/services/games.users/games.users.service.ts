import { Injectable } from '@nestjs/common';
import { CreateGameUserDto } from '../../dto/create-game.user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { GameUser } from '../../models/game.user/game.user';

@Injectable()
export class GamesUsersService {
  constructor(
    @InjectModel(GameUser)
    private readonly gameUserModel: typeof GameUser,
  ) {}

  create(createGameUserDto: CreateGameUserDto): Promise<GameUser> {
    const body = JSON.stringify(createGameUserDto);

    return this.gameUserModel.create(JSON.parse(body));
  }

  async findAll(): Promise<GameUser[]> {
    return this.gameUserModel.findAll();
  }

  findOne(id: string): Promise<GameUser> {
    return this.gameUserModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<void> {
    const GameUser = await this.findOne(id);
    await GameUser.destroy();
  }
}
