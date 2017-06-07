/// <reference path="./mockjs.d.ts" />
import { Random } from 'mockjs'
import { DataType, Table, Column, Model, PrimaryKey, AutoIncrement, Default, ForeignKey, HasMany } from 'sequelize-typescript';
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

  static mock (item) {
    return {
      code: Random.paragraph(),
      cpuTime: Random.integer(0, 2000),
      error: Random.integer(0, 2000),
      exitCode: Random.integer(0, 2000),
      lang: 'C',
      memory: Random.integer(0, 2000),
      realTime: Random.integer(0, 2000),
      result: Random.integer(0, 2000),
      signal: Random.integer(0, 2000),
      ...item
    }
  }
}
