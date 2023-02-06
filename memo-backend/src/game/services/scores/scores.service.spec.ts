import { Test, TestingModule } from '@nestjs/testing';
import {getModelToken} from "@nestjs/sequelize";
import {ScoresService} from "./scores.service";
import {Score} from "../../models/score/score";

describe('GameUsersService', () => {
  let service: ScoresService;
  let model: typeof Score;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers:
        [
          ScoresService,
          {
            provide: getModelToken(Score),
            useValue: {}
          }
        ],
    }).compile();

    service = module.get<ScoresService>(ScoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
