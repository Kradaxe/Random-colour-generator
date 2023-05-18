
const btn = document.querySelector("#btn");
const container = document.querySelector(".container");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const thehex = document.querySelector(".thehex");

container.addEventListener("click", function () {
  let s = "#";

  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * 16);
    s += hex[randomIndex];
  }

  container.style.backgroundColor = s;
  thehex.innerHTML = s;

});


