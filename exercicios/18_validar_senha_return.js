/**
 * Nível: Avançado
 * Tema: IF + múltiplos early returns (OBRIGATÓRIO usar return)
 * Enunciado:
 *  - Valide uma senha `s` com as regras:
 *      - mínimo 8 caracteres
 *      - conter ao menos 1 dígito
 *      - conter ao menos 1 letra
 *  - Retorne "OK" se todas passarem; caso falhe em alguma, retorne a mensagem específica imediatamente.
 */
function validarSenha(s){
  // TODO: use returns imediatos para cada falha
}

console.log(validarSenha("abc"));        // "mínimo 8 caracteres"
console.log(validarSenha("abcdefgh"));   // "deve conter dígito"
console.log(validarSenha("12345678"));   // "deve conter letra"
console.log(validarSenha("abc12345"));   // "OK"
