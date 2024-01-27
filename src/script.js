const music = document.getElementById("universe");
const mute_icon = document.getElementById("mute");
const play_icon = document.getElementById("play");
mute_icon.addEventListener("click", function () {
    if (music.onpause()) {
        music.onplay();
        play_icon.style.display = "inline";
        mute_icon.style.display = "none";
    }
});
