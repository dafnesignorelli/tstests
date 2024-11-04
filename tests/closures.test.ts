import { describe, it, expect } from "vitest";
import { getId } from "../src/closures";

describe("closure", () => {
  it("should identify Palindrome string", () => {
    const u1 = { id: getId(), name: "Bold" };
    const u2 = { id: getId(), name: "Adebanji" };
    const u3 = { id: getId(), name: "Tarcisio" };

    expect(u1.id).toBe(1);
    expect(u2.id).toBe(2);
    expect(u3.id).toBe(3);
  });
});
