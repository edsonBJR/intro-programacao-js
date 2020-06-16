/* OPERADORES DE COMPARAÇAO

>   Maior
<   Menor
>=  Maior igual
<=  Menor igual
==  Igual a
=== Igual e do mesmo tipo
!=  Diferente de
!== Diferente, inclusive do tipo

===========================*/

// console.log(5 > 4) // true; (Boolean)
// console.log(5 < 4) // false; (Boolean)
// console.log(5 >= 4) // true; (Boolean)
// console.log(5 <= 4) // false; (Boolean)
// console.log(4 <= 4) // true; (Boolean)

// console.log(5 == 4) // false; (Boolean)
// console.log(5 === 4) // false; (Boolean)
// console.log(5 != 4) // true; (Boolean)
// console.log(5 !== 4) // true; (Boolean)

// console.log(4 == "4") // true; (Boolean)
// console.log(4 === "4") // false; (Boolean)
// console.log(5 != "4") // true; (Boolean)
// console.log(5 !== "4") // true; (Boolean)

/* Desfios */
// Desafio 01
// const idade = 17
//     // Verificar se a pessoa é maior igual a 18 anos
//     // console.log(idade > 18)
//     // se sim, deixar entrar, se não, bloquear a entrada
// if (idade >= 18) {
//     console.log('Deixar entrar')
// } else {
//     console.log('Bloquear a entrada')
// }
// // se a pessoa tiver 17 anos
// // avisar para voltar quando fizer 18 anos
// if (idade === 17) {
//     console.log('Voltar quando fizer 18 anos')
// }

// Desafio 01 - Algoritmo Menor
// const idade = 18
// if (!(idade >= 18) || idade === 17) {
//     console.log('Bloquear a entrada')
// } else {
//     console.log('Deixar entrar')
// }

/* ===================================
     Operadores Lógicos 

     && "E" As duas condições devem ser verdadeiras
     para que a condição final seja verdadeira.
     || "OU" Uma das condições devem ser verdadeiras
     para que a condição final seja verdadeira
     ! "Não" Nega uma condição
=====================================*/

// console.log(5 == 5 && 6 == 6) // true
// console.log(5 == 5 && 6 != 6) // false

// console.log(5 == 5 || 6 != 6) // true
// console.log(5 == 4 || 4 == 3) // false

// console.log(!(5 > 6)) // true
// console.log(!(5 < 6)) // false

/* ===================================
     Operadores Aritméticos

     *  Multiplicação
     /  Divisão
     %  Resto da Divisão
     +  Adição
     -  Subtração

=====================================*/

console.log(2 * 2) // 4
console.log(2 / 2) // 1
console.log(2 % 1.5) // 0.5
console.log(2 + 2) // 4
console.log(2 - 2) // 0