// const { transform } = require("babel-core");

// see https://babeljs.io/docs/usage/api/
const options = {
  ast: false,
  plugins: [],
  presets: ["env"]
};

module.exports = src => transform(src);
