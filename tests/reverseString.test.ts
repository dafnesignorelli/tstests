import { describe, it, expect } from "vitest";
import { reverseString } from "../src/reverseString";

describe("reverse", () => {
  it("should reverse string", () => {
    let text = "Ola pessoal";
    let expectedText = "pessoalOla";
    expect(reverseString(text)).toEqual(expectedText);
  });
});
