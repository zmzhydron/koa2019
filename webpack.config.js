var path = require('path');
module.exports = {
  entry: ['./1.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'fuckyou.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
    ]
  }
}