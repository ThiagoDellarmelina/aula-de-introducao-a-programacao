/** 
 * Nível: Iniciante
 * Tema: while com break
 * Enunciado:
 *  - Use um `while` para contar até 100, mas pare quando o contador chegar em 10 (use `break`).
 */
function contarComBreak() {
  let i = 1;
  while (i <= 100) {
    console.log(i);
    if (i === 10) {
      break; // para o loop quando chegar em 10
    }
    i++;
  }
}

contarComBreak();
