import { describe, it, expect, vi } from "vitest";
import { fetchData } from "../src/callback";

describe("callback", () => {
  it("should call the callback after delay", () => {
    // Cria uma função mock
    const mockFn = vi.fn();
    
    // Simula timers
    vi.useFakeTimers();
    
    // Executa `fetchData` com o mock
    fetchData(mockFn);

    // Avança o tempo do timer simulado até 2000ms
    vi.runAllTimers();

    // Verifica se o mock foi chamado
    expect(mockFn).toBeCalledTimes(1);
  });
});
