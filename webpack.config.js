var path = require('path');

module.exports = {
  resolve: {
    alias: {
      vue: 'vue/dist/vue.min.js',
    },
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env'],
          },
        },
      },
    ],
  },
};
