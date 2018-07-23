import Vue from 'vue'
import Banners from './Banners.vue'

let container = document.createElement('div')
document.body.appendChild(container)

let vm = new Vue({
  el: container,
  ...Banners,
})

function banner ({ text, actions }) {
  if (!actions || actions.length === 0) {
    actions = [{
      text: 'Dismiss',
    }]
  }
  actions = actions.map((action) => ({
    ...action,
    handler: action.handler || function () {},
  }))
  vm.banners.push({ text, actions })
}

export default banner
