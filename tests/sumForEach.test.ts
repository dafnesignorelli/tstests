import { describe, it, expect } from "vitest";
import { sumForEach } from "../src/sumForEach";

describe("forEach", () => {
  it("should sum al numbers with forEach", () => {
    const sumArray = [1, 3, 5, 7, 9];
    const expectSum = 50;

    expect(sumForEach(sumArray)).toEqual(expectSum);
  });
});
