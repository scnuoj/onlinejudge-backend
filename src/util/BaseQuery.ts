import { IsIn, IsNumberString, IsString } from 'class-validator'

export class BaseQuery {
  @IsNumberString()
  public limit: string

  @IsNumberString()
  public offset: string

  @IsIn(['asc', 'desc'])
  public order: string

  @IsString()
  public sortby: string
}
