// import { transform } from "babel-core";

// see https://babeljs.io/docs/usage/api/
const options = {
  ast: false,
  plugins: [],
  presets: ["env"]
};

export default src => transform(src);
