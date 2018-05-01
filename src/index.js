const execute = require("./execute");
const readInput = require("./readInput");
const transform = require("./transform");
const writeOutput = require("./writeOutput");
const asyncFlow = require("./asyncFlow");

module.exports = (input = readInput()) =>
  asyncFlow(execute, writeOutput)(input);
