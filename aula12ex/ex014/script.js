

function carregar() {
    var msg = window.document.getElementById('horario')
    var imagem = window.document.getElementById('img')

    var data = new Date()
    var hora = data.getHours()

    //var hora = 19

    msg.innerText = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){

        imagem.src = 'img/manha.jpg'

        window.document.body.style.background = '#CEBC8F'

    } else if (hora >= 12 && hora < 18) {

        imagem.src = 'img/tarde.jpg'

        document.body.style.background = '#A97A66'

    } else {

        imagem.src = 'img/noite.jpg'

        window.document.body.style.background = '#494A4B'

    }
}

