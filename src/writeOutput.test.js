const { test, equal } = require("tap");
const writeOutput = require("./writeOutput");

test("write to output", async () => {
  equal(await writeOutput("whatever", x => `did ${x}`), "did whatever");
});
