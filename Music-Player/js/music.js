class Music {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {
        return `${this.title} - ${this.singer}`
    }
}

// creating music objects
const musicList = [
    new Music("Kosandra", "Miyagi & Andy Panda", "kosandra.jpg", "kosandra.mp3"),
    new Music("After Dark", "Mr. Kitty", "afterdark.jpg", "afterdark.mp3"),
    new Music("Kino", "Macan", "kino.jpg", "kino.mp3")
];