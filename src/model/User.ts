import { Problem } from 'app/model/Problem'
import { Submission } from 'app/model/Submission'
import { Random } from 'mockjs'
import { AutoIncrement, Column, DataType, Default, ForeignKey, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript'

@Table({
  tableName: 'user'
})
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column
  public id: number

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

  public static MOCK_DATA (item?: {}): {} {
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
