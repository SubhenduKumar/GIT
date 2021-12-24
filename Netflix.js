const serieses = document.querySelectorAll(".Series");
serieses.forEach(Series => {
    Series.addEventListener("click", function() {
        removeActiveClasses()
        Series.classList.add("active")
    })
});



function removeActiveClasses() {
    serieses.forEach(Series => {
        Series.classList.remove("active");
    })
}

function red(x) {
    x.classList.toggle("color");
}

function black(x) {
    x.classList.toggle("colorblack");

}