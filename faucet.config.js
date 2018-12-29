module.exports = {
  sass: [{
    source: "./src/scss/app.scss",
    target: "./public/app.css"
  }],
  static: [
    {
      source: "./src/images",
      target: "./public/images",
    },
    {
      source: "./src/html",
      target: "./public",
    }
  ],
  watchDirs: ["./src"]
};
