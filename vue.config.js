module.exports = {
  
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  transpileDependencies: [
    'quasar'
  ],
  configureWebpack: {
    module: {
      rules: [
        // Add your module rules here
        {
          test: /\.(jpg|jpe?g|gif|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'images/',
              },
            },
          ],
        },
      ],
    },
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Portfolio/'
    : '/'
  
}
