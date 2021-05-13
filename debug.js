
var chosenimg = getRndInteger(1, 5)

var codesample = new Image()
codesample.src = "DebugCode/code" + chosenimg + ".png"
codesample.style = "margin-right: auto; margin-left: auto; display:block; margin-top:5%"
document.body.appendChild(codesample)

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}