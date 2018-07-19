import 'normalize.css'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router'
import Screen from './components/layout/Screen.vue'
import Main from './components/layout/Main.vue'
import Navbar from './components/layout/Navbar.vue'

Vue.config.productionTip = false

Vue.component('Screen', Screen)
Vue.component('Main', Main)
Vue.component('Navbar', Navbar)

Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
