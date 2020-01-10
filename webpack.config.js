const webpack = require('webpack')
const path = require('path')
const fs = require('fs')
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: 'development',
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, 'dist')   
  },
  module: {
    rules: [{
      test: /\.(png|jpg)$/,
      use: [
        'file-loader'
      ]
    }]
  },
  plugins: [   
    new webpack.DefinePlugin({
      DEPLOYED_ADDRESS: JSON.stringify(fs.readFileSync('deployedAddress', 'utf8').replace(/\n|\r/g, "")),
      DEPLOYED_ABI: fs.existsSync('deployedABI') && fs.readFileSync('deployedABI', 'utf8'),
    }),
    new CopyWebpackPlugin([{ from: "./src/index.html", to: "index.html"}]),
    new CopyWebpackPlugin([{ from: "./src/AllProjects.html", to: "AllProjects.html"}]),
    new CopyWebpackPlugin([{ from: "./src/investment.html", to: "investment.html"}]),
    new CopyWebpackPlugin([{ from: "./src/mypage.html", to: "mypage.html"}]),
    new CopyWebpackPlugin([{ from: "./src/myproject.html", to: "myproject.html"}]),
    new CopyWebpackPlugin([{ from: "./src/PopulerProjects.html", to: "PopulerProjects.html"}]),
    new CopyWebpackPlugin([{ from: "./src/projectcommunity.html", to: "projectcommunity.html"}]),
    new CopyWebpackPlugin([{ from: "./src/projectinform.html", to: "projectinform.html"}]),
    new CopyWebpackPlugin([{ from: "./src/projectstory.html", to: "projectstory.html"}]),
    new CopyWebpackPlugin([{ from: "./src/img/logo.png", to: "logo.png"}]),
    new CopyWebpackPlugin([{ from: "./src/img/project01.jpg", to: "project01.jpg"}]),
    new CopyWebpackPlugin([{ from: "./src/img/project02.jpg", to: "project02.jpg"}]),
    new CopyWebpackPlugin([{ from: "./src/img/project03.jpg", to: "project03.jpg"}]),
    new CopyWebpackPlugin([{ from: "./src/img/project04.jpg", to: "project04.jpg"}]),
    new CopyWebpackPlugin([{ from: "./src/img/project05.jpg", to: "project05.jpg"}]),
    new CopyWebpackPlugin([{ from: "./src/img/project06.jpg", to: "project06.jpg"}]),
    new CopyWebpackPlugin([{ from: "./src/img/project07.jpg", to: "project07.jpg"}]),
    new CopyWebpackPlugin([{ from: "./src/img/project08.jpg", to: "project08.jpg"}]),
    new CopyWebpackPlugin([{ from: "./src/img/project09.jpg", to: "project09.jpg"}])
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    open: true}
}