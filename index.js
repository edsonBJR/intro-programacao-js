// Variável que recebe no name Edson e não muda ao longo do programa
// const name = 'Edson Bootcamp'

// Imprimir a variável no Console
// console.log(name)

// Criar um programa que calcula a média
// das grades entre os students e envia
// mensagem do cálculo da média.

// const name = "Edson" // não aceita o Template String
// const name2 = 'Barbosa ${name}' // não aceita o Template String
// const name3 = `${name} ${name2} Junior` // nesse caso a variável vira uma template String o que permite uma variável dentro da crase ``
// console.log(name3)

// const student01 = "Edson"
// const student02 = 'Enricco'
// const student03 = 'João'
// const gradestudent01 = 9.8
// const gradestudent02 = 10
// const gradestudent03 = 2

// console.log(typeof gradestudent01) // Função typeOf mostra qual o tipo da variável

// const student01 = 'Edson' // Variável do tipo String
// const student02 = 'Enricco' // Variável do tipo String
// const student03 = 'João' // Variável do tipo String
// const gradestudent01 = 9.8 // Variável do tipo Number
// const gradestudent02 = 10 // Variável do tipo Number
// const gradestudent03 = 2 // Variável do tipo Number

// const average = (gradestudent01 + gradestudent02 + gradestudent03) / 3 // calculo guardado dentro da variável average
// console.log(average) // imprimindo a variável média no console


// Mostra uma mensagem de acordo com o calculo da média. Utilizado a condicional if(){}else{}

// const student01 = 'Edson' // Variável do tipo String
// const gradestudent01 = 1.8 // Variável do tipo Number

// const student02 = 'Enricco' // Variável do tipo String
// const gradestudent02 = 10 // Variável do tipo Number

// const student03 = 'João' // Variável do tipo String
// const gradestudent03 = 2 // Variável do tipo Number

// const average = (gradestudent01 + gradestudent02 + gradestudent03) / 3

// // Se a média for maior que 5 parabenizar a turma

// if (average > 5) {
//     // Faz alguma coisa
//     console.log(`A média foi de ${average}. Parabéns`)
// } else {
//     // Faz outra coisa
//     console.log('A média é menor que 5.')
// }

/* Objetos em Javascript */

// Objetos

// Os students abaixo são objetos com suas propriedades

// const student01 = {
//     name: "Edson",
//     grade: 9.8
// }

// const student02 = {
//     name: "Enricco",
//     grade: 10
// }

// const student03 = {
//     name: "Maria",
//     grade: 2
// }

// const average = (student01.grade + student02.grade + student03.grade) / 3

// Console é um objeto com seus métodos
// console.log(average)

// Coleção de Objetos
// Array - Vetores
// const students = [{
//         name: "Edson",
//         grade: 9.8
//     },
//     {
//         name: "Enricco",
//         grade: 10
//     },
//     {
//         name: "Maria",
//         grade: 2
//     }
// ]

// const nameDestudents = ["Edson", "Enricco", "Maria"]

// console.log(nameDestudents)

// const average = (students[0].grade + students[1].grade + students[2].grade) / 3

// console.log(average)

// Criar um programa que calcula a média
// das turmas de students e envia 
// mensagem de cálculo da média

// Marcar student como flunked se a grade
// for menor que 5
// e também enviar uma mensagem

const classA = [{
        name: "Edson",
        grade: 1.8,
    },
    {
        name: "Enricco",
        grade: 10
    },
    {
        name: "Maria",
        grade: 3
    },
    {
        name: "Amanda",
        grade: 10
    }
]

const classB = [{
        name: "Priscila",
        grade: 4
    },
    {
        name: "Raquel",
        grade: 8.9
    },
    {
        name: "Pedro",
        grade: 5
    },
    {
        name: "João",
        grade: 8
    }
]

function calculateAverage(students) {
    let sum = 0

    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade;
    }
    const average = sum / students.length
    return average
}

function sendMessage(average, turma) {
    if (average > 5) {
        console.log(`${turma} average ${average}. Congrats!`)
    } else {
        console.log(`${turma} average ${average}. It's not enough!`)
    }
}

function markedAsFlunked(student) {
    student.flunked = false

    if (student.grade < 5) {
        student.flunked = true
    }
}

function sendFlunkedMessage(student) {
    if (student.flunked) {
        console.log(`The student ${student.name} was flunked!`)
    }
}

function studentsFlunkeds(students) {
    for (let student of students) {
        markedAsFlunked(student)
        sendFlunkedMessage(student)
    }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, 'Class A')
sendMessage(average2, 'Class B')

studentsFlunkeds(classA)
studentsFlunkeds(classB)