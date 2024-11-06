import { describe, it, expect, vi } from "vitest";
import { fetchData } from "../src/promise";

describe("callback", () => {
  it("should call the callback after delay", () => {
    // Cria uma função mock
    
    // Simula timers
    vi.useFakeTimers();
    
    // Executa `fetchData` com o mock
    let promise = fetchData();

    // Avança o tempo do timer simulado até 2000ms
    vi.runAllTimers();

    // Verifica se o mock foi chamado
    expect(promise).resolves.toBeDefined();
  });
});
