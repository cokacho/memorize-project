import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {GameUser} from "../game.user/game.user";
import {User} from "../user/user.model";

@Table
export class Score extends Model {
  @Column({
    type: DataType.INTEGER,
    field: 'id',
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    unique: true
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0
  })
  points: number

  @ForeignKey(() => GameUser)
  @Column({
    type: DataType.INTEGER,
    field: 'id_games_users'
  })
  idGamesUsers: number;

  @BelongsTo(() => User, 'idGamesUsers')
  gamesUsers: GameUser

  @Column({
    type: DataType.DATE
  })
  createdAt: string;

  @Column({
    type: DataType.DATE
  })
  updatedAt: string;
}
