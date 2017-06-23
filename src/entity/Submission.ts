import { Problem, User } from 'app/entity'
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Submission {
  @PrimaryGeneratedColumn()
  id: number

  @Column('TEXT')
  code: string

  @Column()
  lang: string

  @Column()
  cpuTime: number

  @Column()
  realTime: number

  @Column()
  signal: number

  @Column()
  memory: number

  @Column()
  exitCode: number

  @Column()
  result: number

  @Column()
  error: number

  @OneToOne(type => Problem)
  @JoinColumn()
  problem: Problem

  @OneToOne(type => User)
  @JoinColumn()
  user: User
}
