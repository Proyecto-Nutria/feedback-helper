const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack");
const outputDir = path.join(__dirname, "dist")
const publicFolder = path.join(__dirname, "public")
const API_URL = "https://proyecto-nutria.herokuapp.com";
// const API_URL = "http://192.168.100.232:4000/";
const PORT = 8000;
const URL = `http://localhost:${PORT}/`;
const subdomain = 'feedback-helper';

const pathRewrite = {}
pathRewrite['^/feedback-helper'] = '';
const proxy = {}
proxy[`/${subdomain}/*`] = {
  target: URL,
  pathRewrite: pathRewrite
};

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
      template: path.join(publicFolder, "index.html"),
      inject: false
    }),
    new webpack.DefinePlugin({
      'process.env.URL': JSON.stringify(`${URL}${subdomain}`),
      'process.env.API_URL': JSON.stringify(API_URL)
    })
  ],
  devServer: {
    publicPath: `/${subdomain}`,
    compress: true,
    contentBase: publicFolder,
    port: PORT,
    historyApiFallback: true,
    host: "0.0.0.0",
    proxy: proxy
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