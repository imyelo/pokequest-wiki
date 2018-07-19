import 'normalize.css'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueAnalytics from 'vue-analytics'
import AnchorPlugin from './plugins/anchor'
import App from './App.vue'
import router from './router'
import Screen from './components/layout/Screen.vue'
import Main from './components/layout/Main.vue'
import Navbar from './components/layout/Navbar.vue'

const GA_ID = process.env.VUE_APP_GA_ID

Vue.config.productionTip = false

Vue.component('Screen', Screen)
Vue.component('Main', Main)
Vue.component('Navbar', Navbar)

Vue.use(VueRouter)
if (GA_ID) {
  Vue.use(VueAnalytics, {
    id: GA_ID,
    router,
  })
}
Vue.use(AnchorPlugin)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
