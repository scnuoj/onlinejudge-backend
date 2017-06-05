import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm'
import { User } from './user'

@Entity()
export class Problem {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column('text')
    description: string

    @Column()
    lang: string

    @Column('text')
    input: string

    @Column('text')
    output: string

    @Column()
    sampleInput: string

    @Column()
    sampleOutput: string

    @Column('text')
    inputData: string

    @Column('text')
    outputData: string

    @Column('int')
    submitCount: number
    
    @Column('int')
    passCount: number

    @Column('int')
    maxCpuTime: number

    @Column('int')
    maxRealTime: number

    @Column('int')
    maxMemory: number

    @Column('int')
    maxProcessNumber: number

    @Column('int')
    maxOutputSize: number

    @OneToOne(type => User)
    @JoinColumn()
    userId: string

    @Column('float')
    percent: number

}
