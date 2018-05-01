const readInput = require("./readInput");
const asyncFlow = require("./asyncFlow");

const createSequence = () => [
  require("./transform"),
  require("./execute"),
  require("./writeOutput")
];

module.exports = (input = readInput(), sequence = createSequence()) =>
  asyncFlow(...sequence)(input);
