import { Test, TestingModule } from '@nestjs/testing';
import { GameLogsService } from './game-logs.service';
import {GameLog} from "../../models/game.log/game.log";
import {getModelToken} from "@nestjs/sequelize";

describe('GameLogsService', () => {
  let service: GameLogsService;
  let model: typeof GameLog;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers:
        [
          GameLogsService,
          {
            provide: getModelToken(GameLog),
            useValue: {}
          }
        ],
    }).compile();

    service = module.get<GameLogsService>(GameLogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
