const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const paths = {
  DIST: path.resolve(__dirname, 'public/static'),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src'),
};

const plugins = []

module.exports = {
  mode: 'development',
  entry: path.join(paths.JS, 'index.js'),
  output: {
    path: paths.DIST,
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(scss|css)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: plugins,
};
