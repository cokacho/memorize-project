import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Game } from '../../models/game/game';
import { CreateGameDto } from '../../dto/create-game.dto';

@Injectable()
export class GamesService {
  constructor(
    @InjectModel(Game)
    private readonly gameModel: typeof Game,
  ) {}

  create(createGameDto: CreateGameDto): Promise<Game> {
    const body = JSON.stringify(createGameDto);

    return this.gameModel.create(JSON.parse(body));
  }

  async findAll(): Promise<Game[]> {
    return this.gameModel.findAll();
  }

  findOne(id: string): Promise<Game> {
    return this.gameModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<void> {
    const Game = await this.findOne(id);
    await Game.destroy();
  }
}
