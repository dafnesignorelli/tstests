// arrange - describe
// action - it
// assert - expect

// () => {} - anonimos function;

import { describe, it, expect } from "vitest";
import { isPalindrome } from "../src/palindrome";

describe("Palindrome string", () => {
  it("should identify Palindrome string", () => {
    const str = "abba";

    expect(isPalindrome(str)).toBe(true)
    expect(isPalindrome(str)).toBeTruthy()
  });

  it("should identify e no Palindrome string", () => {
    const str = "hello";

    expect(isPalindrome(str)).toBe(false)
    expect(isPalindrome(str)).toBeFalsy()
  });
});
