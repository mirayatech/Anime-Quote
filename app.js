const quoteText = document.querySelector(".quote")
const quoteBtn = document.querySelector("button")
const authorName = document.querySelector(".name")
const animeName = document.querySelector(".anime")
const speechBtn = document.querySelector(".sound")
const copyBtn = document.querySelector(".copy")
const twitterBtn = document.querySelector(".twitter")
const synth = document.querySelector(".sound")
const API_URL = "https://animechan.vercel.app/api/random"




function randomQuote() {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    fetch(API_URL)
        .then(response => response.json())
        .then(result => {
            quoteText.innerText = result.quote;
            authorName.innerText = result.character;
            animeName.innerText = ` (${result.anime})`;
            quoteBtn.classList.remove("loading");
            quoteBtn.innerText = "New Quote";
        });
}

speechBtn.addEventListener("click", () => {
    if (!quoteBtn.classList.contains("loading")) {
        let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
        synth.speak(utterance);
        setInterval(() => {
            !synth.speaking ? speechBtn.classList.remove("active") : speechBtn.classList.add("active");
        }, 10);
    }
});

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteText.innerText);
});

quoteBtn.addEventListener("click", randomQuote);