const ask = require('readline-sync');

//let age = 17;
//const name = "Rafael";

//string 
//number 
//boolean
//null
//undefined
//object
//array 

//Operador ternário

//const resultado = nota >= 7 ? "Aprovado" : "Reprovado";
//console.log(resultado);

//for (let i = 0; i < 5; i++){ 
//console.log(i)}

//let j = 0;
//while(j < 5) {
//console.log(j);
//i++;
//};

//const pessoa = { nome: "Daniel", idade: 25}
//for (const chave in pessoa) {
//    console.log(`${chave}: ${pessoa[chave]}`)
//}

// let a = 5
// let b = -5

// function soma(a, b) {
//     console.log(a + b)
// }

// soma(a, b)

// Exercicios

// 1
// let name = ask.question(`What is your name? `);
// let age = Number(ask.question(`How old are you? `));

// console.log(`
// ===== USERS ===== 
// Name : ${name}
// Age : ${age}
// `)

//2
// let Num1 = Number(ask.question(`Give me a number: `));
// let Num2 = Number(ask.question(`Give me another number: `));

// function sum(Num1, Num2){
//     console.log(`
//    Sum: ${Num1 + Num2}
//    Subtraction: ${Num1 - Num2}
//    Multiplication: ${Num1 * Num2}
//    Division: ${Num1 / Num2}
//     `)
// }

// sum(Num1, Num2)

//3
// let notice = Number(ask.question(`What was the student's grade? `));
// let studentStatus = note >= 7 ? "APPROVED" : "FAILED";

// console.log(studentStatus);

//4
// let question = ask.question(`Enter a number: `)
// if ((question % 2 === 0)) {
//     console.log("É PAR")
// } else {
//     console.log("É IMPAR")
// }

//5
// let week = Number(ask.question(`What day of the week is it for you? `));
// switch(week){
//     case 1:
//         console.log(`Today is Monday`)
//         break
//     case 2:
//         console.log(`Today is Tuesday`)
//         break
//     case 3:
//         console.log(`Today is Wednesday`)
//         break
//     case 4:
//         console.log(`Today is Thursday`)
//         break
//     case 5:
//         console.log(`Today is Friday`)
//         break
//     case 6:
//         console.log(`Today is Saturday`)
//         break
//     case 7:
//         console.log(`Today is Sunday`)
//         break
//     default:
//         console.log(`No day found`)
// }

//6
// console.log(`
// ====== MENU ======
// 1: Xis
// 2: Soda
// 3: ice cream
// ==================
// `)

// let question = Number(ask.question(`Which menu options will you choose? `));

// switch (question) {
//     case 1:
//         console.log(`The xis costs R$ 25.00`)
//         break
//     case 2:
//         console.log(`The soda costs R$ 3.00.`)
//         break
//     case 3:
//         console.log(`The ice cream costs R$ 10.00`)
//         break
//     default:
//         console.log(`This product is not on the menu`)
// }

//7
// let soma = 0
// let Numbers = [1, 2, 3, 4, 5]
// for(let i = 0; i < Numbers.length; i++){
//     soma += Numbers[i]
// }
// console.log(soma)

//8
// let s = 0
// while(s <= 10){
//     console.log(s)
//     s++
// }

//9
// let fruits = ['apple', 'banana', 'pear']
// for(const fruit of fruits){
//     console.log(fruit)
// }

//10
// let fruits = ['apple', 'banana', 'pear']
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i])
// }