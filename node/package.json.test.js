// package.test.js
import { describe, it, expect } from "vitest";
import { readFile } from "node:fs/promises";

describe("package.json integrity", () => {
  it("should have type 'module' and author 'Augment Plus'", async () => {
    const data = await readFile(new URL("../../../dev/node/express/package.json", import.meta.url), "utf-8");
    const pkg = JSON.parse(data);

    expect(pkg.type).toBe("module");
    expect(pkg.author).toBe("Augment Plus");
  });
});