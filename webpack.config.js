const htmlPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    clean: true,
  },

  plugins: [
    new htmlPlugin({
      template: "./index.html",
    }),
  ],
};
