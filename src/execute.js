const saferEval = require("safer-eval");
const createContext = require("./createContext");
const streamToObservable = require("./streamToObservable");

// TODO: Decide if we should default to use the $json adapter
const $json = require("./inputAdaptors/$json");
const $outputJson = require("./outputAdaptors/$json");

module.exports = async str => {
  const expressions = saferEval(str, createContext());
  const stdin = streamToObservable();
  return stdin.pipe($json, ...expressions, $outputJson);
};
