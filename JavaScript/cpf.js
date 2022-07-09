function calculaCPF(digitos) {
  if (digitos.length != 9) {
    throw new Error("Insira uma string de 9 digitos.");
  }
  const arrayDeNums = digitos.split("");
  arrayDeNums.push(calculaDigito(arrayDeNums));
  arrayDeNums.push(calculaDigito(arrayDeNums));
  const cpf = arrayDeNums.join("");
  return cpf;
}

function validaCPF(cpf) {
  if (cpf.length != 11) {
    throw new Error("Insira 11 digitos.");
  }
  const arrayDeNums = cpf.slice(0, 9).split("");
  arrayDeNums.push(calculaDigito(arrayDeNums));
  arrayDeNums.push(calculaDigito(arrayDeNums));
  const cpfCalculado = arrayDeNums.join("");
  const cpfEhValido = cpfCalculado === cpf;
  return cpfEhValido;
}

function geraNovoCPF() {
  const digitos = geraDigitosAleatorios(9);
  return calculaCPF(digitos);
}

// Helping functions
function calculaDigito(arrayDeNums) {
  let soma = 0;
  for (
    let i = 0, peso = arrayDeNums.length + 1;
    i < arrayDeNums.length, peso >= 2;
    i++, peso--
  ) {
    soma += arrayDeNums[i] * peso;
  }
  let resto = soma % 11;
  if (resto < 2) return 0;
  return 11 - resto;
}

function geraDigitosAleatorios(qtde) {
  let digitos = "";
  for (let i = 0; i < qtde; i++) {
    const digito = Math.floor(Math.random() * 10);
    digitos += digito.toString();
  }
  return digitos;
}

console.log(calculaCPF("707529474"));
console.log(validaCPF("70652947419"));
console.log(geraDigitosAleatorios(9));
console.log(geraNovoCPF());
