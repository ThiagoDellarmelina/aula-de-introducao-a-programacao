/** 
 * Nível: Iniciante
 * Tema: for para inverter string
 * Enunciado:
 *  - Inverta uma string usando um `for`.
 */
function inverterString(str) {
  let invertida = "";
  for (let i = str.length - 1; i >= 0; i--) {
    invertida += str[i];
  }
  return invertida;
}

console.log(inverterString("javascript")); // esperado: "tpircsavaj"
