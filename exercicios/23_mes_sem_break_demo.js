/**
 * Nível: Iniciante
 * Tema: switch SEM break (DELIBERADO para demonstrar fall-through)
 * Enunciado:
 *  - Dado 1..3, retorne string com meses "janeiro", "fevereiro", "março".
 *  - NÃO use `break` para que o aluno observe o efeito de fall-through (continua executando).
 *  - Depois, peça para corrigir adicionando `break`.
 *  - Proibido usar if/else.
 */
function mesCurto(n){
  // TODO: montar string concatenando meses sem usar break.
}

console.log(mesCurto(1)); // "janeiro fevereiro março" (esperado com fall-through)
console.log(mesCurto(2)); // "fevereiro março"
