import { Problem } from 'app/entity/Problem'
import { Submission } from 'app/entity/Submission'
import { Exclude } from 'class-transformer'
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  email: string

  @Exclude()
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

  @OneToMany(type => Problem, problem => problem.user)
  problems: Problem[]

  @OneToMany(type => Submission, submission => submission.user)
  submissions: Submission[]
}
