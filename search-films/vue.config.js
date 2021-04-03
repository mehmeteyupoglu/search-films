const Dotenv = require("dotenv-webpack");

module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    plugins: [new Dotenv()],
  },
  publicPath: process.env.NODE_ENV === "production" ? "/search-films/" : "/",
};
