import { ForgetUserBody, LoginUserBody, PasswordUserBody, RegisterUserBody, UserState } from 'app/controller/interface'
import { User } from 'app/entity'
import { authorization } from 'app/middleware/authorization'
import { UserService } from 'app/service'
import { Body, Controller, Get, Patch, Post, State, UseBefore } from 'routing-controllers'
import { Inject, Service } from 'typedi'

@Service()
@Controller('/v1/user')
export class UserController {

  @Inject() private userService: UserService

  @Get('/')
  @UseBefore(authorization())
  public async index (@State('user') user: UserState): Promise<{ data: User }> {
    const data = await this.userService.show(user.id)
    return {
      data
    }
  }

  @Post('/register')
  public async register (@Body() body: RegisterUserBody): Promise<any> {
    const user = await this.userService.register(body.name, body.email, body.password)
    return {
      data: user,
      message: '注册成功'
    }
  }

  @Post('/login')
  public async login (@Body() body: LoginUserBody): Promise<{ data: { user: User, token: string; }; message: string; }> {
    const user = await this.userService.login(body.nameOrEmail, body.password)
    return {
      data: user,
      message: '登录成功'
    }
  }

  @Post('/forget')
  public async forget (@Body() body: ForgetUserBody): Promise<{ message: string; }> {
    await this.userService.forget(body.email)
    return {
      message: '系统已经向您的邮箱发送了验证邮件, 请查收'
    }
  }

  @Patch('/password')
  @UseBefore(authorization())
  public async password (@State('user') user: UserState, @Body() body: PasswordUserBody): Promise<{ message: string; }> {
    await this.userService.password(user.id, body.password, body.newPassword)
    return {
      message: '密码修改成功'
    }
  }
}
