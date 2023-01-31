import {IsNotEmpty} from 'class-validator';

export class CreateScoreDto {
  @IsNotEmpty()
  points: number;
  @IsNotEmpty()
  idGamesUsers: number;
}
