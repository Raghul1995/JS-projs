const colorBtn = document.querySelector(".clickbtn");
const bodyBcg = document.querySelector("body");
const hexNum= [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const hex = document.querySelector(".hex");
//Event listners
colorBtn.addEventListener("click", getHex);

//functions
function getHex(){
    let hexcol = "#";
    for(let i=0; i<6;i++){
    let rand = Math.floor(Math.random() * hexNum.length);
    hexcol +=hexNum[rand];
      }
      bodyBcg.style.backgroundColor = hexcol;
      hex.innerHTML = hexcol;
}
