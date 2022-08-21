const path = require("path");

const webpackConfig = {
  entry: path.resolve(__dirname, "src", "index.js"),

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
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
    ],
  },

  mode: "production",
};

module.exports = webpackConfig;
