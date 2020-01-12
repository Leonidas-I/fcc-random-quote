module.exports = {
  entry: {
    main: './src/script.js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](jquery|popper.js)[\\/]/,
          name: 'vendor',
          chunks: 'all'
        },
        common: {
          test: /[\\/]node_modules[\\/](bootstrap|@fortawesome)[\\/]/,
          name: 'common',
          chunks: 'all'
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    },
    runtimeChunk: true
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
};