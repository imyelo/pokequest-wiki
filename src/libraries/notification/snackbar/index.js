import Vue from 'vue'
import Snackbars from './Snackbars.vue'

let container = document.createElement('div')
document.body.appendChild(container)

let vm = new Vue({
  el: container,
  ...Snackbars,
})

function snackbar ({ text, action, duration = 5000 }) {
  if (action) {
    action = {
      ...action,
      handler: action.handler || function () {},
    }
  }
  let item = { text, action, duration }
  vm.snackbars.push(item)
  if (duration) {
    setTimeout(() => {
      let index = vm.snackbars.indexOf(item)
      if (~index) {
        vm.remove(index)
      }
    }, duration)
  }
}

export default snackbar
