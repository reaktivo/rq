const { createReadStream } = require("fs");
const concat = require("concat-stream");

const encoding = "string";

module.exports = (stream = process.stdin) => {
  return new Promise((resolve, reject) => {
    stream.on("error", reject);
    stream.pipe(concat({ encoding }, resolve));
  });
};
