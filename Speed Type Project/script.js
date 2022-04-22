const quotesText = document.getElementById('quote')
const checktext = document.getElementById('type')
const timer = document.getElementById('timer')

function randomQuote() {
    return fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => data.content)
}
async function newQuote() {
    const quote = await randomQuote()
    quotesText.innerHTML = ''
    quote.split('').forEach(e => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = e
        quotesText.appendChild(characterSpan)
    })
    checktext.value = ""
    startTimer()
}
newQuote()


checktext.addEventListener('input', () => {
    const arrQuote = quotesText.querySelectorAll('span')
    const arr = checktext.value.split('')

    let state = true
    let count = 0
    arrQuote.forEach((elementSpan, index) => {
        if (arr[index] == null) {
            elementSpan.classList.remove('green')
            elementSpan.classList.remove('red')
            state = false
        } else if (arr[index] === elementSpan.innerText) {
            elementSpan.classList.add('green')
            elementSpan.classList.remove('red')
            count++;
        } else {
            elementSpan.classList.remove('green')
            elementSpan.classList.add('red')
            state = false
        }
    })

    if (arrQuote.length === arr.length) {

        let wordCount = checktext.value.split(" ").length
        console.log(wordCount);
        console.log(count);
        alert("Accuracy is " + (Math.floor((count / arrQuote.length) * 100)) + "%")

        alert("Typing Speed " + Math.round((wordCount * 60) / newtime) + " WPM")
        newQuote()
    }
})

let startTime
let newtime

function startTimer() {
    timer.innerText = 0
    startTime = new Date()
    setInterval(() => {
        timer.innerText = getTime()
        newtime = timer.innerText
    }, 1000)
}

function getTime() {
    return Math.floor((new Date() - startTime) / 1000)
}
