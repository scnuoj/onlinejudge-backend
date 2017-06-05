import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity()
export class User {
  
  @PrimaryColumn ()
  id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  school: string

  @Column()
  gender: number

  @Column()
  avatar: string

  @Column()
  remark: string
}
