import { IsEmail, IsString, Length } from 'class-validator'
import { Body, BodyParam, Controller, Ctx, Get, Param, Post, QueryParam,UseBefore } from 'routing-controllers'
import { Context } from '..'
import authorization from '../middleware/authorization'
import * as UserService from '../service/users'

export class RegisterUserBody {
  @IsEmail() email: string
  @Length(4, 8) name: string
  @Length(6, 18) password: string
}

export class LoginUserBody {
  @IsString() name: string
  @IsEmail() email: string
  @Length(6, 18) password: string
}

export class ForgetUserBody {
  @IsEmail() email: string
}

@Controller('/v1/users')
export class UsersController {
  @Get('/')
  @UseBefore(authorization())
  async index (@Ctx() ctx: Context) {
    const user = await ctx.services.users.show(ctx.state.user.id)
    ctx.ok(user)
  }

  @Post('/register')
  async register (@Ctx() ctx: Context, @Body() body: RegisterUserBody) {
    const user = await ctx.services.users.register(body.name, body.email, body.password)
    ctx.ok(user)
  }

  @Post('/login')
  async login (@Ctx() ctx: Context, @Body() body: LoginUserBody) {
    const user = await ctx.services.users.login(body.name,body.email, body.password)
    ctx.ok(user)
  }

  @Post('/forget')
  async forget (@Ctx() ctx: Context, @Body() body: ForgetUserBody) {
    const user = await ctx.services.users.forget(body.email)
    ctx.ok(null, '系统已经向您的邮箱发送了验证邮件, 请查收')
  }
}
