import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateGameUserDto } from '../../dto/create-game.user.dto';
import { GameUser } from '../../models/game.user/game.user';
import { GamesUsersService } from '../../services/games.users/games.users.service';

@Controller('games-users')
export class GamesUsersController {
  constructor(private readonly service: GamesUsersService) {}

  @Post()
  create(@Body() createUserDto: CreateGameUserDto): Promise<GameUser> {
    return this.service.create(createUserDto);
  }

  @Get()
  findAll(): Promise<GameUser[]> {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<GameUser> {
    return this.service.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.service.remove(id);
  }
}
