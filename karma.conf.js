// karma.conf.js
// Karma configuration
module.exports = function(config) {
  config.set({

    frameworks: ['jasmine'],

    // ... normal karma configuration
    files: [
      // all files ending in "_test"
      {pattern: 'src/*.spec.ts', watched: false}
      // each file acts as entry point for the webpack configuration
    ],

    mime: {
      'text/x-typescript': ['ts','tsx']
    },

    preprocessors: {
      // add webpack as preprocessor
      'src/*.spec.ts': ['webpack', 'sourcemap']
    },

    plugins: [
      require('karma-webpack'),
      require('karma-sourcemap-loader'),
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter')
    ],

    browsers: ['Chrome'],

    reporters: ['kjhtml'],

    webpack: {
      // karma watches the test entry points
      // (you don't need to specify the entry option)
      // webpack watches dependencies

      // webpack configuration
      module: {
          rules: [
              {
                  test: /\.tsx?$/,
                  use: 'ts-loader',
                  exclude: /node_modules/
              }
          ],
      },
      devtool: 'inline-source-map',
    },

    webpackMiddleware: {
        // webpack-dev-middleware configuration
        // i. e.
        stats: 'errors-only'
    }
  });
};