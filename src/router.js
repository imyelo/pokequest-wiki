import Router from 'vue-router'
import PokemonList from './pages/PokemonList.vue'
import PokemonDetail from './pages/PokemonDetail.vue'

const routes = [
  { path: '/pokemons', component: PokemonList },
  { path: '/pokemons/:id', component: PokemonDetail },
  { path: '*', redirect: '/pokemons' },
]

const router = new Router({
  routes,
})

export default router
