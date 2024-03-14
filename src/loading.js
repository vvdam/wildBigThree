var loader = document.querySelector(".loading");
// window.addEventListener("load", function () {
//   loader.style.display = "none";
// });

setTimeout(() => {
  setTimeout(() => {
    loader.style.display = "none";
  }, 300);
  loader.style.opacity = "0";
}, 1000);
