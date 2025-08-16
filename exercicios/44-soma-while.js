/** 
 * Nível: Iniciante
 * Tema: soma com while
 * Enunciado:
 *  - Some os números de 1 a 10 usando um `while` e exiba o resultado.
 */
function somaUmADez() {
  let i = 1;
  let soma = 0;
  while (i <= 10) {
    soma += i;
    i++;
  }
  console.log("Soma =", soma);
}

somaUmADez(); // esperado: 55
