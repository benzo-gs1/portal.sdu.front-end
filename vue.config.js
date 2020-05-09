const path = require("path");

const SCSS_PATH = path.resolve(__dirname, "./src/styles/globals.scss");

module.exports = {
  outputDir: "./build",
  configureWebpack: {
    resolve: {
      alias: {
        globals: SCSS_PATH,
      },
    },
  },
};
