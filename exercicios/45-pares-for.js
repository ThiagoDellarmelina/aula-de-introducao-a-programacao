/** 
 * Nível: Iniciante
 * Tema: for com condição
 * Enunciado:
 *  - Imprima apenas os números pares de 1 a 20 usando `for`.
 */
function imprimirPares() {
  for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

imprimirPares();
