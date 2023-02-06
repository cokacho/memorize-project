import {Test, TestingModule} from '@nestjs/testing';
import {GameLogsController} from "./game.logs.controller";
import {GameLogsService} from "../../services/game.logs/game-logs.service";

describe('GameLogsController', () => {
  let gameLogsController: GameLogsController;
  let gameUsersService: GameLogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameLogsController],
      providers: [
        {
          provide: GameLogsService,
          useValue: {
          }
        }
      ]
    }).compile();

    gameLogsController = module.get<GameLogsController>(GameLogsController);
  });

  it('should be defined', () => {
    expect(gameLogsController).toBeDefined();
  });
});
