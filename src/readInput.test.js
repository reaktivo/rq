const { test, equal } = require("tap");
const readInput = require("./readInput");

test("reads the interesting parts of the process args", async () => {
  equal(
    await readInput(["node", "index.js", "something", "nice"]),
    "something nice"
  );
});
