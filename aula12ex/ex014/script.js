function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    /* var hora = 6 */
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
       // Bom dia fdb467
       img.src = 'fotomanha.png'
       document.body.style.background = '#fdb467'
    } else if (hora >= 12 && hora <= 18) {
        // boa tarde 828e93
        img.src = 'fototarde.png'
        document.body.style.background = '#828e93'
    } else {
        // boa noite 4c3853
        img.src = 'fotonoite.png'
        document.body.style.background = '#4c3853'
    }
}
