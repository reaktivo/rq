const { test, equal } = require("tap");
const execute = require("./execute");

test("the string passed is and executed in sequence", async () => {
  equal(await execute("[1 + 1, x => x + x]"), 4);
});

test("a single expression also works", async () => {
  equal(await execute("[1 + 1]"), 2);
});
