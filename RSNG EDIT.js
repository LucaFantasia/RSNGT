var studentNames = [];
var studentDisplayed = [];
var randomNumber;
var x;
var menu = document.getElementById("myList");
menu.addEventListener("change", generateData);
function generateData(event) {
    if (menu.value == '10') {
        setArrays10();

    } else if (menu.value == '9') {
        setArrays9();
    }
}
var absentAll = [];
var skip = false;
var absentCount = 0;
if (menu.value == '9') {
    absentAll = ["No", "No", "No", "No", "No", "No", "No", "No", "No", "No", "No", "No", "No",
        "No", "No", "No", "No", "No", "No", "No", "No", "No", "No", "No"];
}
if (menu.value == '10') {
    absentAll = ["No", "No", "No", "No", "No", "No", "No", "No", "No", "No", "No", "No", "No",
        "No", "No", "No", "No", "No", "No", "No", "No"];
}
menu.addEventListener("change", function () {
    if (menu.value == '9') {
        absentAll = ["No", "No", "No", "No", "No", "No", "No", "No", "No", "No", "No", "No", "No",
            "No", "No", "No", "No", "No", "No", "No", "No", "No", "No", "No"];
    }
    if (menu.value == '10') {
        absentAll = ["No", "No", "No", "No", "No", "No", "No", "No", "No", "No", "No", "No", "No",
            "No", "No", "No", "No", "No", "No", "No", "No"];
    }
});
document.getElementById("radio").addEventListener("click", absent)
function absent(event) {
    var red_colour = "#ff0000";
    var readyPlayerOne = document.getElementById("test");
    readyPlayerOne.style.color = red_colour;
    readyPlayerOne.innerHTML = studentNames[randomNumber] + " (Absent)";
    setTimeout(back, 100);
    function back() {
        readyPlayerOne.style.color = "#000000";
    }
    if (menu.value == '10') {
        absentAll[randomNumber] = "Yes";
        console.log(studentNames[randomNumber] + " is absent");
        document.getElementById("radio").checked = false;
        skip = true;
        absentCount++;
    } if (menu.value == '9') {
        absentAll[randomNumber] = "Yes";
        console.log(studentNames[randomNumber] + " is absent");
        document.getElementById("radio").checked = false;
        skip = true;
        absentCount++;
    }
}
var tableDisplay = document.getElementById("tableDisplay");
function table() {
    for (s = 0; s < studentNames.length; s++) {
        tableDisplay.rows[s].cells[0].innerHTML = studentNames[s];
        tableDisplay.rows[s].cells[1].innerHTML = reportCorrect[s];
        tableDisplay.rows[s].cells[2].innerHTML = reportWrong[s];
        tableDisplay.rows[s].cells[3].innerHTML = absentAll[s];
    }
}
document.getElementById("correct").addEventListener("click", function () {
    tableDisplay.rows[randomNumber].cells[1].innerHTML = reportCorrect[randomNumber] + 1;

});
document.getElementById("wrong").addEventListener("click", function () {
    tableDisplay.rows[randomNumber].cells[2].innerHTML = reportWrong[randomNumber] + 1;
});
document.getElementById("radio").addEventListener("click", function () {
    tableDisplay.rows[randomNumber].cells[3].innerHTML = absentAll[randomNumber];
})
var reportCorrect = [];
var reportWrong = [];
if (menu.value == '10') {
    reportCorrect = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    reportWrong = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
} if (menu.value == '9') {
    reportCorrect = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    reportWrong = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}
menu.addEventListener("change", ticks);
function ticks(event) {
    if (menu.value == '10') {
        reportCorrect = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        reportWrong = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    } if (menu.value == '9') {
        reportCorrect = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        reportWrong = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
}
document.getElementById("correct").addEventListener("click", correct);
function correct(event) {
    var green = "#00ff00";
    document.body.style.backgroundColor = green;
    setTimeout(right, 100);
    function right() {
        document.body.style.backgroundColor = "rgb(185, 185, 185)";
    }
    document.getElementById("correct").checked = false;
    reportCorrect[randomNumber]++;
}
document.getElementById("wrong").addEventListener("click", wrong);
function wrong(event) {
    var red = "#ff0000";
    document.body.style.backgroundColor = red;
    setTimeout(incorrect, 100);
    function incorrect() {
        document.body.style.backgroundColor = "rgb(185, 185, 185)";
    }
    document.getElementById("wrong").checked = false;
    reportWrong[randomNumber]++;
}
var count = 0;
document.getElementById("button").value = count;
generateData(event);
function setArrays10() {
    studentNames = ["Adriana","Afonso","Allan","Carolina","Cecilia","Dinis","Holly","JJ",
    "JM","Laura","Luca","Luna","Maria","Miguel","Myro","Sandro",
    "Sebastian","Sofia F","Sofia G","Tian","Tilly"];
    studentDisplayed = [false, false, false, false, false, false, false, false, false, false,
        false, false, false, false, false, false, false, false, false, false, false];
    count = studentNames.length;
    document.getElementById("button").value = count;
}
function setArrays9() {
    studentNames = ["Adam","Amelia","Anais","Beatriz","Bernado","Catarina","Daniela","Elliot","Emily","Guilherme",
    "Kiana","Lauren","Lena","Luca","Luisa","Maria","Mariana","Pedro","Sam","Sarah","Sofia A","Sofia C","Sofia M",
    "Tarushi"];
    studentDisplayed = [false, false, false, false, false, false, false, false,
        false, false, false, false, false,
        false, false, false, false, false, false, false, false, false, false, false];
    count = studentNames.length;
    document.getElementById("button").value = count;
}
function setNames() {
    do {
        randomNumber = Math.floor(Math.random() * studentNames.length);
    } while (studentDisplayed[randomNumber] == true || absentAll[randomNumber] == "Yes");
    studentDisplayed[randomNumber] = true;
    document.getElementById("test").innerHTML = studentNames[randomNumber];
    count--;
    document.getElementById("button").value = count;
    if (count == 0) {
        generateData(event);
        if (skip == true) {
            for (a = 0; a < absentCount; a++) {
                count--;
            }
        }
        return;
    }
}