const fetch = (...args) => require("node-fetch")(...args);
const fetchJson = (...args) => fetch(...args).then(res => res.json());
const fetchText = (...args) => fetch(...args).then(res => res.text());

const lodashUtils = ["get", "split"];

const lodashMethods = lodashUtils.reduce(
  (acc, methodName) => ({
    ...acc,
    [methodName]: (...args) => require(`lodash/fp/${methodName}`)(...args)
  }),
  {}
);

module.exports = () => ({
  fetch,
  fetchJson,
  fetchText,
  ...lodashMethods
});
