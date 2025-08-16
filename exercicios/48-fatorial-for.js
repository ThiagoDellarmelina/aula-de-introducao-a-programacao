/** 
 * Nível: Iniciante
 * Tema: for com cálculo
 * Enunciado:
 *  - Calcule o fatorial de um número (n!) usando `for`.
 */
function fatorial(n) {
  let resultado = 1;
  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

console.log(fatorial(5)); // esperado: 120
