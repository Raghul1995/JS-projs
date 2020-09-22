let counter = document.querySelector("#Zero");
const addCount = document.querySelector("#addBtn");
const lowrCount = document.querySelector("#lowrBtn");

let count = 0;

addCount.addEventListener("click",increment);
lowrCount.addEventListener("click",decrement);

function increment (){
    count ++;
    counter.innerHTML = count;
    
    if(counter.innerHTML>"0"){
        counter.style.color= "red";
        document.getElementById("Zero").animate([
            { transform: 'translate3D(0, 0, 0)' }, 
            { transform: 'translate3D(-300px, 0, 0)' }
          ], {
            duration: 1000,
            iterations: Infinity
          })
    }
    else if(counter.innerHTML==="0"){
        counter.style.color= "white";
        document.getElementById("Zero").animate([
            { transform: 'translate3D(0, 0, 0)' }, 
            { transform: 'translate3D(0, 0, 0)' }
          ], {
            duration: 1000,
            iterations: Infinity
          })
    }
}

function decrement (){
    count --;
    counter.innerHTML = count;
    
    if(counter.innerHTML<"0"){
        counter.style.color= "green";
        document.getElementById("Zero").animate([
            { transform: 'translate3D(0, 0, 0)' }, 
            { transform: 'translate3D(+300px, 0, 0)' }
          ], {
            duration: 1000,
            iterations: Infinity
          })
    }
    else if(counter.innerHTML==="0"){
        counter.style.color= "white";
        document.getElementById("Zero").animate([
            { transform: 'translate3D(0, 0, 0)' }, 
            { transform: 'translate3D(0, 0, 0)' }
          ], {
            duration: 1000,
            iterations: Infinity
          })
    }
}
