import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../user/user.model';
import { Game } from '../game/game';

@Table({
  tableName: 'games_users',
})
export class GameUser extends Model {
  @Column({
    type: DataType.INTEGER,
    field: 'id',
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  })
  id: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    field: 'id_user',
  })
  idUser: number;

  @BelongsTo(() => User, 'idUser')
  user: User;

  @ForeignKey(() => Game)
  @Column({
    type: DataType.INTEGER,
    field: 'id_game',
  })
  idGame: number;

  @BelongsTo(() => Game, 'idGame')
  game: Game;

  @Column({
    type: DataType.DATE,
  })
  createdAt: string;

  @Column({
    type: DataType.DATE,
  })
  updatedAt: string;
}
