var options = [1, 2, 3]
var chosenimg = options[getRndInteger(1, 3) - 1]

var codesample = new Image()
codesample.src = "OutputCode/code" + chosenimg + ".png"
codesample.style = "margin-right: auto; margin-left: auto; display:block; margin-top:5%"
document.body.appendChild(codesample)

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function ValidateAnswer(answer) {
    switch (chosenimg) {
        case 1:
            if (answer == 1) {
                alert("You got it correct!");
                reload()
            }

            else {
                alert("You got it wrong, try again!");
            }
            break;
        case 2:
            if (answer == 1) {
                alert("You got it correct!");
                reload()
            }

            else {
                alert("You got it wrong, try again!");
            }
            break;
        case 3:
            if (answer == 3 ) {
                alert("You got it correct!");
                reload()
            }

            else {
                alert("You got it wrong, try again!");
            }
            break;
        case 4:           
        
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

    console.log(chosenimg)

    chosenimg = newoptions[getRndInteger(1, 3) - 1]

    codesample.src = "OutputCode/code" + chosenimg + ".png"
}