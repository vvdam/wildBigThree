const loader = document.querySelector(".loading");
// window.addEventListener("load", function () {
//   loader.style.display = "none";
// });

setTimeout(() => {
    setTimeout(() => {
        loader.style.display = "none";
    }, 300);
    loader.style.opacity = "0";
}, 1500);

const videoFond = document.getElementById("myVideo");

videoFond.playbackRate = 0.2; //vitesse de lecture du fond
