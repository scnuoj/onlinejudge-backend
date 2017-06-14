import { IsEmail, IsString, Length } from 'class-validator'
import { Body, BodyParam, Controller, Ctx, Get, Param, Patch, Post, QueryParam,UseBefore } from 'routing-controllers'
import { Context } from '..'
import authorization from '../middleware/authorization'
import * as UserService from '../service/user'

export class RegisterUserBody {
  @IsEmail() email: string
  @Length(4, 8) name: string
  @Length(6, 18) password: string
}

export class LoginUserBody {
  @IsString() nameOrEmail: string
  @Length(6, 18) password: string
}

export class ForgetUserBody {
  @IsEmail() email: string
}

export class PasswordUserBody {
  @Length(6, 18) password: string
  @Length(6, 18) newPassword: string
}

@Controller('/v1/user')
export class UserController {
  @Get('/')
  @UseBefore(authorization())
  async index (@Ctx() ctx: Context) {
    const user = await ctx.services.user.show(ctx.state.user.id)
    ctx.ok(user)
  }

  @Post('/register')
  async register (@Ctx() ctx: Context, @Body() body: RegisterUserBody) {
    const user = await ctx.services.user.register(body.name, body.email, body.password)
    ctx.ok(user, '注册成功')
  }

  @Post('/login')
  async login (@Ctx() ctx: Context, @Body() body: LoginUserBody) {
    const user = await ctx.services.user.login(body.nameOrEmail, body.password)
    ctx.ok(user, '登录成功')
  }

  @Post('/forget')
  async forget (@Ctx() ctx: Context, @Body() body: ForgetUserBody) {
    await ctx.services.user.forget(body.email)
    ctx.ok(null, '系统已经向您的邮箱发送了验证邮件, 请查收')
  }

  @Patch('/password')
  @UseBefore(authorization())
  async password (@Ctx() ctx: Context, @Body() body: PasswordUserBody) {
    await ctx.services.user.password(ctx.state.user.id, body.password, body.newPassword)
    ctx.ok(null, '密码修改成功')
  }

}
