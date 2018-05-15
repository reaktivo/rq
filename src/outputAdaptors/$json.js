const stringify = require("stringify-object");
const { pipe } = require("rxjs"); // 212k
const { map, mergeMap, toArray } = require("rxjs/operators"); // 140k

const options = {
  indent: "  ",
  singleQuotes: false
};

module.exports = map(obj => stringify(obj, options));
