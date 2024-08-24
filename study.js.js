function SomaNumeros(numeroOne, numeroTwo) {
    return  numeroOne + numeroTwo
}

console.log(SomaNumeros(10, 20))

function MultiplicarNumeros(numeroOne, numeroTwo) {
    return  numeroOne * numeroTwo
}

console.log(MultiplicarNumeros(2, 20))

function DivisãoNumeros(numeroOne, numeroTwo) {
    return  numeroOne / numeroTwo
}

console.log(DivisãoNumeros(20, 2))

const person = {
    name: "Maria",
    age: "16 anos",
    gender: "Feminino"
}

// console.log(person.name)
// console.log(person.age)
// console.log(person.gender)

const { age, gender, name } = person

console.log(name)
console.log(age)
console.log(gender)