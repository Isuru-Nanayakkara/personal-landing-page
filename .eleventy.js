module.exports = function (config) {
  // Input Directory : src Output directory: _site

  config.addPassthroughCopy("src/img/");

  return {
    dir: { input: "src", output: "_site" },
  };
};
