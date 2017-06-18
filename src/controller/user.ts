import { authorization } from 'app/middleware/authorization'
import { UserService, IUserMsgWithToken } from 'app/service/UserService'
import { IsEmail, IsString, Length } from 'class-validator'
import { Context } from 'koa'
import { Body, BodyParam, Controller, Ctx, Get, Param, Patch, Post, QueryParam, UseBefore, State } from 'routing-controllers'
import { Service, Inject } from 'typedi'
import { User } from 'app/model/User'

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

export class UserState {
  public id: string
}

@Service()
@Controller('/v1/user')
export class UserController {

  @Inject() private userService: UserService

  @Get('/')
  @UseBefore(authorization())
  public async index (@State('user') user: UserState) {
    console.log(user)
    return await this.userService.show(user.id)
  }

  @Post('/register')
  public async register (@Body() body: RegisterUserBody) {
    const user = await this.userService.register(body.name, body.email, body.password)
    return {
      data: user,
      message: '注册成功'
    }
  }

  @Post('/login')
  public async login (@Body() body: LoginUserBody) {
    const user = await this.userService.login(body.nameOrEmail, body.password)
    return {
      data: user,
      message: '登录成功'
    }
  }

  @Post('/forget')
  public async forget (@Body() body: ForgetUserBody) {
    await this.userService.forget(body.email)
    return {
      message: '系统已经向您的邮箱发送了验证邮件, 请查收'
    }
  }

  @Patch('/password')
  @UseBefore(authorization())
  public async password (@State('user') user: UserState, @Body() body: PasswordUserBody) {
    await this.userService.password(user.id, body.password, body.newPassword)
    return {
      message: '密码修改成功'
    }
  }
}
