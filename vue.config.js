const CACHEABLE_DIRECTORY = 'static'

module.exports = {
  assetsDir: CACHEABLE_DIRECTORY, // cacheable dir

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
      favicon32: `${CACHEABLE_DIRECTORY}/img/icons/favicon-32x32.png`,
      favicon16: `${CACHEABLE_DIRECTORY}/img/icons/favicon-16x16.png`,
      appleTouchIcon: `${CACHEABLE_DIRECTORY}/img/icons/apple-touch-icon-152x152.png`,
      msTileImage: `${CACHEABLE_DIRECTORY}/img/icons/mstile-144x144.png`,
    },
    workboxOptions: {
      include: [/^static\/.*$/],
      importWorkboxFrom: 'local',
      importsDirectory: CACHEABLE_DIRECTORY,
    },
  }
}
