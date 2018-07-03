import Router from 'vue-router'
import PokemonList from './pages/PokemonList.vue'

const routes = [
  { path: '/', component: PokemonList },
]

const router = new Router({
  routes,
})

export default router
