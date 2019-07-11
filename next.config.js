const withStylus = require('@zeit/next-stylus')
module.exports = withStylus({
    webpack: function (config) {
        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf)$/,
            use: {
              loader: 'url-loader',
              options: {
                limit: false,
                name: '[name].[ext]'
              }
            }
          })
          config.module.rules.push({
            test: /\.(svg|png|jpg|gif)$/,
            use: {
              loader: 'url-loader',
              options: {
                limit: false,
                name: '[name].[ext]'
              }
            }
          })
        return config
      },
    exportPathMap: function() {
        return {
          '/': { page: '/' },
    }
    },
    assetPrefix: './',
})
