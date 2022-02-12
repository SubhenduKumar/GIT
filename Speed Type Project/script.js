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
    arrQuote.forEach((elementSpan, index) => {
        if (arr[index] == "") {
            elementSpan.classList.remove('green')
            elementSpan.classList.remove('red')
            state = false
        } else if (arr[index] === elementSpan.innerText) {
            elementSpan.classList.add('green')
            elementSpan.classList.remove('red')
        } else {
            elementSpan.classList.remove('green')
            elementSpan.classList.add('red')
            state = false
        }
    })
    if (state) {
        newQuote()
    }
})

let startTime

function startTimer() {
    timer.innerText = 0
    startTime = new Date()
    setInterval(() => {
        timer.innerText = getTime()
    }, 1000)
}

function getTime() {
    return Math.floor((new Date() - startTime) / 1000)
}
