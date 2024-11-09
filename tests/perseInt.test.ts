import { describe, it, expect } from "vitest";
import { perseInt } from "../src/parseInt";

describe("parseInt", () => {
  it("should return Nan error", () => {
    const listString = ["1", "5", "11"];
    const expectListString = [1, NaN, 3];
    expect(perseInt(listString)).toEqual(expectListString);
  });
});

describe("parseInt2", () => {
  it("should return Nan error", () => {
    const listString = ["1", "2", "3"];
    const expectListString = [1, NaN, NaN];
    expect(perseInt(listString)).toEqual(expectListString);
  });
});

describe("parseInt3", () => {
  it("should return Nan error", () => {
    const listString = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
    ];
    const expectListString = [
      1,
      NaN,
      NaN,
      NaN,
      NaN,
      NaN,
      NaN,
      NaN,
      NaN,
      9,
      11,
      13,
      15,
      17,
      19,
    ];
    expect(perseInt(listString)).toEqual(expectListString);
  });
});

// It’s calculated like below:
/**
parseInt('10', 9) = 0 * Math.pow(9, 0) + 1 * Math.pow(9, 1) = 9
parseInt('11', 10) = 1* Math.pow(10, 0) + 1 * Math.pow(10, 1) = 11
parseInt('12', 11) = 2* Math.pow(11, 0) + 1* Math.pow(11, 1) = 13
parseInt('13', 12) = 3* Math.pow(12, 0) + 1* Math.pow(12, 1) = 15
parseInt('14', 13) = 4* Math.pow(13, 0) + 1* Math.pow(13, 1) = 17
parseInt('15', 14) = 5* Math.pow(14, 0) + 1* Math.pow(14, 1) = 19 
 */

describe("parseInt4", () => {
  it("should return Nan error", () => {
    const listString = ["10", "10", "10", "10"];
    const expectListString = [10, NaN, 2, 3];
    expect(perseInt(listString)).toEqual(expectListString);
  });
});
