import { describe, it, expect } from "vitest";
import { createMultiplier } from "../src/createMultiplierClosures";

describe("closure multiplier", () => {
  it("should create multiplier ", () => {
    const duplicar = createMultiplier(2);
    const triplicar = createMultiplier(3);

    expect(duplicar(5)).toBe(10);
    expect(triplicar(4)).toBe(12);
  });
});
