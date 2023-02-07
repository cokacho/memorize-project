import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../user/user.model';
import { GameUser } from '../game.user/game.user';

@Table
export class GameLog extends Model {
  @Column({
    type: DataType.INTEGER,
    field: 'id',
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: '0',
    field: 'id_action_card',
  })
  idActionCard: string;

  @ForeignKey(() => GameUser)
  @Column({
    type: DataType.INTEGER,
    field: 'id_games_users',
  })
  idGamesUsers: number;

  @BelongsTo(() => User, 'idGamesUsers')
  gamesUsers: GameUser;

  @Column({
    type: DataType.DATE,
  })
  createdAt: string;

  @Column({
    type: DataType.DATE,
  })
  updatedAt: string;
}
