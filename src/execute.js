const saferEval = require("safer-eval");
const createContext = require("./createContext");

module.exports = async str => {
  const [origin, ...expressions] = saferEval(str, createContext());
  if (expressions.length === 0) {
    return origin;
  }
  return expressions.reduce((acc, next) => Promise.resolve(next(acc)), origin);
};
