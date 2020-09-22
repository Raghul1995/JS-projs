
const colorBtn = document.querySelector(".clickbtn");
const bodyBcg = document.querySelector("body");
const colors= ["red", "blue", "grey", "yellow"];

//Event listners
colorBtn.addEventListener("click", changeColor);

//functions
function changeColor(){
    let rand = Math.floor(Math.random() * colors.length)
    bodyBcg.style.backgroundColor = colors[rand];
}
