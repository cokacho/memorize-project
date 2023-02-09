import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateGameLogDto } from '../../dto/create-game.log.dto';
import { GameLog } from '../../models/game.log/game.log';
import { GameLogsService } from '../../services/game.logs/game-logs.service';

@Controller('game-logs')
export class GameLogsController {
  constructor(private readonly service: GameLogsService) {}

  @Post()
  create(@Body() createGameLogDto: CreateGameLogDto): Promise<GameLog> {
    return this.service.create(createGameLogDto);
  }

  @Get()
  findAll(): Promise<GameLog[]> {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<GameLog> {
    return this.service.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.service.remove(id);
  }
}
