class MusicPlayer {
    constructor(musicList) {
        this.musicList = musicList;
        this.index = 0;
    }

    getMusic() {
        return this.musicList[this.index];
    }

    nextMusic() {
        if (this.index == this.musicList.length - 1) {
            this.index = 0;
        } else this.index++;
    }

    previousMusic() {
        if (this.index == 0) {
            this.index = this.musicList.length - 1;
        } else this.index--;
    }
}