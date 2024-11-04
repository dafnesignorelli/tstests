export function createMultiplier(multiplicador: number) {
    return function(numero: number) {
      return numero * multiplicador;
    };
  }
  