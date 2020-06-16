// Variável que recebe no nome Edson e não muda ao longo do programa
// const nome = 'Edson Bootcamp'

// Imprimir a variável no Console
// console.log(nome)

// Criar um programa que calcula a média
// das notas entre os alunos e envia
// mensagem do cálculo da média.

// const nome = "Edson" // não aceita o Template String
// const nome2 = 'Barbosa ${nome}' // não aceita o Template String
// const nome3 = `${nome} ${nome2} Junior` // nesse caso a variável vira uma template String o que permite uma variável dentro da crase ``
// console.log(nome3)

// const aluno01 = "Edson"
// const aluno02 = 'Enricco'
// const aluno03 = 'João'
// const notaAluno01 = 9.8
// const notaAluno02 = 10
// const notaAluno03 = 2

// console.log(typeof notaAluno01) // Função typeOf mostra qual o tipo da variável

// const aluno01 = 'Edson' // Variável do tipo String
// const aluno02 = 'Enricco' // Variável do tipo String
// const aluno03 = 'João' // Variável do tipo String
// const notaAluno01 = 9.8 // Variável do tipo Number
// const notaAluno02 = 10 // Variável do tipo Number
// const notaAluno03 = 2 // Variável do tipo Number

// const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3 // calculo guardado dentro da variável media
// console.log(media) // imprimindo a variável média no console


// Mostra uma mensagem de acordo com o calculo da média. Utilizado a condicional if(){}else{}

// const aluno01 = 'Edson' // Variável do tipo String
// const notaAluno01 = 1.8 // Variável do tipo Number

// const aluno02 = 'Enricco' // Variável do tipo String
// const notaAluno02 = 10 // Variável do tipo Number

// const aluno03 = 'João' // Variável do tipo String
// const notaAluno03 = 2 // Variável do tipo Number

// const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3

// // Se a média for maior que 5 parabenizar a turma

// if (media > 5) {
//     // Faz alguma coisa
//     console.log(`A média foi de ${media}. Parabéns`)
// } else {
//     // Faz outra coisa
//     console.log('A média é menor que 5.')
// }

/* Objetos em Javascript */

// Objetos

// Os alunos abaixo são objetos com suas propriedades

// const aluno01 = {
//     nome: "Edson",
//     nota: 9.8
// }

// const aluno02 = {
//     nome: "Enricco",
//     nota: 10
// }

// const aluno03 = {
//     nome: "Maria",
//     nota: 2
// }

// const media = (aluno01.nota + aluno02.nota + aluno03.nota) / 3

// Console é um objeto com seus métodos
// console.log(media)

// Coleção de Objetos
// Array - Vetores
// const alunos = [{
//         nome: "Edson",
//         nota: 9.8
//     },
//     {
//         nome: "Enricco",
//         nota: 10
//     },
//     {
//         nome: "Maria",
//         nota: 2
//     }
// ]

// const nomeDeAlunos = ["Edson", "Enricco", "Maria"]

// console.log(nomeDeAlunos)

// const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3

// console.log(media)


// Criar um programa que calcula a média
// das turmas de alunos e envia 
// mensagem de cálculo da média

// const alunosDaTurmaA = [{
//         nome: "Edson",
//         nota: 9.8
//     },
//     {
//         nome: "Enricco",
//         nota: 10
//     },
//     {
//         nome: "Maria",
//         nota: 3
//     },
//     {
//         nome: "Amanda",
//         nota: 10
//     }
// ]

// const alunosDaTurmaB = [{
//         nome: "Priscila",
//         nota: 4
//     },
//     {
//         nome: "Raquel",
//         nota: 8.9
//     },
//     {
//         nome: "Pedro",
//         nota: 5
//     },
//     {
//         nome: "João",
//         nota: 8
//     }
// ]

// function calculaMedia(alunos) {
//     let soma = 0
//     for (let i = 0; i < alunos.length; i++) {
//         soma = soma + alunos[i].nota;
//     }
//     const media = soma / alunos.length
//     return media
// }

// const media1 = calculaMedia(alunosDaTurmaA)
// const media2 = calculaMedia(alunosDaTurmaB)

// function enviaMensagem(media, turma) {
//     if (media > 5) {
//         console.log(`A media da ${turma} foi de ${media}. Parabéns!`)
//     } else {
//         console.log(`A média da ${turma} foi menor que 5.`)
//     }
// }

// enviaMensagem(media1, 'Turma A')
// enviaMensagem(media2, 'Turma B')