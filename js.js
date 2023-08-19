var gambar = document.querySelector(".madd");
window.addEventListener("load", function () {
  gambar.style.display = "none";
});
var dep = document.querySelector(".madd-dua");
window.addEventListener("load", function () {
  dep.style.display = "none";
});
var ter = document.querySelector(".bg");
window.addEventListener("load", function () {
  ter.style.display = "none";
});
const menu = document.querySelector(".menu-toggle input");
const ul = document.querySelector("nav ul");

menu.addEventListener("click", function () {
  ul.classList.toggle("slide");
});

const container = document.querySelector("container");
const jumbu = document.querySelector("jumbo");

container.addEventListener("click", function (e) {
  if (e.target.classList == "thumb") {
    jumbu.scr = e.target.src;
  }
});
