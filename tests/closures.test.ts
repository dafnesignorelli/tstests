import { describe, it, expect } from "vitest";
import { getId } from "../src/closures";

describe("closure", () => {
  it("should create unique IDs", () => {
    const generateId = getId(); // Call getId first to initialize

    const u1 = { id: generateId(), name: "Bold" };
    const u2 = { id: generateId(), name: "Adebanji" };
    const u3 = { id: generateId(), name: "Tarcisio" };

    expect(u1.id).toBe(1); // Expect u1.id to be 1 more than firstId
    expect(u2.id).toBe(2); // Expect u2.id to be 2 more than firstId
    expect(u3.id).toBe(3); // Expect u3.id to be 3 more than firstId
  });
});