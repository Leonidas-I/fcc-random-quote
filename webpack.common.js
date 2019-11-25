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
        styles: {//why i comment out this but still purge unused bootstrap
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
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