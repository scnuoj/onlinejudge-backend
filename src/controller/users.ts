import { Controller, Ctx, Param, QueryParam, Body, Get, Post } from 'routing-controllers'
import { Context } from 'koa'
import * as UserService from '../service/users'

@Controller('/v1/users')
export class UsersController {
  @Get('/')
  async index (@Ctx() ctx: Context) {
    const user = await UserService.show(ctx.state.user.id)
    ctx.status = 200
    ctx.body = user
  }

  @Post('/register')
  async register (
    @Ctx() ctx: Context, @Body('name') name: string, 
    @Body('email') email: string, @Body('password') password: string
  ) {
    const user = await UserService.register(name, email, password)
    ctx.status = 200
    ctx.body = user
  }

  @Post('/login')
  async login (
    @Ctx() ctx: Context, @Body('name') name: string, 
    @Body('password') password: string
  ) {
    const user = await UserService.login(name, password)
    ctx.status = 200
    ctx.body = user
  }
}
