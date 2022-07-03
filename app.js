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
    fetch(API_URL)
        .then(response => response.json())
        .then(result => {
            console.log(result)
        });
}

randomQuote()