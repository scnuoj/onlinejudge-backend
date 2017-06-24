import { Problem, User } from 'app/entity'
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Submission {
  @PrimaryGeneratedColumn()
  id: number

  @Column('TEXT')
  code: string

  @Column()
  lang: string

  @Column({ nullable: true })
  cpuTime: number

  @Column({ nullable: true })
  realTime: number

  @Column({ nullable: true })
  signal: number

  @Column({ nullable: true })
  memory: number

  @Column({ nullable: true })
  exitCode: number

  @Column({ nullable: true })
  result: number

  @Column({ nullable: true })
  error: number

  @OneToOne(type => Problem)
  @JoinColumn()
  problem: Problem

  @OneToOne(type => User)
  @JoinColumn()
  user: User
}
