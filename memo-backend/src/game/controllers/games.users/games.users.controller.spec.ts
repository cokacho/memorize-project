import {Test, TestingModule} from '@nestjs/testing';
import {GamesUsersController} from './games.users.controller';
import {GamesUsersService} from "../../services/games.users/games.users.service";

describe('GamesUsersController', () => {
  let gamesUsersController: GamesUsersController;
  let gameUsersService: GamesUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GamesUsersController],
      providers: [
        {
          provide: GamesUsersService,
          useValue: {
          }
        }
      ]
    }).compile();

    gamesUsersController = module.get<GamesUsersController>(GamesUsersController);
  });

  it('should be defined', () => {
    expect(gamesUsersController).toBeDefined();
  });
});
