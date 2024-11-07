// Callback example Of Async. Task

import { describe, it, expect, vi } from "vitest";
import { heavyTask } from "../src/asyncTask";

describe("Callback", () => {
  it("should simulates a time-consuming task", () => {

    vi.useFakeTimers();

    function done() {
      console.log("Done!");
    }

    heavyTask(done);
    vi.runAllTimers();

    expect(done);
  });
});
