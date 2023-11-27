let valores = [8,1,7,4,2,9]
let pos = valores.indexOf(0)

if (pos == -1) {
    console.log(`Valor não existe dentro do vetor/array`)
} else {
    console.log(`Indice encontrado: ${valores[pos]}`)
}

/*
valores.sort()
for (let pos in valores) {
    console.log(valores[pos])
}
*/

/*
for (let x = 0; x < valores.length; x++) {
    console.log(`posição ${x} contem valor ${valores[x]}`)
}
*/

/*
let num = [5,2,8,9]
num[4] = 1
num.push(3)

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

console.log(`Array em ordem: ${num.sort()}`)
*/