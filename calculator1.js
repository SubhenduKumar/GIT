var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var operator = document.getElementById("operator");
var result = document.getElementById("result");


function calculator() {
    var n1v = Number(num1.value);
    var n2v = Number(num2.value);
    var ov = operator.value

    if (num1.value === "") {
        alert("enter no 1")
    } else if (num2.value === "") {
        alert("enter no 2")
    } else {
        if (ov === "+") {
            result.value = n1v + n2v;

        } else if (ov === "-") {
            result.value = n1v - n2v;
        } else if (ov === "*") {
            result.value = n1v * n2v;
        } else
            result.value = n1v / n2v;
    }
}