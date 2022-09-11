// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";
import Film from "App/Models/Film";

//----- Controller des films -------//
export default class FilmsController {

  //----- Liste des films -----//
  async index ({ view, auth }: HttpContextContract) {
    const films = await Film.all()

    await auth.use('web').authenticate()

    // ✅ Request authenticated
    console.log(auth.user!)

    return view.render('film/index', {
      films
    })
  }

  //---- Affichage du film ----//
  async show ({ params, view }: HttpContextContract) {
    const film = await Film.findOrFail(params.id)

    return view.render('film/detail', {
      film
    })
  }

  //---- Creation du film -----//
  async create ({ view }) {
    return view.render('film/add')
  }


  //----- Sauvegarde du film ----//
  async store ({ request, response }) {
    const film = new Film()

    film.titre = request.input('titre'),
      film.type = request.input('type'),
      film.annee = request.input('annee'),

      await film.save()

    return response.redirect().toRoute('home')
  }

  //----- Modification du film -----//
  async edit ({ params, view }) {
    const film = await Film.find(params.id)


    return view.render('film/update', {
      film
    })
  }

  //------ Ajout de la modification -----//
  async update ({ params, request, response }) {
    const film = await Film.findOrFail(params.id)

    film.titre = request.input('titre'),
      film.type = request.input('type'),
      film.annee = request.input('annee'),
      await film.save()

    return response.redirect().toRoute('home')
  }

  //------ Suppression -----//
  async destroy ({ params, response }: HttpContextContract) {
    const film = await Film.findOrFail(params.id)
    await film.delete()

    return response.redirect().toRoute('home')
  }
}
