const saferEval = require("safer-eval");
const createContext = require("./createContext");

module.exports = async str => {
  const expressions = saferEval(str, createContext());
  return expressions.reduce(async (current, next) => next(await current));
};
