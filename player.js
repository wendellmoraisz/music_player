const pause = document.querySelector('#pause')
const play = document.querySelector('#play')
const music = document.querySelector('#music')
const barra = document.querySelector('#bar')
const proximo = document.querySelector('#next')

play.onclick = comecar
pause.onclick = pausar
let cont = 0

const musicas = [{
    titulo: "Hollywood's Bleeding",
    artista: 'Post Malone',
    capa: 'img/postMalone.jpg',
    audio: 'audio/malone.mp3'
}, {
    titulo: "I Don't Wanna Live Forever",
    artista: 'Taylor Swift ft. ZAYN',
    capa: 'img/taylor_swift.jpg',
    audio: 'audio/taylor.mp3'
}, {
    titulo: 'Somewhere I Belong',
    artista: 'Linkin Park',
    capa: 'img/meteora.jpg',
    audio: 'audio/somewhere_i_belong.mp3'
}]

function getMusica() {
    if (cont != musicas.length - 1) {
        cont += 1
        return cont
    }
    else {
        cont = 0
        return cont
    }
}

function passarMusica(obj) {
    document.querySelector('.title').innerHTML = obj.titulo
    document.querySelector('.artist').innerHTML = obj.artista
    document.querySelector('#capa').src = obj.capa
    document.querySelector('#music').src = obj.audio
}

function comecar() {
    music.play()
    play.style.display = 'none'
    pause.style.display = 'inline'
}

function pausar() {
    music.pause()
    play.style.display = 'inline'
    pause.style.display = 'none'
}

function voltar() {
    if(music.currentTime > 1.5){
        music.currentTime = 0
    } else if (cont == 0){
        cont = musicas.length - 1
        passarMusica(musicas[cont])
    } else {
        cont -= 1
        passarMusica(musicas[cont])
    }
}

function progress() {
    const percentual = (music.currentTime / music.duration) * 100
    barra.style.width = `${percentual}%`

    if (music.currentTime == music.duration) {
        passarMusica(musicas[getMusica()])
    }
}

window.setInterval(progress, 1)