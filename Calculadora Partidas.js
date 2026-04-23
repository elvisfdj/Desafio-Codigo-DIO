console.log("Desafio do Herói");

function calcularNivel(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas;
  let nivel;

  if (saldoVitorias < 10) {
    nivel = "Ferro";
  } else if (saldoVitorias <= 20) {
    nivel = "Bronze";
  } else if (saldoVitorias <= 50) {
    nivel = "Prata";
  } else if (saldoVitorias <= 80) {
    nivel = "Ouro";
  } else if (saldoVitorias <= 90) {
    nivel = "Diamante";
  } else if (saldoVitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  return `O Herói tem saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

let resultado = calcularNivel(9000, 8800);
console.log(resultado);