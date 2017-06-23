import { ProblemQuery } from 'app/controller/interface'
import { Problem } from 'app/entity'
import { ProblemService } from 'app/service'
import { Body, Get, JsonController, Param, QueryParam, QueryParams, State } from 'routing-controllers'
import { Container, Inject, Service } from 'typedi'

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
