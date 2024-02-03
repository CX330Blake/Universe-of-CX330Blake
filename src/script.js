document.addEventListener(
    "touchmove",
    (e) => {
        e.preventDefault();
    },
    { passive: false }
);

// Music button
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
mute_icon.addEventListener("mouseover", function () {
    mute_icon.style.transform = "scale(1.2)";
});
mute_icon.addEventListener("mouseout", function () {
    mute_icon.style.transform = "scale(1)";
});
play_icon.addEventListener("click", function () {
    if (!music.paused) {
        music.pause();
        play_icon.style.display = "none";
        mute_icon.style.display = "inline";
    }
});
play_icon.addEventListener("mouseover", function () {
    play_icon.style.transform = "scale(1.2)";
});
play_icon.addEventListener("mouseout", function () {
    play_icon.style.transform = "scale(1)";
});

// Social media button
const fb = document.getElementById("facebook");
const ig = document.getElementById("instagram");
const github = document.getElementById("Github");
const linkedin = document.getElementById("linkedin");
const gmail = document.getElementById("gmail");
fb.addEventListener("click", function () {
    var url = "https://www.facebook.com/profile.php?id=100011698690769";
    window.open(url);
});
function to_button(svg, url = "", msg = "") {
    if (url) {
        svg.addEventListener("click", function () {
            url = url;
            window.open(url);
        });
    }
    if (msg) {
        svg.addEventListener("click", function () {
            navigator.clipboard
                .writeText(msg)
                .then(function () {
                    alert("Copied");
                })
                .catch(function (error) {
                    console.error("Error copying text: ", error);
                });
        });
    }
    svg.addEventListener("mouseover", function () {
        svg.style.transform = "scale(1.2)";
        // 光標懸浮發光
    });
    svg.addEventListener("mouseout", function () {
        svg.style.transform = "scale(1)";
    });
}
to_button(github, "https://github.com/CX330Blake");
to_button(ig, "");
to_button(fb, "https://www.facebook.com/profile.php?id=100011698690769");
to_button(linkedin, "https://www.linkedin.com/in/%E5%AD%90%E9%9B%8B-%E9%99%B3-11087825b/");
to_button(gmail, "", "timchen975@gmail.com");

//增加點擊空白處特效
