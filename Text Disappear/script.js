const textEl = document.querySelector(".text")
const btn = document.getElementById("btn")
const strtext = textEl.textContent;
const separator = strtext.split("");
textEl.textContent = "";
for (let i = 0; i < separator.length; i++) {
    textEl.innerHTML += "<span>" + separator[i] + "</span>";
}

let char = 0;
let timer = setInterval(onClick, 50);

function onClick() {
    const span = textEl.querySelectorAll('span')[char];
    span.classList.add('fade');
    setTimeout(() => span.classList.remove('fade'), 3000);
    char++;
    if (char === separator.length) {
        finish();
        return;
    }
}

function finish() {
    clearInterval(timer);
    timer = null;
}

btn.addEventListener("click", () => location.reload())