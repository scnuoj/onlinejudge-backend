import { Problem, Submission } from 'app/entity'
import { Exclude } from 'class-transformer'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

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
