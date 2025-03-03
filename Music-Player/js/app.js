const container = document.querySelector(".container");
const image = document.querySelector("#music-image");
const title = document.querySelector("#music-details .title");
const singer = document.querySelector("#music-details .singer");
const audio = document.getElementById("audio");
const prev = document.getElementById("prev");
const play = document.getElementById("play");
const next = document.getElementById("next");
const currentTime = document.getElementById("curent-time");
const duration = document.getElementById("duration");
const progressBar = document.getElementById("progress-bar");
const volume = document.getElementById("volume");
const volumeIcon = document.querySelector(".volum-container i");
const list = document.getElementById("list");
const music_list = document.querySelector(".music-list");
const musicFromList = document.querySelectorAll("#list-music");


const player = new MusicPlayer(musicList);

window.addEventListener("load", () => {
    if (localStorage.getItem('index') != null) {
        player.index = localStorage.getItem('index');
    }
    let music = player.getMusic();
    displayMusic(music);
    musicListDisplay(player.index);
});

// MUSIC DISPLAY
function displayMusic(music) {
    title.innerHTML = music.getName();
    singer.innerHTML = music.singer;
    image.src = `img/${music.img}`;
    audio.src = `mp3/${music.file}`;
};

// MUSIC CONTROLS
play.addEventListener('click', () => {
    const isMusicPlay = container.classList.contains("playing");
    isMusicPlay ? pauseMusic() : playMusic();
});

// localStorage.clear();
prev.addEventListener('click', () => {
    prevMusic()
    localStorage.setItem('index', player.index);
});

next.addEventListener('click', () => {
    nextMusic();
    localStorage.setItem('index', player.index);
});

// CONTROL FUNCTIONS
const prevMusic = () => {
    player.previousMusic();
    let music = player.getMusic();
    displayMusic(music);
    musicListDisplay(player.index);
    playMusic();
}

const nextMusic = () => {
    player.nextMusic();
    let music = player.getMusic();
    displayMusic(music);
    musicListDisplay(player.index);
    playMusic();
}

const pauseMusic = () => {
    container.classList.remove("playing");
    play.querySelector("i").classList = "fa-solid fa-play";
    audio.pause();
}

const playMusic = () => {
    container.classList.add("playing");
    play.querySelector("i").classList = "fa-solid fa-pause";
    audio.play();
}

// her bir şarkının zaman hesaplaması
const calculateTime = (second) => {
    let minutes = Math.floor(second / 60);
    let seconds = Math.floor(second % 60);
    let newSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${newSeconds}`;
}

// audio file'ı yüklendiği zaman gerçekleşecek olan
audio.addEventListener("loadedmetadata", () => {
    duration.textContent = calculateTime(audio.duration);
    progressBar.max = Math.floor(audio.duration);
});

// audio'nun time update oldukça gerçekleşecek olan
audio.addEventListener("timeupdate", () => {
    progressBar.value = Math.floor(audio.currentTime);
    currentTime.textContent = calculateTime(progressBar.value);

    if (Math.floor(audio.currentTime) == Math.floor(progressBar.max)) next.click();
});

// input kontrolüne konumlanma aşamasında çalışacaktır
progressBar.addEventListener('input', () => {
    currentTime.textContent = calculateTime(progressBar.value);
    audio.currentTime = progressBar.value;
});

// volume controles
volume.addEventListener('input', () => {
    if (volume.value == 0) {
        volumeIcon.className = "fa-solid fa-volume-xmark";
    } else volumeIcon.className = "fa-solid fa-volume-high";

    audio.volume = volume.value / 100;
});

volumeIcon.addEventListener('click', () => {
    if (volume.value == 0) {
        volumeIcon.className = "fa-solid fa-volume-high"
        volume.value = 100, audio.volume = 1;
    } else {
        volumeIcon.className = "fa-solid fa-volume-xmark"
        volume.value = 0, audio.volume = 0;
    }
});

// music list
list.addEventListener('click', () => {
    music_list.classList.toggle("active");
});

// selectin music from list
musicFromList.forEach((item, index) => {

    item.addEventListener('click', (e) => {
        // playing selected music
        player.index = index;
        let music = player.getMusic();
        displayMusic(music);
        playMusic();

        // changing display
        musicListDisplay(index);   
    });
});

const musicListDisplay = (index) => {
    musicFromList.forEach(item => {
        item.classList.remove("active");
    });
    musicFromList[index].classList.add("active");
};
