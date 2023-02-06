import {Test, TestingModule} from '@nestjs/testing';
import {GamesService} from "../../services/games/games.service";
import {CreateGameDto} from "../../dto/create-game.dto";
import {GamesController} from "./games.controller";

const createGameDto: CreateGameDto = {
  channel: 'channel #1'
}

describe('GamesController', () => {
  let gamesController: GamesController;
  let gamesService: GamesService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GamesController],
      providers: [
        {
          provide: GamesService,
          useValue: {
            create: jest
              .fn()
              .mockImplementation((game: CreateGameDto) =>
                Promise.resolve({id: '1', ...game}),
              ),
            findAll: jest.fn().mockResolvedValue([
              {
                channel: 'channel #1'
              },
              {
                channel: 'channel #2'
              },
            ]),
            findOne: jest.fn().mockImplementation((id: string) =>
              Promise.resolve({
                channel: 'channel #1',
                id,
              }),
            ),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    gamesController = app.get<GamesController>(GamesController);
    gamesService = app.get<GamesService>(GamesService);
  });

  it('should be defined', () => {
    expect(gamesController).toBeDefined();
  });

  describe('create()', () => {
    it('should create a game', () => {
      expect(gamesController.create(createGameDto)).resolves.toEqual({
        id: '1',
        ...createGameDto,
      });
      expect(gamesService.create).toHaveBeenCalled();
      expect(gamesService.create).toHaveBeenCalledWith(createGameDto);
    });
  });

  describe('findAll()', () => {
    it('should find all games ', () => {
      gamesController.findAll();
      expect(gamesService.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne()', () => {
    it('should find a game', () => {
      gamesController.findOne('1');
      expect(gamesService.findOne).toHaveBeenCalled();
      expect(gamesController.findOne('1')).resolves.toEqual({
        channel: 'channel #1',
        id: '1',
      });
    });
  });

  describe('remove()', () => {
    it('should remove the game', () => {
      gamesController.remove('2');
      expect(gamesService.remove).toHaveBeenCalled();
    });
  });
});