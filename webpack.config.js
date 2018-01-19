const path = require('path');
var webpack = require('webpack');
module.exports = {

    //define entry point
    entry: './src/main.js',

    //defin output point
    output: {
        path: path.resolve(__dirname, 'public/js'),
       // filename: 'bundle.js',
       // publicPath: 'js'
       //path: __dirname + '/public/js',
      filename: 'bundle.js'
    },

     module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['stage-2','react','es2015']//some thing to add here 
                    }
                  
                }
            },
            {
              test    : /\.css$/,
              use     : [
                "style-loader",
                "css-loader"

              ]
            }
        ] //loaders
    },
    devtool:'source-map',
  //  devServer: {
  //   contentBase: './public',
  //   hot: true
  // },
  // plugins: [
  //   new webpack.optimize.OccurenceOrderPlugin(),
  //   new webpack.HotModuleReplacementPlugin(),
  //   new webpack.NoErrorsPlugin()
  // ],


};
