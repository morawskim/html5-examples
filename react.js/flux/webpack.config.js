const path = require('path');
const webpack = require('webpack');

const config = {
  //production|development|none
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, './public/dist'),
    filename: '[name].bundle.js'
  },
  devtool: 'source-map',
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

/*
 * If bundling for production, disable devtool
 */
if (process.env.NODE_ENV === 'production') {
  config.devtool = false;
}

module.exports = config;
