const path = require('path');
const webpack = require('webpack');

const config = {
  //production|development|none
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: {
    app: './src/js/app.js'
  },
  output: {
    path: path.resolve(__dirname, './public/dist'),
    filename: '[name].bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: [ '.css', '.tsx', '.ts', '.jsx', '.js' ]
  },
  module: {
    rules: [
      // require packages css-loader
      {
        test: /\.css$/i,
        include: path.join(__dirname, 'src', 'js'),
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: true,
                    sourceMap: process.env.NODE_ENV !== 'production',
                },
            }
        ]
      },
      // global CSS
      {
        test: /\.css$/i,
        include: path.join(__dirname, 'src', 'css'),
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: false,
                    sourceMap: process.env.NODE_ENV !== 'production',
                },
            }
        ]
      },
      // require packages @babel/core babel-loader @babel/preset-env
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src', 'js'),
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    '@babel/preset-env',
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
