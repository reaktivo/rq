/**
 * IMPORTANT:
 * We are loading the internal utils for now, since we don't want
 * to waste time requiring things we don't need, but this will
 * most definitely break eventually, when that time comes,
 * we will use the supported API:
 *
 * const { pipe } = require("rxjs"); // 212k
 * const { map, mergeMap, toArray } = require("rxjs/operators"); // 140k
 */

const { pipe } = require("rxjs"); // 212k
const { map, mergeMap, toArray } = require("rxjs/operators"); // 140k

// const pipe = require("rxjs/internal/util/pipe").pipe;
// const [map, mergeMap, toArray] = ["map", "mergeMap", "toArray"].map(
//   operator => require(`rxjs/internal/operators/${operator}`)[operator]
// );

module.exports = pipe(
  // We need to collect the stream chunks
  toArray(),
  // and join them together
  map(x => x.join("")),
  // after that, we can parse it at JSON
  map(x => JSON.parse(x)),
  // then we convert each item in the
  // json to an observable event
  mergeMap(x => [].concat(x))
);
