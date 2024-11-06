import { describe, it, expect } from "vitest";
import { remove } from "../src/removeDuplicates";

describe("remove", () => {
  it("should remove duplicates numbers", () => {
    let numbers = [1, 4, 1, 7, 4, 5, 3, 8];
    let expectedNumbers = [1, 4, 7, 5, 3, 8];

    expect(remove(numbers)).toEqual(expectedNumbers);
  });
});
