const LiveReloadPlugin = require('webpack-livereload-plugin');
const webpack = require('webpack');
const path = require('path');
module.exports={
    entry: './index.js',
    output: {
        filename: 'bundle.js',
    },
    performance: {
      hints: false
    },
    devServer:{
        index: 'index.html',
    },
    watch: true,
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "sass-loader",
        options: {
          includePaths: []
        }
      }]
    }, {
      test: /\.css$/,
      use: ["style-loader", "css-loader", "postcss-loader"]
    }, {
      test: /\.(gif|svg|jpg|png)$/,
      loader: "file-loader",
    }, {
    test: /\.(eot|svg|ttf|otf|woff)$/,
    use: [{
        loader: 'file-loader',
        options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
        }
    }]
}]
  },
  plugins: [
    new LiveReloadPlugin({}),
    new webpack.WatchIgnorePlugin([
      path.join(__dirname, "node_modules")
    ]),
  ]
}