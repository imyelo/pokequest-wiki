import Router from 'vue-router'
import PokemonList from './pages/PokemonList.vue'
import PokemonDetail from './pages/PokemonDetail.vue'
import DishDetail from './pages/DishDetail.vue'

const routes = [
  { path: '/pokemons', component: PokemonList },
  { path: '/pokemons/:id', component: PokemonDetail },
  { path: '/dishes/:id', component: DishDetail },
  { path: '*', redirect: '/pokemons' },
]

const router = new Router({
  routes,
})

export default router
