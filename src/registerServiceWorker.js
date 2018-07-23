/* eslint-disable no-console */

import { register } from 'register-service-worker'
import banner from './libraries/notification/banner'
import snackbar from './libraries/notification/snackbar'

if (process.env.NODE_ENV === 'production') {
  const reload = (() => {
    let preventDevToolsReloadLoop
    return () => {
      if (preventDevToolsReloadLoop) {
        return
      }
      preventDevToolsReloadLoop = true
      console.log('Controller loaded')
      window.location.reload()
    }
  })()
  navigator.serviceWorker.addEventListener('controllerchange', reload)

  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered () {
      console.log('Service worker has been registered.')
    },
    cached () {
      console.log('Content has been cached for offline use.')
      snackbar({ text: 'PokeQuest Wiki is ready for offline use.' })
    },
    updated (registration) {
      console.log('New content is available; please refresh.')
      banner({
        text: 'New version of PokeQuest Wiki is available!',
        actions: [
          {
            text: 'Try it now!',
            handler () {
              if (!registration.waiting) {
                return
              }
              registration.waiting.postMessage('skipWaiting')
            },
          },
          {
            text: 'Dismiss',
          },
        ],
      })
    },
    offline () {
      let MESSAGE = 'No internet connection found. App is running in offline mode.'
      console.log(MESSAGE)
      snackbar({ text: MESSAGE })
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    },
  })
}
