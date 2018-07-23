/* eslint-disable no-console */

import { register } from 'register-service-worker'
import banner from './libraries/notification/banner'
import snackbar from './libraries/notification/snackbar'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    cached () {
      console.log('Content has been cached for offline use.')
      snackbar({ text: 'Caches are ready! You can use PokeQuest Wiki offline from now on.' })
    },
    updated () {
      console.log('New content is available; please refresh.')
      banner({
        text: 'The new version of PokeQuest Wiki is available!',
        actions: [
          {
            text: 'Dismiss',
          },
          {
            text: 'Try it now!',
            handler () {
              window.reload()
            },
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
