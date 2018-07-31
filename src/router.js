import Router from 'vue-router'
import { loading } from './libraries/nprogress'

const chunk = require.context('bundle-loader!./pages/', false, /\.vue$/)

function page (path) {
  return () => {
    let loaded = loading()
    return new Promise(function (resolve) {
      chunk(path)((bundle) => {
        loaded()
        resolve(bundle.default)
      })
    })
  }
}

const routes = [
  { path: '/pokemon', component: page('./PokemonList.vue') },
  { path: '/pokemon/:id', component: page('./PokemonDetail.vue') },
  { path: '/dishes', component: page('./DishesList.vue') },
  { path: '/dishes/:id', component: page('./DishDetail.vue') },
  { path: '/moves', component: page('./MovesList.vue') },
  { path: '/moves/:name', component: page('./MoveDetail.vue') },
  { path: '*', redirect: '/pokemon' },
]

const router = new Router({
  routes,
})

export default router
