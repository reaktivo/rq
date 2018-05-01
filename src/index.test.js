const { test, equal } = require("tap");
const run = require(".");

test("run calls execute and writeToOutput", async () => {
  const identity = x => x;
  const execute = x => `executed ${x}`;
  const writeOutput = x => `wrote ${x}`;

  equal(
    await run("something", { execute, writeOutput }),
    "wrote executed something"
  );
});
