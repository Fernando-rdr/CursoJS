var agora = new Date()
var diasem = agora.getDay()
console.log(`A data de hoje é:`)
switch(diasem) {
    case 0:
        console.log(`Domingo`)
    case 1:
        console.log(`Segunda-Feira`)
        break
    case 2:
        console.log(`terça-Feira`)
        break
    case 3:
        console.log(`Quarta-Feira`)
        break
    case 4:
        console.log(`Quinta-Feira`)
        break
    case 5:
        console.log(`Sexta-Feira`)
        break
    case 6:
        console.log(`Sabado`)
        break
    default:
        console.log(`[ERRO] Dia inválido`)
        break
}