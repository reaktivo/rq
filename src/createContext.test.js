const { test, equal } = require("tap");
const createContext = require("./createContext");

test("the created context includes fetch", async () => {
  equal(typeof createContext().fetch, "function");
});
