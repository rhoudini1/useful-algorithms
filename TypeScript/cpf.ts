/* ===============================================
    ALGORITMO PARA CÁLCULO E VERIFICAÇÃO DE CPF
=============================================== 
This file is in portuguese because CPF is the Brazilian citizenship registry for Brazilians only.
*/

function calculaCPF (digitos: string): string {
  if (digitos.length != 9) {
    throw new Error('Insira uma string de 9 digitos.')
  }

  const arrayDeDigitos: number[] = digitos.split("").map((digito) => Number.parseInt(digito))
  arrayDeDigitos.push(calculaDigito(arrayDeDigitos))
  arrayDeDigitos.push(calculaDigito(arrayDeDigitos))

  const cpf = arrayDeDigitos.join('')
  return cpf
}

// Funções auxiliares
function calculaDigito (array: number[]): number {
  let soma = 0
  for (
    let i = 0, peso = array.length + 1;
    i < array.length;
    i++, peso--
  ) {
    soma += array[i] * peso
  }
  let resto = soma % 11
  return resto < 2 ? 0 : 11 - resto
}