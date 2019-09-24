const path = require('path');
const webpack = require('webpack');

const config = {
  //production|development|none
  mode: 'production',
  devtool: 'hidden-source-map',
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, './public/dist'),
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.jsx', '.js' ]
  },
  module: {
    rules: [
      // require packages @babel/core babel-loader @babel/preset-react
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    '@babel/preset-env',
                    [
                        '@babel/preset-react',
                        {development: process.env.NODE_ENV !== 'production'}
                    ]
                ]
            }
        }
      }
    ]
  },
  // require package webpack-dev-server
  devServer: {
    contentBase: "./public",
    host: '0.0.0.0',
  },
};

module.exports = config;
