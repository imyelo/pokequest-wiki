import querystring from 'querystring'
import { loading } from '../libraries/nprogress'

const qs = querystring.parse(window.location.search.slice(1))

const isDebug = 'debug' in qs

if (isDebug) {
  require('bundle-loader!eruda')(loading.wrap((eruda) => eruda.init()))
}
