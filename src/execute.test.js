const { test, equal } = require("tap");
const execute = require("./execute");

test("the string passed is evaled", async () => {
  equal(await execute("1 + 1"), 2);
});
