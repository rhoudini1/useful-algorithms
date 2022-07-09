/* ================================================
    ALGORITMO PARA CÁLCULO E VERIFICAÇÃO DE CNPJ
================================================ */

function calculaCNPJ(digitos) {
  if (digitos.length != 12) {
    throw new Error("Insira uma string de 12 digitos.");
  }
  const arrayDeNums = digitos.split("");
  arrayDeNums.push(calculaDigito(arrayDeNums));
  arrayDeNums.push(calculaDigito(arrayDeNums));
  const cnpj = arrayDeNums.join("");
  return cnpj;
}

// FUNÇÕES AUXILIARES
function calculaDigito(arrayDeNums) {
  let soma = 0;

  for (
    let i = 0, peso = arrayDeNums.length - 7;
    i < arrayDeNums.length;
    i++, peso--
  ) {
    soma += arrayDeNums[i] * peso;
    if (peso == 2) peso = 10;
  }

  let resto = soma % 11;
  return resto < 2 ? 0 : 11 - resto;
}

// Testes
console.log(calculaCNPJ("397717260001"));