import { Test, TestingModule } from '@nestjs/testing';
import { GamesService } from './games.service';
import { getModelToken } from '@nestjs/sequelize';
import { Game } from '../../models/game/game';

const gamesArray = [
  {
    channel: 'channel #1',
  },
  {
    channel: 'channel #2',
  },
];

const oneGame = {
  channel: 'channel #1',
};

describe('GameService', () => {
  let service: GamesService;
  let model: typeof Game;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GamesService,
        {
          provide: getModelToken(Game),
          useValue: {
            findAll: jest.fn(() => gamesArray),
            findOne: jest.fn(),
            create: jest.fn(() => oneGame),
            remove: jest.fn(),
            destroy: jest.fn(() => oneGame),
          },
        },
      ],
    }).compile();

    service = module.get<GamesService>(GamesService);
    model = module.get<typeof Game>(getModelToken(Game));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create()', () => {
    it('should successfully insert a game', () => {
      const oneGame = {
        channel: 'channel #1',
      };
      expect(
        service.create({
          channel: 'channel #1',
        }),
      ).toEqual(oneGame);
    });
  });

  describe('findAll()', () => {
    it('should return an array of games', async () => {
      const games = await service.findAll();
      expect(games).toEqual(gamesArray);
    });
  });

  describe('findOne()', () => {
    it('should get a single game', () => {
      const findSpy = jest.spyOn(model, 'findOne');
      expect(service.findOne('1'));
      expect(findSpy).toBeCalledWith({ where: { id: '1' } });
    });
  });

  describe('remove()', () => {
    it('should remove a game', async () => {
      const findSpy = jest.spyOn(model, 'findOne').mockReturnValue({
        destroy: jest.fn(),
      } as any);
      const retVal = await service.remove('2');
      expect(findSpy).toBeCalledWith({ where: { id: '2' } });
      expect(retVal).toBeUndefined();
    });
  });
});
