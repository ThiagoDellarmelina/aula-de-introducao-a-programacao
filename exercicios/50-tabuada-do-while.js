/** 
 * Nível: Iniciante
 * Tema: do...while com multiplicação
 * Enunciado:
 *  - Mostre a tabuada do 5 (de 1 até 10) usando `do...while`.
 */
function tabuadaDoCinco() {
  let i = 1;
  do {
    console.log("5 x " + i + " = " + (5 * i));
    i++;
  } while (i <= 10);
}

tabuadaDoCinco();
