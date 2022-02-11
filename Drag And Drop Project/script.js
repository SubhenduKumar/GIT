const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');


const one = document.getElementById("1")
const two = document.getElementById("2")
const three = document.getElementById("3")
const four = document.getElementById("4")


const five = document.getElementById("5")
const six = document.getElementById("6")
const seven = document.getElementById("7")


const eight = document.getElementById("8")
const nine = document.getElementById("9")
const ten = document.getElementById("10")
const eleven = document.getElementById("11")

const sub = document.getElementById("sub")

const winner = document.getElementById("winner")


let draggedItem = null;

for (let i = 0; i < list_items.length; i++) {
    const item = list_items[i];

    item.addEventListener('dragstart', function() {
        draggedItem = item;
        setTimeout(function() {
            item.style.display = 'none';
        }, 0)
    });

    item.addEventListener('dragend', function() {
        setTimeout(function() {
            draggedItem.style.display = 'block';
            draggedItem = null;
        }, 0);
    })

    for (let j = 0; j < lists.length; j++) {
        const list = lists[j];

        list.addEventListener('dragover', function(e) {
            e.preventDefault();
        });

        list.addEventListener('dragenter', function(e) {
            e.preventDefault();
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
        });

        list.addEventListener('dragleave', function(e) {
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        });

        list.addEventListener('drop', function(e) {
            this.append(draggedItem);
            this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        });
    }
}



sub.addEventListener("click", check)
let win1 = false
let win2 = false
let win3 = false

function check() {
    try {
        if (one.nextElementSibling.classList.contains("2")) {
            if (two.nextElementSibling.classList.contains("3")) {
                if (three.nextElementSibling.classList.contains("4")) {
                    win1 = true
                }
            }
        }
        if (five.nextElementSibling.classList.contains("6")) {
            if (six.nextElementSibling.classList.contains("7")) {
                win2 = true
            }
        }
        if (eight.nextElementSibling.classList.contains("9")) {
            if (nine.nextElementSibling.classList.contains("10")) {
                if (ten.nextElementSibling.classList.contains("11")) {
                    win3 = true
                }
            }
        }


        if (win1 == true && win2 == true && win3 == true) {
            winner.innerText = "You Won The Game!!"
            winner.style.color = "darkslategrey"
            winner.style.fontSize = "50px"
        } else {
            winner.innerText = "Not Yet Sorted... Sort Again.."
            winner.style.color = "red"
            winner.style.fontSize = "50px"
        }


    } catch (e) {
        winner.innerText = "Not Yet Sorted... Sort Again.."
        winner.style.color = "red"
        winner.style.fontSize = "50px"
    }}
