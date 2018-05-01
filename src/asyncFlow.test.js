const { test, equal } = require("tap");
const asyncFlow = require("./asyncFlow");

test("composition from left to right", async () => {
  const a = x => x * x;
  const b = x => x + x;
  const c = x => x / 3;
  equal(await asyncFlow(a, b, c)(3), 6);
});

test("async composition from left to right", async () => {
  const a = async x => x * x;
  const b = async x => x / 3;
  equal(await asyncFlow(a, b)(6), 12);
});
