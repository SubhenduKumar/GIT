const params = new URLSearchParams(window.location.search)

const Name = document.getElementById("Name")
Name.append(params.get("Name"))

const Designation = document.getElementById("Designation")
Designation.append(params.get("Designation"))

const Description = document.getElementById("Description")
Description.append(params.get("Description"))

const Designation_1 = document.getElementById("Designation-1")
Designation_1.append(params.get("Designation-1"))

const Organization_1 = document.getElementById("Organization-1")
Organization_1.append(params.get("Organization-1"))

const Start_1 = document.getElementById("Start-1")
Start_1.append(params.get("Start-1"))

const End_1 = document.getElementById("End-1")
End_1.append(params.get("End-1"))

const Location_1 = document.getElementById("Location-1")
Location_1.append(params.get("Location-1"))

const JD_1 = document.getElementById("JD-1")
JD_1.append(params.get("JD-1"))


const Designation_2 = document.getElementById("Designation-2")
Designation_2.append(params.get("Designation-2"))
const Organization_2 = document.getElementById("Organization-2")
Organization_2.append(params.get("Organization-2"))

const Start_2 = document.getElementById("Start-2")
Start_2.append(params.get("Start-2"))

const End_2 = document.getElementById("End-2")
End_2.append(params.get("End-2"))
const Location_2 = document.getElementById("Location-2")
Location_2.append(params.get("Location-2"))


const JD_2 = document.getElementById("JD-2")
JD_2.append(params.get("JD-2"))

window.addEventListener('load', (event) => {
    var lines = JD_1.innerText.split('\n');
    var html = '';
    for (var i = 0; i < lines.length; i++) {
        if (lines[i].indexOf('.') !== -1) {
            var models = lines[i].split('.');
            html += '<ul><li>' + models.join('</li><li>') + '</li></ul>';
        }
    }
    JD_1.innerHTML = html;

    var lines = JD_2.innerText.split('\n');
    var html = '';
    for (var i = 0; i < lines.length; i++) {
        if (lines[i].indexOf('.') !== -1) {
            var models = lines[i].split('.');
            html += '<ul><li>' + models.join('</li><li>') + '</li></ul>';
        }
    }
    JD_2.innerHTML = html;
});

const Degree = document.getElementById("Degree")
Degree.append(params.get("Degree"))
const University = document.getElementById("University")
University.append(params.get("University"))

const Start = document.getElementById("Start")
Start.append(params.get("Start"))

const End = document.getElementById("End")
End.append(params.get("End"))


const Language_1 = document.getElementById("Language-1")
Language_1.append(params.get("Language-1"))
const Language_2 = document.getElementById("Language-2")
Language_2.append(params.get("Language-2"))
const Language_3 = document.getElementById("Language-3")
Language_3.append(params.get("Language-3"))

const Volume_1 = document.getElementById("Volume-1")
Volume_1.append(params.get("Volume-1"))
const Volume_2 = document.getElementById("Volume-2")
Volume_2.append(params.get("Volume-2"))
const Volume_3 = document.getElementById("Volume-3")
Volume_3.append(params.get("Volume-3"))




const Phone = document.getElementById("Phone")
Phone.append(params.get("Phone"))
const Email = document.getElementById("Email")
Email.append(params.get("Email"))
const Location = document.getElementById("Location")
Location.append(params.get("Location"))
const linkedin = document.getElementById("linkedin")
linkedin.append(params.get("linkedin-url"))
const skype_url = document.getElementById("skype-url")
skype_url.append(params.get("skype-url"))



const Skills = document.getElementById("Skills")
const keys = params.get("Skills").split(",")
keys.forEach(e => {
    const span = document.createElement('span');
    span.innerText = e;
    span.classList.add("btn", "btn-danger", "m-1", "p-1")
    Skills.appendChild(span)
})


const Organisation_1 = document.getElementById("Organisation-1")
Organisation_1.append(params.get("Organisation-1"))

const from_year_1 = document.getElementById("from-year-1")
from_year_1.append(params.get("from-year-1"))
const to_year_1 = document.getElementById("to-year-1")
to_year_1.append(params.get("to-year-1"))



const Organisation_2 = document.getElementById("Organisation-2")
Organisation_2.append(params.get("Organisation-2"))

const from_year_2 = document.getElementById("from-year-2")
from_year_2.append(params.get("from-year-2"))
const to_year_2 = document.getElementById("to-year-2")
to_year_2.append(params.get("to-year-2"))


const Organisation_3 = document.getElementById("Organisation-3")
Organisation_3.append(params.get("Organisation-3"))

const from_year_3 = document.getElementById("from-year-3")
from_year_3.append(params.get("from-year-3"))
const to_year_3 = document.getElementById("to-year-3")
to_year_2.append(params.get("to-year-3"))



const Honour_1 = document.getElementById("Honour-1")
Honour_1.append(params.get("Honour-1"))

const Award_1 = document.getElementById("Award-1")
Award_1.append(params.get("Award-1"))

const Honour_2 = document.getElementById("Honour-2")
Honour_2.append(params.get("Honour-2"))

const Award_2 = document.getElementById("Award-2")
Award_2.append(params.get("Award-2"))

const Honour_3 = document.getElementById("Honour-3")
Honour_3.append(params.get("Honour-3"))

const Award_3 = document.getElementById("Award-3")
Award_3.append(params.get("Award-3"))





const Course_1 = document.getElementById("Course-1")
Course_1.append(params.get("Course-1"))

const Subtitle_1 = document.getElementById("Subtitle-1")
Subtitle_1.append(params.get("Subtitle-1"))

const Course_2 = document.getElementById("Course-2")
Course_2.append(params.get("Course-2"))

const Subtitle_2 = document.getElementById("Subtitle-2")
Subtitle_2.append(params.get("Subtitle-2"))

const Course_3 = document.getElementById("Course-3")
Course_3.append(params.get("Course-3"))

const Subtitle_3 = document.getElementById("Subtitle-3")
Subtitle_3.append(params.get("Subtitle-3"))

const Course_4 = document.getElementById("Course-4")
Course_4.append(params.get("Course-4"))

const Subtitle_4 = document.getElementById("Subtitle-4")
Subtitle_4.append(params.get("Subtitle-4"))