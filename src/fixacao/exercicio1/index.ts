/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris: vermelha, laranja, amarela, verde, azul, anil e violeta. Utilize um enum para isso.
*/
enum COLOR {
  VERMELHO="vermelho",
  LARANJA="laranja",
  AMARELO="amarelo",
  VERDE="verde",
  AZUL="azul",
  ANIL="azul-escuro",
  VIOLETA="roxo"
}

type TPessoa = {
  nome: string,
  idade: number,
  corFavorita: COLOR
}

const pessoa: TPessoa={
  nome: "Henrique",
  idade: 11,
  corFavorita: COLOR.AMARELO
}
const pessoa2: TPessoa={
  nome: "Maria",
  idade: 13,
  corFavorita: COLOR.AZUL
}
const pessoa3: TPessoa={
  nome: "Luiz",
  idade: 40,
  corFavorita: COLOR.VERDE
}
const pessoa4: TPessoa={
  nome: "Joyce",
  idade: 38,
  corFavorita: COLOR.VIOLETA
}

const array1: TPessoa[]= [pessoa, pessoa2, pessoa3, pessoa4]
console.log(array1)