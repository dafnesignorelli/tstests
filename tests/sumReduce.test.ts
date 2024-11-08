import { describe, it, expect } from "vitest";
import { sumReduce } from "../src/sumReduce";

describe("reduce", () => {
  it("should some for calc al numbers", () => {
    const sum = [2, 4, 6, 8];
    const expectSum = 20;

    expect(sumReduce(sum)).toEqual(expectSum);
  });
});
