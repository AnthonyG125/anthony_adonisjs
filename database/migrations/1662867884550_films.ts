import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class FilmsSchema extends BaseSchema {
  protected tableName = 'films'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('titre')
      table.date('annee')
      table.string('type')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
