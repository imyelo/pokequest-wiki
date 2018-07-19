import mixin from './mixin'

const AnchorPlugin = {
  install (Vue) {
    Vue.mixin(mixin)
  },
}

export default AnchorPlugin
