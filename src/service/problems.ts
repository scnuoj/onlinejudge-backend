import { BadRequestError } from '../library/error'
import { getEntityManager } from 'typeorm'
import { Problem } from '../entity/problem'

const ProblemRepository = getEntityManager().getRepository(Problem)

/**
 * 根据题目 id 获取指定题目信息
 * @param id 
 */
export async function show (id: number) {
  const problem = await ProblemRepository.find(id)
  if (problem) {
    return problem
  } else {
    throw new BadRequestError('题号有误')
  }
}

/**
 * 获取指定范围的题目列表
 * @param offset 
 * @param limit 
 * @param sortby 
 * @param order 
 */
export async function list (offset = 0, limit = 10, sortby = 'id', order = 'desc') {
  const problems = await ProblemRepository
    .createQueryBuilder('problem')
    .innerJoin('problem.user', 'user')
    .orderBy(sortby)
    .skip(offset)
    .take(limit)
    .getMany()

  return problems
}
