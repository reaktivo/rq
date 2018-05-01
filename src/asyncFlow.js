/**
 *
 * Composes and awaits single-argument functions from left to right.
 * The leftmost function can take multiple arguments as it provides the
 * signature for the resulting composite function.
 *
 * For previous art, see
 * https://lodash.com/docs/4.17.10#flow
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from left to right and awaiting the result of each.
 *
 * For example, compose(f, g, h) is identical to doing
 * (...args) => h(await g(await f(...args))).
 */
module.exports = (...fns) =>
  fns.reduce((a, b) => async (...args) => b(await a(...args)));
