export default class Song {
    constructor(song) {
        this.title = song.trackName
        //Change 250x250 if you want a larger image
        this.albumArt = song.artworkUrl60.replace(/150x150/g, "250x250")
        this.artist = song.artistName
        this.collection = song.collectionName
        this.price = song.collectionPrice
        this.preview = song.previewUrl
    }
    getTemplate() {
        return `
    <div class="col-12 col-md-4">
    <div class="card">
    <img class="card-img-top" src="..." alt="">
    <div class="card-body">
    <audio controls style="width: 11rem;">
    <source src="${this.preview}" type="audio/mpeg">
    </audio>
    <p class="card-text"></p>
    </div>

    <img src="${this.albumArt}">
    <class="this.title text-truncate">${this.title}
    <class="this.collection text-truncate">${this.collection}
    <class="this.artist text-truncate">${this.artist}
<class="this.price text-truncate">${this.price}
    </div>
    </div>
    `
    }
}