const path = require("path");
module.exports = {
    entry: "./src/script.js",
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
    },
    performance: {
        hints: false
      },
    mode: 'development',
    target: 'web',
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 9000,
    },
  };