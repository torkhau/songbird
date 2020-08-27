const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: [
          "@babel/env",
          {
            'plugins': ['@babel/plugin-proposal-class-properties']
          }
        ] 
        }
      },
      {
        test: /\.css$/,
        use: [
          require.resolve("style-loader"), 
          {
            loader: require.resolve("css-loader"),
            options: {
              importLoaders: 1,
              modules: {
              localIdentName: '[name]__[local]__[hash:base64:5]'
              }
            }
          }
        ],
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};