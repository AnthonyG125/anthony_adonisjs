/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'FilmsController.index').as('home')
Route.get('/sante', 'HealthChecksController.health').as('sante')
Route.get('/register', 'AuthController.registerShow').as('register')
Route.post('/register', 'AuthController.register').as('auth.register')
Route.get('/login', 'AuthController.loginShow').as('login')
Route.post('/login', 'AuthController.login').as('auth.login')
Route.get('/logout', 'AuthController.logout').as('logout')

//------- Route des films ------//
Route.group(() => {
  Route.group(() => {
    Route.get('/create', 'FilmsController.create').as('film.create')
    Route.post('/store', 'FilmsController.store').as('film.store')
    Route.get('/edit/:id/', 'FilmsController.edit').as('film.edit')
    Route.post('/update/:id/', 'FilmsController.update').as('film.update')
    Route.get('/delete/:id/', 'FilmsController.destroy').as('film.destroy')
}).middleware('auth:web')
  Route.get('/show/:id/', 'FilmsController.show').as('film.detail')
}).prefix('/film')



