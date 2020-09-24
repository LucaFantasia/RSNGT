var studentNames = [];
var studentDisplayed = [];
var randomNumber;
var x;
var menu = document.getElementById("myList");
menu.addEventListener("change", generateData);
 function generateData(event) {
    if (menu.value == '11') {
        setArrays11();

    } else if (menu.value == '10') {
        setArrays10();
    }
}
var absentAll = [];
var skip = false;
var absentCount = 0;
 if (menu.value == '10') {
    absentAll = ["No", "No", "No", "No", "No", "No", "No", "No", "No", "No", "No", "No", "No",
        "No", "No", "No", "No", "No", "No", "No", "No"];
}
if (menu.value == '11') {
    absentAll = ["No", "No", "No", "No", "No", "No", "No", "No", "No", "No", "No", "No", "No",
        "No", "No", "No", "No", "No"];
}
menu.addEventListener("change", function () {
    if (menu.value == '10') {
        absentAll = ["No", "No", "No", "No", "No", "No", "No", "No", "No", "No", "No", "No", "No",
            "No", "No", "No", "No", "No", "No", "No", "No"];
    }
    if (menu.value == '11') {
        absentAll = ["No", "No", "No", "No", "No", "No", "No", "No", "No", "No", "No", "No", "No",
            "No", "No", "No", "No", "No"];
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
    if (menu.value == '11') {
        absentAll[randomNumber] = "Yes";
        console.log(studentNames[randomNumber] + " is absent");
        document.getElementById("radio").checked = false;
        skip = true;
        absentCount++;
    } if (menu.value == '10') {
        absentAll[randomNumber] = "Yes";
        console.log(studentNames[randomNumber] + " is absent");
        document.getElementById("radio").checked = false;
        skip = true;
        absentCount++;
    }
} 
function createTable() {
    var table = "<table id='tableDisplay' class='tables'>";
    table = table + "<tr>" + "<td width='75px' class='tables'>" + "<h4>Name</h4>" + "</td>" +
     "<td width='75px' class='tables'>" +
   "<h4>Correct</h4>" + "</td>" + "<td width='75px' class='tables'>" + "<h4>Wrong</h4>" + "</td>" + 
   "<td width='75px' class='tables'>" + 
   "<h4>Absent</h4>" +"</td>" + "</tr>";
    for(i = 0; i < studentNames.length; i++) {
        table = table + "<tr>";
        table = table + "<td width='75px' class='tables'>";
        table = table + studentNames[i];
        table = table + "</td>";
        table = table + "<td width='75px' class='tables'>";
        table = table + reportCorrect[i];
        table = table + "</td>";
        table = table + "<td width='75px' class='tables'>";
        table = table + reportWrong[i];
        table = table + "</td>";
        table = table + "<td width='75px' class='tables'>";
        table = table + absentAll[i];
        table = table + "</td>";
        table = table + "</tr>";
    }
    table = table + "</table>";
    document.getElementById("mainTable").innerHTML = table;
}
document.getElementById("correct").addEventListener("click", function() {
    var mainTable = document.getElementById("tableDisplay");
    mainTable.rows[randomNumber].cells[1].innerHTML = reportCorrect[randomNumber] + 1;
});
document.getElementById("wrong").addEventListener("click", function() {
    var mainTable = document.getElementById("tableDisplay");
    mainTable.rows[randomNumber].cells[2].innerHTML = reportWrong[randomNumber] + 1;
});
document.getElementById("radio").addEventListener("click", function() {
    var mainTable = document.getElementById("tableDisplay");
    mainTable.rows[randomNumber].cells[3].innerHTML = absentAll[randomNumber];
});
var reportCorrect = [];
var reportWrong = [];
  if (menu.value == '11') {
    reportCorrect = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    reportWrong = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
} if (menu.value == '10') {
    reportCorrect = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    reportWrong = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}
menu.addEventListener("change", ticks);
function ticks(event) {
    if (menu.value == '11') {
        reportCorrect = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        reportWrong = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
    } if (menu.value == '10') {
        reportCorrect = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        reportWrong = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
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
function setArrays11() {
    studentNames = ["Adriana", "Allan", "Carolina", "Cecilia", "Dinis", "Holly", "JJ",
        "JM", "Laura", "Luca", "Luna", "Maria", "Miguel", "Myro", "Sandro",
        "Sebastian", "Sofia F", "Tilly"];
    studentDisplayed = [false, false, false, false, false, false, false, false, false, false,
        false, false, false, false, false, false, false, false];
    count = studentNames.length;
    document.getElementById("button").value = count - absentCount;
}
function setArrays10() {
    studentNames = ["Adam", "Anais", "Beatriz", "Bernado", "Catarina", "Daniela", "Elliot", "Emily", "Guilherme",
        "Kiana", "Lauren", "Lena", "Luca", "Luisa", "Mariana", "Micheal", "Sam", "Sofia A", "Sofia C", "Sofia M",
        "Tarushi"];
    studentDisplayed = [false, false, false, false, false, false, false, false,
        false, false, false, false, false,
        false, false, false, false, false, false, false, false];
    count = studentNames.length;
    document.getElementById("button").value = count - absentCount;
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
