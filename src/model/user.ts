/// <reference path="./mockjs.d.ts" />
import { Random } from 'mockjs'
import { AutoIncrement, Column, DataType, Default, ForeignKey, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript'
import { Problem } from './problem'
import { Submission } from './submission'

@Table
export class User extends Model<User> {
  @PrimaryKey
  @Default(DataType.UUIDV1)
  @Column(DataType.UUID)
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

  static mock (item?: object) {
    return {
      avatar: Random.string(),
      email: Random.email(),
      gender: Random.integer(0, 2000),
      name: Random.string(),
      password: Random.string(),
      remark: Random.string(),
      school: Random.string(),
      ...item
    }
  }
}
