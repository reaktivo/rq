const execute = require("./execute");
const readInput = require("./readInput");
const transform = require("./transform");
const writeOutput = require("./writeOutput");
const asyncFlow = require("./asyncFlow");

const inject = {
  execute,
  writeOutput
};

module.exports = (input = readInput(), { execute, writeOutput } = inject) =>
  asyncFlow(execute, writeOutput)(input);
