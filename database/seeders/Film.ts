import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Film from "App/Models/Film";
import {DateTime} from "luxon";

//----- Ajout de données dans la base -----//
export default class extends BaseSeeder {
  public async run () {
    await Film.createMany([
      {
        titre: 'Lelika The Rock le film',
        type: 'Musculation',
        annee: DateTime.now(),
      },
      {
        titre: 'Akim le Spoited',
        type: 'Informatique',
        annee: DateTime.now(),
      },
      {
        titre: 'Brice le Papa de la classe',
        type: 'Badass',
        annee: DateTime.now(),
      },
    ])
  }
}

