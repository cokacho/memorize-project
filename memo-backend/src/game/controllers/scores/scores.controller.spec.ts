import {Test, TestingModule} from '@nestjs/testing';
import {ScoresController} from "./scores.controller";
import {ScoresService} from "../../services/scores/scores.service";

describe('ScoresController', () => {
  let scoresController: ScoresController;
  let gameUsersService: ScoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScoresController],
      providers: [
        {
          provide: ScoresService,
          useValue: {
          }
        }
      ]
    }).compile();

    scoresController = module.get<ScoresController>(ScoresController);
  });

  it('should be defined', () => {
    expect(scoresController).toBeDefined();
  });
});
