/**
 * @file 请求接口
 */
import { IsBooleanString, IsEmail, IsIn, IsInt, IsNumberString, ValidateIf, IsString, Length } from 'class-validator'

export class ProblemQuery {
  @IsNumberString() public limit: string = '20'
  @IsNumberString() public offset: string = '0'
  @IsIn(['ASC', 'DESC', 'asc', 'desc']) public order: 'ASC' | 'DESC' = 'ASC'
  @IsString() public sortby: string = 'id'
}

export class PostSubmissionData {
  @IsInt() public id: number
  @IsString() public code: string
  @IsString() public lang: string
}

export class SubmissionQuery {
  @IsNumberString() public offset: string = '0'
  @IsNumberString() public limit: string = '20'
  @IsBooleanString() public all: string = 'true'
  @ValidateIf(o => !!o.problemId) @IsNumberString() public problemId?: string
}

export class UserState {
  public id: number
}

export class RegisterUserBody {
  @IsEmail() public email: string
  @Length(2, 10) public name: string
  @Length(6, 18) public password: string
}

export class LoginUserBody {
  @IsString() public nameOrEmail: string
  @Length(6, 18) public password: string
}

export class ForgetUserBody {
  @IsEmail() public email: string
}

export class PasswordUserBody {
  @Length(6, 18) public password: string
  @Length(6, 18) public newPassword: string
}
