import { Test, TestingModule } from '@nestjs/testing';
import {getModelToken} from "@nestjs/sequelize";
import {GamesUsersService} from "./games.users.service";
import {GameUser} from "../../models/game.user/game.user";

describe('GameUsersService', () => {
  let service: GamesUsersService;
  let model: typeof GameUser;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers:
        [
          GamesUsersService,
          {
            provide: getModelToken(GameUser),
            useValue: {}
          }
        ],
    }).compile();

    service = module.get<GamesUsersService>(GamesUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
