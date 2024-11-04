import { debounce } from "../src/debounce";
import { vi, describe, it, expect } from "vitest";

describe("debounce", () => {
  it("should debounce the function call", () => {
    const delay = 1000;

    // Create a mock function
    const mockFn = vi.fn();

    // Create a debounced function
    const debouncedFunction = debounce(mockFn, delay);

    // Usar timers simulados
    vi.useFakeTimers();

    // Calling the debounced function multiple times in a short interval
    debouncedFunction();
    debouncedFunction();
    debouncedFunction();

    // Advance time without exceeding the delay
    vi.advanceTimersByTime(500);

    // Check if the mock function has not already been called
    expect(mockFn).not.toBeCalled();

    // Advance time to delay
    vi.advanceTimersByTime(500);

    // Check if the mock function was called once after the delay completed
    expect(mockFn).toBeCalledTimes(1);

    // Restore real timers (good practice after using fake timers)
    vi.useRealTimers();
  });
});
