import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
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
    type: DataType.STRING(100),
    allowNull: false,
    field: 'first_name',
  })
  firstName: string;

  @Column({
    type: DataType.STRING(100),
    field: 'last_name',
  })
  lastName: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    field: 'email',
  })
  email: string;

  @Column({
    type: DataType.DATE,
  })
  createdAt: string;

  @Column({
    type: DataType.DATE,
  })
  updatedAt: string;

  // @Column({
  //     type: DataType.DATE
  // })
  // deletedAt: string;
}
