import { Problem } from 'app/entity/Problem'
import { ProblemService } from 'app/service/ProblemService'
import { plainToClass } from 'class-transformer'
import { transformAndValidate } from 'class-transformer-validator'
import { IsIn, IsNumberString, IsString, validate } from 'class-validator'
import { Context } from 'koa'
import 'reflect-metadata'
import { Body, Ctx, Get, JsonController, Param, QueryParam, QueryParams, State } from 'routing-controllers'
import { Inject, Service, Container } from 'typedi'

export class ProblemQuery {
  @IsNumberString() public limit: string
  @IsNumberString() public offset: string
  @IsIn(['asc', 'desc']) public order: string
  @IsString() public sortby: string
}

@Service()
@JsonController('/v1/problems')
export class ProblemsController {

  @Inject() private problemService: ProblemService

  @Get('/')
  public async index (@QueryParams() query: ProblemQuery) {
    return await this.problemService.list(parseInt(query.offset, 10), parseInt(query.limit, 10), query.sortby, query.order)
  }

  @Get('/:id')
  public async show (@Param('id') id: number) {
    return await this.problemService.show(id)
  }

  @Get('/:id/recommend')
  public async recommend (@Param('id') id: number) {
    return await this.problemService.recommend(id)
  }
}
