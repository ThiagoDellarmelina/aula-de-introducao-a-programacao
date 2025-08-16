/** 
 * Nível: Iniciante
 * Tema: for com continue
 * Enunciado:
 *  - Imprima apenas os números ímpares de 1 a 10 usando `for` e `continue`.
 */
function imprimirImpares() {
  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      continue; // pula os pares
    }
    console.log(i);
  }
}

imprimirImpares();
