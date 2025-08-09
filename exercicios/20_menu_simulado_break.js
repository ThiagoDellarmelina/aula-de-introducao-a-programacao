/**
 * Nível: Avançado
 * Tema: IF + loop + break + return
 * Enunciado:
 *  - Implemente `processarComandos(comandos)` que recebe um array de strings
 *    representando ações de menu: "salvar", "abrir", "sair", "ajuda"…
 *  - Para cada comando, imprima uma mensagem específica via console.log usando apenas if/else.
 *  - Ao encontrar "sair", imprima "Encerrando..." e interrompa imediatamente com `break`.
 *  - A função deve retornar a quantidade de comandos processados até a interrupção (inclusive "sair").
 */
function processarComandos(comandos){
  // TODO
}

console.log(processarComandos(["abrir","ajuda","sair","salvar"])); // 3
console.log(processarComandos(["salvar","abrir"]));                 // 2
