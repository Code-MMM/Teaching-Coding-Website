
var chosenimg = getRndInteger(1, 3)

var opt1 = document.getElementById("opt1")
opt1.innerText = getOptions(chosenimg)[0]
opt1.onclick = function () {ValidateAnswer(getOptions(chosenimg)[0])}

var opt2 = document.getElementById("opt2")
opt2.innerText = getOptions(chosenimg)[1]
opt2.onclick = function () {ValidateAnswer(getOptions(chosenimg)[1])}

var opt3 = document.getElementById("opt3")
opt3.innerText = getOptions(chosenimg)[2]
opt3.onclick = function () {ValidateAnswer(getOptions(chosenimg)[2])}

var codesample = new Image()
codesample.src = "DebugCode/code" + chosenimg + ".png"
codesample.style = "margin-right: auto; margin-left: auto; display:block; margin-top:5%"
codesample.id = "gameimg"
document.body.appendChild(codesample)



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getOptions(imgno) {
    switch(imgno) {
        case 1:
            return ["Code uses : instead of brackets", "Code does not put () around the conditions of the if statement", "Indentation is not proper", "Add indentation in lines 4, 6 and 8.", "Convert the inputs to integers", "Nothing, it is fine as is."]
            break;
        case 2:
            return ["There is no return statement in the CircleR function", "There is a bracket mismatch", "A semicolon is missing."]
            break;
        case 3:
            return ["The numbers are not in the float type.", "Missing semi colons", "The True and False have to be lowercase"]
            break;

    }
}

function ValidateAnswer(answer) {
    switch(chosenimg) {
        case 1:
            if (answer == "Indentation is not proper") {alert("You got it correct!"); reload()}
            else {alert("You got it wrong, try again!");}
            break;
        case 2:
            if (answer == "There is no return statement in the CircleR function") {alert("You got it correct!"); reload()}
            else {alert("You got it wrong, try again!");}
            break;
        case 3:
            if (answer == "The True and False have to be lowercase") {alert("You got it correct!"); reload()}
            else {alert("You got it wrong, try again!");}
            break;

    }
}


function reload() {
    var newoptions = [];
    var options = [1, 2, 3]
    switch(chosenimg) {
        case 1:
            options.shift()
            newoptions = options
            break;
        case 2:
            options.splice(1, 1)
            newoptions = options
            break;
        case 3:
            options.pop()
            newoptions = options
            break;
    }

    console.log(newoptions)

    chosenimg = newoptions[getRndInteger(1, 2) - 1]

    console.log(chosenimg)

    codesample.src = "DebugCode/code" + chosenimg + ".png"

    opt1.innerText = getOptions(chosenimg)[0]
    opt1.onclick = function () {ValidateAnswer(getOptions(chosenimg)[0])}
    opt2.innerText = getOptions(chosenimg)[1]
    opt2.onclick = function () {ValidateAnswer(getOptions(chosenimg)[1])}
    opt3.innerText = getOptions(chosenimg)[2]
    opt3.onclick = function () {ValidateAnswer(getOptions(chosenimg)[2])}
}