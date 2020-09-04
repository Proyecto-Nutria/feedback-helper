const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const outputDir = path.join(__dirname, ".")

module.exports = {
  entry: "./src/Index.bs.js",
  mode: "development",
  devtool: "source-map",
  output: {
    path: outputDir,
    filename: "bundle/index.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      inject: false
    })
  ],
  devServer: {
    compress: true,
    contentBase: outputDir,
    port: process.env.PORT || 8000,
    historyApiFallback: true,
    host: "0.0.0.0"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
}