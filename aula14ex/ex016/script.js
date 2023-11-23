function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("[ERRO] Faltam Dados...")
        res.innerHTML = `Impossivel Contar`
    } else {
        res.innerHTML = `Contando . . .<br>`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0) {
            window.alert("Passo invalido! Considerando PASSO 1")
            p = 1
        }
        if (i < f) {
        for(let x = i; x <= f; x += p) {
        res.innerHTML += `${x} \u{1F642}`
        }
    }   else {
        for (let x = i; x > f; x -= p) {
            res.innerHTML += `${x} \u{1F641}`
        }
    }   
        res.innerHTML += `\u{1F3c1}`
    }
}
