const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpackConfig = {
  entry: path.resolve(__dirname, "src", "index.js"),

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  module: {
    rules: [
      // js files
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      // css files
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      // images
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "My WebPack",
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],

  mode: "production",
};

module.exports = webpackConfig;
