
module.exports = function (config) {
  config.set({
    browsers: [
      // 'Chrome',
      'Firefox'
    ],

    files: [
      'index.js'
    ],

    frameworks: [ 'chai', 'mocha' ],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-chai',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-webpack',
    ],

    preprocessors: {
      'index.js': [
        'webpack'
      ]
    },
    reporters: [
      'mocha'
    ],
    singleRun: true,

    webpack: {
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel'
          }
        ],
      },
      resolve: {
        extensions: ['', '.js', '.jsx']
      }
    },

    webpackMiddleware: {
      noInfo: true,
    }

  })
}

