// 1) Webpack needs to know the starting point of your application, or your root JavaScript file.
// 2) Webpack needs to know which transformations to make on your code.
// 3) Webpack needs to know to which location it should save the new transformed code.
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  output: {
    filename: 'index_bundle.js',
    path: __dirname + "/dist"
  },
  plugins: [HTMLWebpackPluginConfig]
}
