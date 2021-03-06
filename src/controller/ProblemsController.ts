import { ProblemQuery } from 'app/controller/interface'
import { ProblemService } from 'app/service'
import { Problem } from 'app/entity'
import { Get, JsonController, Param, QueryParams } from 'routing-controllers'
import { Inject, Service } from 'typedi'

@Service()
@JsonController('/v1/problems')
export class ProblemsController {

  @Inject()
  private problemService: ProblemService

  @Get('/')
  public async index (@QueryParams() query: ProblemQuery): Promise<{ data: [Problem[], number]; }> {
    const data = await this.problemService.list(parseInt(query.offset, 10), parseInt(query.limit, 10), query.sortby, query.order)
    return {
      data
    }
  }

  @Get('/:id')
  public async show (@Param('id') id: number): Promise<{ data: Problem; }> {
    const data = await this.problemService.show(id)
    return {
      data
    }
  }

  @Get('/:id/recommend')
  public async recommend (@Param('id') id: number): Promise<{ data: Problem[]; }> {
    const data = await this.problemService.recommend(id)
    return {
      data
    }
  }
}
