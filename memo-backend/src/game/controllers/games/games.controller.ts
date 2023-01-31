import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Game } from '../../models/game/game';
import { GamesService } from '../../services/games/games.service';
import { CreateGameDto } from '../../dto/create-game.dto';

@Controller('games')
export class GamesController {
  constructor(private readonly service: GamesService) {}

  @Post()
  create(@Body() createGameDto: CreateGameDto): Promise<Game> {
    return this.service.create(createGameDto);
  }

  @Get()
  findAll(): Promise<Game[]> {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Game> {
    return this.service.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.service.remove(id);
  }
}
