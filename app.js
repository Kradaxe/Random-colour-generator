let a = document.querySelector(".container");
let b = ["red","blue","green","yellow","pink"];
const thehex = document.querySelector(".thehex");

a.addEventListener("click", function(){

    let c = Math.floor(Math.random()*5);
    a.style.backgroundColor = b[c];
    thehex.innerHTML = b[c];

});