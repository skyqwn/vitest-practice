import { describe, test, expect } from "vitest";
import { waitForcheckNumberIsOne } from "./wait-for-check-number-is-one";

describe("waitForCheckNumberIsOne", () => {
  test("not a number !!> false", async () => {
    const target = "";

    await expect(() => waitForcheckNumberIsOne(target)).rejects.toThrow();
  });
});
