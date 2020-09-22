const previousButton = document.querySelector(".prevBtn");
const nextButton = document.querySelector(".nextBtn");
const container = document.querySelector(".images");

let counter = 1;

nextButton.addEventListener("click", nextSlide);
previousButton.addEventListener("click", prevSlide);

function nextSlide() {
    container.animate([{opacity:"0,5"},{opacity:"1,0"}]
    ,{duration:5000, fill:"forwards"});
    if(counter === 5){
        counter = 0;
    }
    counter++;
    container.style.backgroundImage = `url(img/bcg-${counter}.jpg)`
    console.log(container)
}

function prevSlide() {
    container.animate([{opacity:"0,1"},{opacity:"1,0"}]
    ,{duration:1000, fill:"forwards"});
    if(counter === 1){
        counter = 6;
    }
    counter--;

    container.style.backgroundImage = `url(img/bcg-${counter}.jpg)`
}
