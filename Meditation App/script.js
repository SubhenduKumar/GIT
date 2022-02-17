const song = document.querySelector(".song")
const play = document.querySelector(".song-play")
const outlinecircle = document.querySelector(".moving-outline circle")
const video = document.querySelector(".video-container video")

const sounds = document.querySelectorAll(".timing div")
const rain = document.querySelector(".rain")
const beach = document.querySelector(".beach")


const time = document.querySelector(".time-display")

const outlinecircleLength = outlinecircle.getTotalLength();

let duration = 60

outlinecircle.style.strokeDasharray = outlinecircleLength;
outlinecircle.style.strokeDashoffset = outlinecircleLength;

play.addEventListener("click", () => {
    statusOfsong(song);
    outlinecircle.style.color = "white"

})

rain.addEventListener("click", () => {
    checkRain();

})
beach.addEventListener("click", () => {
    checkBeach();

})

sounds.forEach(option => {
    option.addEventListener("click", function() {
        duration = this.getAttribute("data-time")
        time.textContent = `${Math.floor(duration / 60)}:${Math.floor(duration % 60)}`;
    })
})



function checkRain() {
    video.src = "./video/rain.mp4"
    song.src = "./sounds/rain.mp3"
    statusOfsong(song);
}

function checkBeach() {
    song.src = "./sounds/beach.mp3"
    video.style.width = "100%"
    video.src = "./video/beach.mp4"
    statusOfsong(song);

}

function statusOfsong(song) {
    if (song.paused) {
        song.play();
        video.play();
        play.src = "https://img.icons8.com/ios-filled/100/000000/pause--v1.png";
    } else {
        song.pause();
        video.pause();
        play.src = "https://img.icons8.com/ios/100/000000/circled-play--v1.png"
    }
}

song.ontimeupdate = () => {
    let currentTime = song.currentTime;
    let elapsed = duration - currentTime;
    let seconds = Math.floor(elapsed % 60);
    let minutes = Math.floor(elapsed / 60);
    time.textContent = `${minutes}:${seconds}`;
    let progress = outlinecircleLength - (currentTime / duration) * outlinecircleLength;
    outlinecircle.style.strokeDashoffset = progress;

    if (currentTime >= duration) {
        song.pause();
        song.currentTime = 0;
        play.src = "https://img.icons8.com/ios/100/000000/circled-play--v1.png"
        video.pause();
    }
}