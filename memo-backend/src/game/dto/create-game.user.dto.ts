import {IsNotEmpty} from 'class-validator';

export class CreateGameUserDto {
  @IsNotEmpty()
  idUser: number;
  @IsNotEmpty()
  idGame: number;
}
