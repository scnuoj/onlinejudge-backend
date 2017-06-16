import { authorization } from 'app/middleware/authorization'
import { IsEmail, IsString, Length } from 'class-validator'
import { Context } from 'koa'
import { Body, BodyParam, Controller, Ctx, Get, Param, Patch, Post, QueryParam, UseBefore } from 'routing-controllers'

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

@Controller('/v1/user')
export class UserController {
  @Get('/')
  @UseBefore(authorization())
  public async index (@Ctx() ctx: Context): Promise<void> {
    const user = await ctx.services.user.show(ctx.state.user.id)
    ctx.ok(user)
  }

  @Post('/register')
  public async register (@Ctx() ctx: Context, @Body() body: RegisterUserBody): Promise<void> {
    const user = await ctx.services.user.register(body.name, body.email, body.password)
    ctx.ok(user, '注册成功')
  }

  @Post('/login')
  public async login (@Ctx() ctx: Context, @Body() body: LoginUserBody): Promise<void> {
    const user = await ctx.services.user.login(body.nameOrEmail, body.password)
    ctx.ok(user, '登录成功')
  }

  @Post('/forget')
  public async forget (@Ctx() ctx: Context, @Body() body: ForgetUserBody): Promise<void> {
    await ctx.services.user.forget(body.email)
    ctx.ok(null, '系统已经向您的邮箱发送了验证邮件, 请查收')
  }

  @Patch('/password')
  @UseBefore(authorization())
  public async password (@Ctx() ctx: Context, @Body() body: PasswordUserBody): Promise<void> {
    await ctx.services.user.password(ctx.state.user.id, body.password, body.newPassword)
    ctx.ok(null, '密码修改成功')
  }
}
