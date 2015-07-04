
module.exports = {

  entry: './docs/entry.js',

  output: {
    filename: 'bundle.js',
    publicPath: '/docs/',
    path: __dirname + '/docs'
  },

  module: {
    loaders: [
      { test: /(\.js$|\.jsx?$)/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader!cssnext-loader' }
    ]
  },

  cssnext: {
    features: {
      customProperties: {
        variables: {
          'font-family': '"SF UI Text", "Helvetica Neue", sans-serif',
          'bold-font-weight': 500,
          'heading-font-weight': 500,
        }
      }
    }
  }

}

