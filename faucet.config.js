module.exports = {
  sass: [{
    source: "./src/scss/app.scss",
    target: "./dist/app.css"
  }],
  nunjucks: [{
    source: "./src/html/index.njk",
    target: "./dist/index.html"
  }],
  static: [{
    source: "./src/images",
    target: "./dist/images",
  }],
  manifest: {
    target: "./dist/manifest.json",
    webRoot: "./dist"
  },
  watchDirs: ["./src"]
};
