import { describe, it, expect } from "vitest";
import { randomNumbers } from "../src/randomNumbers";

describe("random", () => {
  it("should create a random of numbers", () => {
    expect(randomNumbers(10, 20)).greaterThanOrEqual(10).lessThanOrEqual(20);
  });
});
