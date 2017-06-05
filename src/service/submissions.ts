import { BadRequestError } from '../library/error'
import { getEntityManager } from 'typeorm'
import { Problem } from '../entity/problem'
import { Submission } from '../entity/submission'
import Queue from '../library/queue'

const ProblemRepository = getEntityManager().getRepository(Problem)
const SubmissionRepository = getEntityManager().getRepository(Submission)

export async function create (userId, id, code, lang) {
  const problem = await ProblemRepository.findOneById(id)
  if (problem) {
    const submission = await SubmissionRepository.create({
      problemId: id,
      userId,
      lang,
      code
    })
    await Queue.submitCheckCodeTask(submission.id)
    return submission.id
  } else {
    throw new BadRequestError('错误的 ProblemId')
  }
}
