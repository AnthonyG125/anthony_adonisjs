import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Film extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public titre: string

  @column()
  public type: string


  @column()
  public annee: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
