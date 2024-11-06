import { describe, it, expect } from "vitest";
import { flatArray } from "../src/flatten";

describe("flat", () => {
  it("should flatten deeply nesyed array", () => {
    let arr = [1, [2, [3, [4, 5]]]];
    let expectedArr = [1,2,3,4,5]

    expect(flatArray(arr)).toEqual(expectedArr);
  });
});
