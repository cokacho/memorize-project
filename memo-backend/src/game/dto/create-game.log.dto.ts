import {IsNotEmpty} from 'class-validator';

export class CreateGameLogDto {
  @IsNotEmpty()
  idActionCard: string;
  @IsNotEmpty()
  idGamesUsers: number;
}
