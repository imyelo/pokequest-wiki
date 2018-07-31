/* eslint-disable no-console */

import { register } from 'register-service-worker'
import i18n from './languages'
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

  const askToUpdate = (waiting) => banner({
    text: i18n.t('messages.new-version-available'),
    actions: [
      {
        text: i18n.t('messages.try-it-now'),
        handler () {
          if (waiting.state !== 'installed') {
            return
          }
          waiting.postMessage('skipWaiting')
        },
      },
      {
        text: i18n.t('messages.dismiss'),
      },
    ],
  })

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('controllerchange', reload)
  }

  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered (registration) {
      console.log('Service worker has been registered.')
      if (registration && registration.waiting) {
        askToUpdate(registration.waiting)
      }
    },
    cached () {
      console.log('Content has been cached for offline use.')
      snackbar({ text: i18n.t('messages.ready-for-offline') })
    },
    updated (registration) {
      console.log('New content is available; please refresh.')
      if (registration && registration.waiting) {
        askToUpdate(registration.waiting)
      }
    },
    offline () {
      let MESSAGE = i18n.t('messages.no-internet-running-offline')
      console.log(MESSAGE)
      snackbar({ text: MESSAGE })
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    },
  })
}
