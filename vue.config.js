module.exports = {
  chainWebpack (config) {
    let images = config.module.rule('images')

    images.uses.clear()
    images
      .use('file-loader')
        .loader('file-loader')
        .options(config.module.rule('svg').use('file-loader').get('options'))
  },
}
