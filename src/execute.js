const saferEval = require("safer-eval");
const createContext = require("./createContext");

module.exports = async str => saferEval(str, createContext());
