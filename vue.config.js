module.exports = {
  chainWebpack (config) {
    let images = config.module.rule('images')

    images.uses.clear()
    images
      .use('file-loader')
        .loader('file-loader')
        .options(config.module.rule('svg').use('file-loader').get('options'))
  },

  pwa: {
    name: 'PokeQuest Wiki',
    themeColor: '#f2e3c5',
    msTileColor: '#f2e3c5',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
      msTileImage: 'img/icons/mstile-144x144.png',
    },
  }
}
