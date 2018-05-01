const shouldTransform = require("./shouldTransform");

// see https://babeljs.io/docs/usage/api/
const options = {
  ast: false,
  plugins: [],
  presets: ["env"]
};

/**
 *
 * Although it's not being done right now,
 * we eventually would like to transform
 * the source passed with Babel, since this
 * carries a small overhead, the exported
 * function in this file does a simple check
 * to see if a transformation is required
 *
 */

const babel = src => {
  if (shouldTransform(src)) {
    // requiring conditionally adds a
    // small performance boost
    const transform = require("babel-core");
    return transform(src, options);
  }
  return src;
};

const wrapInArray = src => `[${src}]`;

module.exports = src => {
  return babel(wrapInArray(src));
};
