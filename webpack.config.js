var CompressionPlugin = require("compression-webpack-plugin");
var path = require("path");
var webpack = require("webpack");

module.exports = {
  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    contentBase: "./public",
    compress: true,
    overlay: true,
    port: 3000
  },

  devtool: "cheap-module-source-map",

  entry: {
    widgets: ["babel-polyfill", "./src/widgets"]
  },

  resolve: {
    alias: {
      react: "preact-compat",
      "react-dom": "preact-compat"
    }
  },

  module: {
    rules: [
      {
        include: path.resolve("./src"),
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true
          }
        }
      }
    ]
  },

  output: {
    chunkFilename: "[id].[hash:5]-[chunkhash:7].js",
    devtoolModuleFilenameTemplate: "[absolute-resource-path]",
    filename: "[name].js",
    path: path.resolve("./build")
  },

  plugins: [
    new CompressionPlugin({
      test: /\.(html|js)$/
    })
  ]
};
