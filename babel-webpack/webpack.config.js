const path = require('path');

module.exports = {
  entry: './front/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devtool: 'source-map'
};
