import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Film from "App/Models/Film";


//----- Ajout de données dans la base -----//
export default class extends BaseSeeder {
  public async run () {
    await Film.createMany([
      {
        titre: 'Lelika The Rock le film',
        type: 'Musculation',
        annee: "2022-01-01",
      },
      {
        titre: 'Akim le Spoited',
        type: 'Informatique',
        annee: "2022-08-02",
      },
      {
        titre: 'Brice le Papa de la classe',
        type: 'Badass',
        annee: "2022-05-11",
      },
    ])
  }
}

