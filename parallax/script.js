let first = document.getElementById("first");
let last = document.getElementById("last");
let text = document.getElementById("text");

window.addEventListener("scroll", function () {
  var val = window.scrollY;
  console.log(val);
  first.style.top = val * 0.7 + "px";
  last.style.bottom = val * 0.5 + "px";
  text.style.top = val * 1 + "px";
});
