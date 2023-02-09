import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GameLog } from '../../models/game.log/game.log';
import { CreateGameLogDto } from '../../dto/create-game.log.dto';

@Injectable()
export class GameLogsService {
  constructor(
    @InjectModel(GameLog)
    private readonly historyModel: typeof GameLog,
  ) {}

  create(createHistoryDto: CreateGameLogDto): Promise<GameLog> {
    const body = JSON.stringify(createHistoryDto);

    return this.historyModel.create(JSON.parse(body));
  }

  async findAll(): Promise<GameLog[]> {
    return this.historyModel.findAll();
  }

  findOne(id: string): Promise<GameLog> {
    return this.historyModel.findOne({
      where: {
        id,
      },
    });
  }

  async remove(id: string): Promise<void> {
    const History = await this.findOne(id);
    await History.destroy();
  }
}
