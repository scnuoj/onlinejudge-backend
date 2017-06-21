import { IsBooleanString, IsEmail, IsEnum, IsIn, IsInt, IsNumberString, IsString, Length } from 'class-validator'

export class ProblemQuery {
  @IsNumberString() public limit: string
  @IsNumberString() public offset: string
  @IsIn(['asc', 'desc']) public order: string
  @IsString() public sortby: string
}

export class PostSubmissionData {
  @IsInt() public id: number
  @IsString() public code: string
  @IsString() public lang: string
}

export class SubmissionQuery {
  @IsNumberString() public offset: string
  @IsNumberString() public limit: string
  @IsBooleanString() public all: boolean
  @IsNumberString() public problemId: number
}

export class UserState {
  public id: number
}

export class RegisterUserBody {
  @IsEmail() public email: string
  @Length(2, 8) public name: string
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
