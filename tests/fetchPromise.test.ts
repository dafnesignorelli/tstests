import { describe, it, expect, vi } from "vitest";
import { fetchData } from "../src/promise";

describe("fetch", () => {
  it("should call promise", () => {
    vi.useFakeTimers();

    let promise = fetchData();

    vi.runAllTimers();

    expect(promise).resolves.toBeDefined();
  });
});
