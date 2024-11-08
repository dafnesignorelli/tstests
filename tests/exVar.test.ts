import { describe, it, expect } from "vitest";
import { exVar, exLet, exConst,exConst2 } from "../src/diffvars";

describe("var", () => {
  it("should see all declarations of var", () => {
    expect(exVar());
    expect(exLet());
  });
});

describe("let", () => {
  it("should see all declarations of let", () => {
    expect(exLet());
  });
});

describe("const", () => {
  it("should see all declarations of const", () => {
    expect(exConst());
  });
});

describe("const2", () => {
  it("should see all declarations of const", () => {
    expect(exConst2());
  });
});
