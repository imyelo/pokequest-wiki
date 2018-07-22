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
  { path: '/pokemons', component: page('./PokemonList.vue') },
  { path: '/pokemons/:id', component: page('./PokemonDetail.vue') },
  { path: '/dishes/:id', component: page('./DishDetail.vue') },
  { path: '*', redirect: '/pokemons' },
]

const router = new Router({
  routes,
})

export default router
