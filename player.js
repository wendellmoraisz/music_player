const pause = document.querySelector('#pause')
const play = document.querySelector('#play')
const music = document.querySelector('#music')
const bar = document.querySelector('#bar')
const next = document.querySelector('#next')
const back = document.getElementById('back')

back.onclick = voltar
play.onclick = comecar
pause.onclick = pausar
next.onclick = function(){
 nextMusic(musics[getMusic()])
}
    
let indexMusic = 0

const musics = [{
    title: "Hollywood's Bleeding",
    artist: 'Post Malone',
    albumCover: 'img/postMalone.jpg',
    audio: 'audio/malone.mp3'
}, {
    title: "I Don't Wanna Live Forever",
    artist: 'Taylor Swift ft. ZAYN',
    albumCover: 'img/taylor_swift.jpg',
    audio: 'audio/taylor.mp3'
}, {
    title: 'Somewhere I Belong',
    artist: 'Linkin Park',
    albumCover: 'img/meteora.jpg',
    audio: 'audio/somewhere_i_belong.mp3'
}, {
    title: 'Harvester Of Sorrow',
    artist: 'Metallica',
    albumCover: 'img/and_justice_for_all.webp',
    audio: 'audio/harvester_of_sorrow.mp3'
}]

function getMusic() {
    indexMusic == musics.length - 1 ? indexMusic = 0 : indexMusic++
    return indexMusic
}

function nextMusic(obj) {
    document.querySelector('.title').innerHTML = obj.title
    document.querySelector('.artist').innerHTML = obj.artist
    document.querySelector('#albumCover').src = obj.albumCover
    document.querySelector('#music').src = obj.audio

    musicsFromPlaylist.forEach(e => e.classList.remove('selected'))
    musicsFromPlaylist[indexMusic].classList.add('selected')
}

function comecar() {
    music.play()
    play.style.display = 'none'
    pause.style.display = 'inline'

    musicsFromPlaylist[indexMusic].classList.add('selected')
}

function pausar() {
    music.pause()
    play.style.display = 'inline'
    pause.style.display = 'none'
}

function voltar() {
    if(music.currentTime > 1.5){
        music.currentTime = 0
    } else if (indexMusic == 0){
        indexMusic = musics.length - 1
        nextMusic(musics[indexMusic])
    } else {
        indexMusic -= 1
        nextMusic(musics[indexMusic])
    }
}

function progress() {
    const percentual = (music.currentTime / music.duration) * 100
    bar.style.width = `${percentual}%`

    if (music.currentTime == music.duration) {
        nextMusic(musics[getMusic()])
    }
}

window.setInterval(progress, 1)

const playlist = document.querySelector('.playlist > ul')
musics.forEach(e => playlist.innerHTML += `<li><a href="#">${e.title} - ${e.artist}</a></li>`)

const musicsFromPlaylist = document.querySelectorAll('.playlist > ul > li')

musicsFromPlaylist.forEach((e,i) => {
    e.onclick = function(){
        nextMusic(musics[i])
        musicsFromPlaylist.forEach(e => e.classList.remove('selected'))
        e.classList.add('selected')
}
})