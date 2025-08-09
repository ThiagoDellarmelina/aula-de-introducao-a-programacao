/**
 * Nível: Avançado
 * Tema: IF com múltiplas regras
 * Enunciado:
 *  - Dadas 3 arestas (a,b,c), retorne:
 *      "INVALIDO" se não formarem triângulo
 *      "EQUILATERO" se a==b==c
 *      "ISOSCELES" se dois lados iguais
 *      "ESCALENO" se todos diferentes
 *  - Use apenas if/else.
 */
function classificarTriangulo(a,b,c){
  // TODO
}

console.log(classificarTriangulo(3,3,3)); // "EQUILATERO"
console.log(classificarTriangulo(3,4,4)); // "ISOSCELES"
console.log(classificarTriangulo(3,4,5)); // "ESCALENO"
console.log(classificarTriangulo(1,2,3)); // "INVALIDO"
