
var chosenimg = getRndInteger(1, 3)

var opt1 = document.createElement("button")
opt1.innerHTML = getOptions(chosenimg)[0]
opt1.className = "CenterButton"
document.body.appendChild(opt1)

var opt2 = document.createElement("button")
opt2.innerHTML = getOptions(chosenimg)[1]
opt2.className = "CenterButton"
document.body.appendChild(opt2)

var opt3 = document.createElement("button")
opt3.innerHTML = getOptions(chosenimg)[2]
opt3.className = "CenterButton"
document.body.appendChild(opt3)

var codesample = new Image()
codesample.src = "DebugCode/code" + chosenimg + ".png"
codesample.style = "margin-right: auto; margin-left: auto; display:block; margin-top:5%"
document.body.appendChild(codesample)



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function getOptions(imgno) {
    switch(imgno) {
        case 1:
            return ["Code uses : instead of brackets", "Code does not put () around the conditions of the if statement", "Identation is not propper", "Add indentation in lines 4, 6 and 8.", "Convert the inputs to integers", "Nothing, it is fine as is."]
            break;
        case 2:
            return []
    }
}