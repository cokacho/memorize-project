import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './models/user/user.model';
import { UsersService } from './services/users/users.service';
import { UsersController } from './controllers/users/users.controller';
import { GamesController } from './controllers/games/games.controller';
import { ScoresController } from './controllers/scores/scores.controller';
import { ScoresService } from './services/scores/scores.service';
import { GamesService } from './services/games/games.service';
import { GameLogsService } from './services/game.logs/game-logs.service';
import { GameLogsController } from './controllers/game.logs/game.logs.controller';
import { GamesUsersService } from './services/games.users/games.users.service';
import { GamesUsersController } from './controllers/games.users/games.users.controller';
import { Game } from './models/game/game';
import { GameLog } from './models/game.log/game.log';
import { GameUser } from './models/game.user/game.user';
import { Score } from './models/score/score';

@Module({
  imports: [SequelizeModule.forFeature([User, Game, GameLog, GameUser, Score])],
  providers: [
    UsersService,
    ScoresService,
    GamesService,
    GameLogsService,
    GamesUsersService,
  ],
  controllers: [
    UsersController,
    ScoresController,
    GamesController,
    GameLogsController,
    GamesUsersController,
  ],
})
export class GameModule {}
