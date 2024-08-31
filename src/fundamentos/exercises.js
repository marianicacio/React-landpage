function validaIdade(idade) {
    idade >= 18 ? console.log("Pode comprar") : console.log("Não pode comprar")
}

validaIdade(18)

console.log(validaIdade)

const age = 16
const message = age >= 18 ? "Você é maior de idade" : "Você é menor de idade"

console.log(message)

function validaParidade(numero) {
    return (
        numero % 2 === 0 ? console.log('Par') : console.log('Não é par')
    )
}

validaParidade(3)

console.log(validaParidade)

function validaFidelidade(clienteFidelidade) {
    return (
        clienteFidelidade === true ? console.log('Desconto de 10%') : console.log('Cliente novo apenas 5%')
    )
}

validaFidelidade(true)

console.log(validaFidelidade)

function validaIdadeIf(idade) {
    if (idade >= 18) {
        return console.log("É maior de idade")
     } else {
        return console.log("É menor de idade")
     }
}

validaIdadeIf(14)

console.log(validaIdadeIf)

function validaNota(nota) {
    if (nota >= 7) {
        return console.log("Aprovado")
    } else if (nota >= 5 && nota <= 6) {
        return console.log("Está de recuperação")
    } else {
        return console.log("Reprovado")
    }
}

validaNota(5)

console.log(validaNota)

function validaNotas(nota) {
    if (nota >= 60) {
        return console.log("Aprovado")
    } else {
        return console.log("Reprovado")
    }
}

validaNotas(60)

console.log(validaNotas)

function valideNumero(numero) {
    if (numero > 0) {
        return console.log("Positivo")
    } else if (numero < 0) {
        return console.log("Negativo")
    } else {
        return console.log("Zero")
    }
}

valideNumero(1)

console.log(valideNumero)

function diaDaSemana(dia) {
    switch (dia) {
        case 1 : return console.log("Domingo")
        case 2 : return console.log("Segunda")
        case 3 : return console.log("Terça")
        case 4 : return console.log("Quarta")
        case 5 : return console.log("Quinta")
        case 6 : return console.log("Sexta")
        case 7 : return console.log("Sábado")
        default: return console.log("Dia inválido")
    }
}

diaDaSemana(0)

function handleMonth(meses) {
    switch (meses) {
        case 1 : return console.log("Janeiro")
        case 2 : return console.log("Fereveiro")
        case 3 : return console.log("Março")
        case 4 : return console.log("Abril")
        case 5 : return console.log("Maio")
        case 6 : return console.log("Junho")
        case 7 : return console.log("Julho")
        case 8 : return console.log("Agosto")
        case 9 : return console.log("Setembro")
        case 10 : return console.log("Outubro")
        case 11 : return console.log("Novembro")
        case 12 : return console.log("Dezembro")
        default : return console.log("Mês errado")
    }
}

handleMonth(8)

function handleDev(cargo) {
    switch (cargo) {
    case 'Iniciante' : return console.log('Vai estudar')
    case 'Intermediario' : return console.log('Mais ou menos')
    case 'Avançado' : return console.log('topzera')
    }
}