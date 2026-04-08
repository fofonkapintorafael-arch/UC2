// LISTA DE EXERCÍCIOS - STRINGS EM JAVASCRIPT
// Utilize o pacote readline-sync para entrada de dados quando necessário.
// Resolva cada exercício separadamente.
let ask = require('readline-sync');
// 1)
// Peça para o usuário digitar um nome completo.
// Armazene esse valor em uma variável.
// Exiba no console:
// - O nome digitado
// - A quantidade total de caracteres do nome

/*let name = ask.question("Qual eh o seu nome completo?");
let frase = `Meu nome eh ${name}`;
console.log(frase);
console.log(name.length)*/

// 2)
// Peça para o usuário digitar uma frase.
// Exiba:
// - A frase toda em letras maiúsculas
// - A frase toda em letras minúsculas

/*(let phrase = ask.question("digite uma frase:");
console.log(phrase.toUpperCase());
console.log(phrase.toLowerCase());*/

// 3)
// Declare uma variável que armazene a frase "  Socorram-me! Subi no onibus em Marrocos!      "
// Exiba:
// - O texto original
// - O texto sem os espaços desnecessários
// - O tamanho antes e depois da remoção dos espaços

/*let phrase = "    Socorram-me! Subi no onibus em Marrocos!    ";
let phraseSpace = phrase.trim();
console.log(phrase);
console.log(phraseSpace.length);
console.log(phrase.length);*/

// 4)
// Armazene em uma variável uma string com o nome de 5 frutas a sua escolha.
// Depois peça para o usuário digitar o nome de uma fruta qualquer.
// Exiba no console um boolean indicando se a string contém a palavra fruta pelo usuário.

/*let fruits = `Maça, Banana, Laranja, Melancia, Morangpo`;
let question = ask.question("Digite o nome de uma fruta:");
console.log(fruits.includes(question));*/

// 5)
// Peça para o usuário digitar uma frase.
// Peça também para o usuário digitar uma palavra que deseja substituir.
// Peça ainda uma nova palavra para substituição.
// Substitua todas as ocorrências da palavra informada pela nova palavra.
// Exiba o resultado.

/*let phrase = ask.question("Digite uma frase:");
let phraseTwo = ask.question("Digite uma palavra que deseja substituir:");
let phraseTree= ask.question("Escreva a nova palavra:");


let newPhrase = phrase.replaceAll(phraseTwo, phraseTree);
console.log(newPhrase);*/

// 6)
// Crie duas variáveis com valores numéricos definidos por você.
// Exiba:
// - A soma desses valores
// - Uma frase concatenada explicando o resultado, utilizando template string

/*let number = 100;
let numberTwo = 200;
let result = number + numberTwo
console.log(`À soma da variavel ${number} com a variavel ${numberTwo} eh ${result}`);*/

// 7)
// Peça para o usuário digitar qualquer valor.
// Exiba:
// - O valor digitado
// - O tipo desse valor usando typeof

/*let question = ask.question("Digite qualquer valor:");
console.log(question);
console.log(typeof question);
console.log(Number(question));*/

// 8)
// Peça para o usuário digitar duas palavras e armazene em duas variáveis diferentes.
// Crie uma nova variável que seja a junção dessas palavras com um espaço entre elas.
// Exiba:
// - A frase final
// - O tamanho total da frase

/*let question = ask.question("Digite uma palavras:");
let questionTwo = ask.question("Digite outra palavra:");
let result = question + " " + questionTwo;
console.log(result)
console.log(result.length);*/

// 9)
// Peça para o usuário digitar uma frase.
// Peça também para o usuário digitar uma letra.
// Transforme a frase para:
// - Toda em maiúsculas
// - Depois substitua todas as ocorrências da letra informada por "*"
// Exiba o resultado final.

let phrase = ask.question("Digite uma frase:");
let letter = ask.question("Digite uma letra:");
console.log(phrase.toUpperCase());
console.log(phrase.replaceAll(letter , "*"));
