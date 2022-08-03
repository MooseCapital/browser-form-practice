const path = require('path');

// const HtmlWebpackPlugin = require('html-webpack-plugin'); to generate index file auto links js to it

module.exports = {
  entry: {
    index: './src/index.js',
  },
  devServer: { //
    static: './dist',
  },
  devtool: 'inline-source-map', // shows which js file an error came from in console when importing
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    // clean: true,  //deletes all unused files in /dist folder, since we don't generate index with plugin, it deletes it
    publicPath: '/', // need for devserver live reloader
  },
  mode: 'development',

  /* plugins: [
        new HtmlWebpackPlugin({  //generates the index.html to auto add multiple js script tags
            title: 'Development',
        }),
    ], */

  /* optimization: {
        runtimeChunk: 'single',  //we need this because we have multiple entry points, 2 script tags instead of 1 bundle.js
    }, */
};
