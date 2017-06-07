import { Model } from 'sequelize-typescript'
import { BadRequestError } from '../library/error'
import { Problem } from '../model/problem'
import { User } from '../model/user'

/**
 * 根据题目 id 获取指定题目信息
 * @param id 
 */
export async function show (id: number) {
  const problem = await Problem.findById<Problem>(id, {
    include: [{
      model: User,
      as: 'user',
      attributes: ['name', 'id', 'avatar', 'gender', 'school', 'email', 'remark']
    }]
  })
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
  const problems = await Problem.findAndCountAll<Problem>({
    limit,
    offset,
    order: [[sortby, order]],
    include: [{
      model: User,
      as: 'user',
      attributes: ['name', 'id', 'avatar', 'gender', 'school', 'email', 'remark']
    }]
  })
  return problems
}
