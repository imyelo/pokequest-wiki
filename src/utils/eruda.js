import querystring from 'querystring'
import { loading } from '../libraries/nprogress'

export const env = process.env.NODE_ENV
const qs = querystring.parse(window.location.search.slice(1))

const isDevelopment = env === 'development'

const isDebug = isDevelopment || ('debug' in qs)

if (isDebug) {
  require('bundle-loader!eruda')(loading.wrap((eruda) => eruda.init()))
}
