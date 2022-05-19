const alarmAddBtn = document.getElementById("submit")
const dayOfAlarm = document.getElementById("day")
const timeOfAlarm = document.getElementById("time")
const alarms = document.getElementById("alarms")
const showTime = document.querySelector(".showTime")

class Clock {
    constructor() {
        this.alarms = []
    }
    getAlarms() {
        return this.alarms;
    }
    setAlarm(time) {
        const alarmObject = {
            id: generatedID(),
            time: setTime(time),
            on: true,
            remSnooze: 3
        }
        this.alarms.push(alarmObject)
        updateUI();
    }
    deleteAlarm(id) {
        this.alarms = this.alarms.filter((alarm) => alarm.id !== id)
        updateUI()
    }

    snoozeAlarm(id, check) {
        document.getElementById("alramAudio").pause()
        this.alarms.map((alarm) => {
            if (id === alarm.id) {

                const paragraph = document.getElementById(id).getElementsByTagName("p")[0];

                if (alarm.remSnooze === 0 || check) {
                    alarm.remSnooze = 3;
                    paragraph.innerText = "Alarm Cancelled"
                    paragraph.style.color = "red"
                    const newTime = Date.now(alarm.time) + 7 * 24 * 60 * 60 * 1000 - 5 * (3 - alarm.remSnooze) * 60 * 1000;
                    alarm.time = setTime(new Date(newTime))
                } else {
                    paragraph.innerText = "Snoozing for 5 Mins"
                    alarm.remSnooze -= 1;
                    paragraph.style.color = "#33b5e5"
                    const newTime = Date.now(alarm.time) + 5 * 60 * 1000;
                    alarm.time = setTime(new Date(newTime))
                }
                setTimeout(() => updateUI(), 2000)
            }
            return alarm;
        })
    }

    runAlarm(id) {
        const song = document.getElementById("alramAudio");
        song.currentTime = 0
        song.play();
        console.log(`Alarm is ringing {id:${id}} `)
    }
    showIt() {
        return showTime.innerText = Date().slice(0, 21)
    }
}


const clock = new Clock()
setInterval(() => clock.showIt(), 1000)

const compareTimesame = (time1, time2) => {
    if (setTime(new Date(time1)) === setTime(new Date(time2))) {
        return true;
    } else {
        return false;
    }
}
setInterval(function() {
    const alarms = clock.getAlarms();
    alarms.forEach((itemAlarm) => {
        if (compareTimesame(itemAlarm.time, new Date())) {
            clock.runAlarm(itemAlarm.id)
            const item = document.getElementById(itemAlarm.id);
            const paragraph = document.createElement("p");
            paragraph.innerText = "Alarm Ringing..."
            paragraph.style.color = "green"
            const btn1 = document.createElement("button");
            const btn2 = document.createElement("button");
            btn1.classList.add("btn", "btn-outline-info", "m-2", "p-2")
            btn2.classList.add("btn", "btn-outline-danger", "m-2", "p-2")
            btn1.innerHTML = `Snooze<img src = "https://img.icons8.com/ios-filled/40/000000/alarm-snooze.png" />`
            btn2.innerHTML = `Cancel<img src="https://img.icons8.com/ios-glyphs/40/000000/cancel.png"/>`
            item.appendChild(paragraph)
            item.appendChild(btn1)
            item.appendChild(btn2)
            btn1.addEventListener("click", () => snoozeSnooze(itemAlarm.id))
            btn2.addEventListener("click", () => snoozeCancel(itemAlarm.id))
        }
    })
}, 30 * 1000)

function snoozeCancel(rcvdAlarmId) {
    console.log("cancel");
    clock.snoozeAlarm(rcvdAlarmId, true)
}

function snoozeSnooze(rcvdAlarmId) {
    console.log("snz");
    clock.snoozeAlarm(rcvdAlarmId, false)
}

alarmAddBtn.addEventListener("click", function() {
    console.log(timeOfAlarm.value, dayOfAlarm.value)

    const hh = parseInt(timeOfAlarm.value.split(":")[0])
    const min = parseInt(timeOfAlarm.value.split(":")[1])

    const nowDate = new Date().getDate()
    const nowDay = new Date().getDay()
    const nowHours = new Date().getHours()
    const nowMins = new Date().getMinutes()
    const nowYear = new Date().getFullYear()
    const nowMonth = new Date().getMonth()

    let date = nowDate - nowDay + parseInt(dayOfAlarm.value)
    if (date < nowDate || (date === nowDate && (hh < nowHours || (hh === nowHours && min <= nowMins)))) {
        date = date + 7
    }
    let timeForAlarm = new Date(nowYear, nowMonth, date, hh, min, 0, 0);
    clock.setAlarm(timeForAlarm)

})

const updateUI = () => {
    alarms.innerHTML = "";
    const mountAlarms = clock.getAlarms().sort(function(a, b) {
        return new Date(a.time) - new Date(b.time)
    })


    mountAlarms.forEach((alarm) => {
        addUpdatedAlarmToUI(alarm.time, alarm.id)
    })
}

const addUpdatedAlarmToUI = (timeForAlarm, id) => {
    const day = new Date(timeForAlarm).getDay()
    const timeHH = new Date(timeForAlarm).getHours()
    const timeMin = new Date(timeForAlarm).getMinutes()
    const alarmEl = document.createElement("div")


    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const dayName = days[day];

    alarmEl.innerHTML = `<h3 id=${id}>
    ${alarms.childElementCount +1}. ${dayName} ${timeHH.toString().padStart(2,"0")}:${timeMin.toString().padStart(2,"0")}
    <button onClick="clock.deleteAlarm(${id})" class="btn btn-outline-danger" style="float:right">Delete<img src="https://img.icons8.com/plasticine/30/000000/filled-trash.png"/></button>
    </h3>
    <p>Alarm on ${new Date(timeForAlarm)}</p> 
    
    `
    alarms.style.border = "5px solid grey"
    alarms.style.borderRadius = "5px"
    alarms.appendChild(alarmEl)
    alarms.classList.add()
}

function setTime(time) {
    const newTime = new Date(time).setMilliseconds(0);
    return new Date(newTime).setSeconds(0)
}

function generatedID() {
    return Math.floor(Math.random() * Date.now())
}