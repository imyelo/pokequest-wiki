import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import './theme.css'

let stack = 0

function start () {
  ++stack
  NProgress.start()
}

function done () {
  if (--stack <= 0) {
    stack = 0
    NProgress.done()
  }
}

export function loading () {
  let once = 1
  start()
  return () => {
    if (once === 1) {
      once = null
      done()
    }
  }
}

loading.wrap = function (callback) {
  let loaded = loading()
  return function loadedAndCallback () {
    loaded()
    return callback.apply(this, arguments)
  }.bind(this)
}

loading.use = function () {
  return Promise.resolve(loading()).disposer((loaded) => loaded())
}
