const music = document.getElementById("universe");
const mute_icon = document.getElementById("mute");
const play_icon = document.getElementById("play");
mute_icon.addEventListener("click", function () {
    if (music.paused) {
        music.play();
        play_icon.style.display = "inline";
        mute_icon.style.display = "none";
    }
});
play_icon.addEventListener("click", function () {
    if (!music.paused) {
        music.pause();
        play_icon.style.display = "none";
        mute_icon.style.display = "inline";
    }
});
