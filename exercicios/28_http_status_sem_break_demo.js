/**
 * Nível: Intermediário
 * Tema: switch SEM break para explicar efeito colateral
 * Enunciado:
 *  - Receba um status HTTP (200, 201, 400, 404, 500) e monte uma string de mensagens concatenadas.
 *  - NÃO use break em nenhum case: observe que as mensagens se acumulam (fall-through).
 *  - Depois, crie uma versão corrigida (ex. exercício 29) com break.
 *  - Proibido usar if/else.
 */
function statusHttpMensagens(code){
  // TODO: concatenar sem usar break para ver efeito.
}

console.log(statusHttpMensagens(200)); // "OK CREATED BAD_REQUEST NOT_FOUND SERVER_ERROR"
