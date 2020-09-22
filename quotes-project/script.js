const quotes = [
    {
        Name: "Oscar Wilde",
        Quote: "Be yourself; everyone else is already taken"
    },
    {
        Name: "Frank Zappa",
        Quote: "So many books, so little time"
    },
    {
        Name: "Marcus Tullius Cicero",
        Quote: "A room without books is like a body without a soul"
    },
    {
        Name: "Mae West",
        Quote: "You only live once, but if you do it right, once is enough"
    },
    {
        Name: "Mahatma Gandhi",
        Quote: "Be the change that you wish to see in the world"
    },
    {
        Name: "Eleanor Roosevelt",
        Quote: "No one can make you feel inferior without your consent"
    }
]

const pressBtn = document.querySelector(".press");
const changeQuote = document.querySelector(".quote");
const authrQuote = document.querySelector(".authorquote");

pressBtn.addEventListener("click", getQuotes);

function getQuotes(){
    let rand= Math.floor(Math.random()*quotes.length);
    changeQuote.innerHTML = quotes[rand].Quote;
    authrQuote.innerHTML = quotes[rand].Name;
}
