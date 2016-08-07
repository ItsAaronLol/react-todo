var webpackConfig = require('./webpack.config.js');

module.exports = function(config){
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'], //use mocha framework that has describe and it frameworks
    files: [
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/foundation-sites/dist/foundation.min.js',
    'app/tests/**/*.test.jsx'
    ], //files that we want to have executed (all files in tests folder ending in .test.jsx
    preprocessors: {
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap'] //for each of these files, also run two things (webpack and sourcemap)
    },
    reporters: ['mocha'], //shows you which tests pass and which tests fail
    client: {
      mocha: {
        timeout: '5000' //after 5 seconds, if test isn't finished, just cancel the test
      }
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
};
