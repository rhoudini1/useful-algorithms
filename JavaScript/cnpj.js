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

function validaCNPJ(cnpj) {
  if (cnpj.length != 14) {
    throw new Error("Insira 14 digitos.");
  }
  const arrayDeNums = cnpj.slice(0, 12).split("");
  arrayDeNums.push(calculaDigito(arrayDeNums));
  arrayDeNums.push(calculaDigito(arrayDeNums));
  const cnpjCalculado = arrayDeNums.join("");
  const cnpjEhValido = cnpjCalculado === cnpj;
  return cnpjEhValido;
}

function geraNovoCNPJ() {
  const digitos = geraDigitosAleatorios(8) + "0001";
  return calculaCNPJ(digitos);
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

function geraDigitosAleatorios(qtde) {
  let digitos = "";
  for (let i = 0; i < qtde; i++) {
    const digito = Math.floor(Math.random() * 10);
    digitos += digito.toString();
  }
  return digitos;
}

// Testes
console.log(calculaCNPJ("397717260001"));
console.log(validaCNPJ("39771726000163"));
console.log(geraNovoCNPJ());
console.log(validaCNPJ(geraNovoCNPJ())); // Sempre true