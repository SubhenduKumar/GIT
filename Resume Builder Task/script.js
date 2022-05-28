const reset1 = document.querySelectorAll("input");
const reset2 = document.querySelectorAll("textarea");
const clearAll = document.getElementById("reset")
clearAll.addEventListener("click", clear)

function clear(e) {
    e.preventDefault()
    reset1.forEach(e => {
        if (e.value !== "Reset" && e.value !== "Submit")
            e.value = ""
    })
    reset2.forEach(e => {
        if (e.value !== "Reset" && e.value !== "Submit")
            e.value = ""
    })
}