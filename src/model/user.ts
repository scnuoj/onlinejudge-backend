import { Table, Column, Model, PrimaryKey, AutoIncrement, Default, ForeignKey, HasMany } from 'sequelize-typescript';
import sequelize from '../library/database'
import { DataTypes } from 'sequelize'
import { Problem } from './problem'
import { Submission } from './submission'

@Table
export class User extends Model<User> {
  @PrimaryKey
  @Default(DataTypes.UUIDV1)
  @Column(DataTypes.UUID)
  public id: string

  @Column
  public name: string

  @Column
  public email: string

  @Column
  public password: string

  @Column
  public school: string

  @Column
  public gender: number

  @Column
  public avatar: string

  @Column
  public remark: string

  @HasMany(() => Problem)
  public problems: Problem[]

  @HasMany(() => Submission)
  public submissions: Submission[]
}
