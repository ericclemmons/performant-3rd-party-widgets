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

  module: {
    rules: [
      {
        include: path.resolve("./src"),
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            plugins: [
              "syntax-dynamic-import",
              "transform-object-rest-spread"
            ],
            presets: [
              [
                "env",
                {
                  targets: { browsers: "last 2 versions", node: "current" },
                  useBuiltIns: true
                }
              ],
              "react"
            ]
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
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development")
      }
    })
  ]
};