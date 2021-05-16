var options = [1, 2, 3, 4, 5, 6]
var chosenimg = options[getRndInteger(1, 6) - 1]

var codesample = new Image()
codesample.src = "GuessLangCode/code" + chosenimg + ".png"
codesample.style = "margin-right: auto; margin-left: auto; display:block; margin-top:5%"
codesample.id = "gameimg"
document.body.appendChild(codesample)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function verifyAnswer(answer) {
    switch (chosenimg) {
        case 1:
            if (answer.toLowerCase() == 'python') {
                alert("You got it correct!");
                reload()
            }

            else {
                alert("You got it wrong, try again!");
            }
            break;
        case 2:
            if (answer.toLowerCase() == 'c sharp' || answer.toLowerCase() == 'c#') {
                alert("You got it correct!");
                reload()
            }

            else {
                alert("You got it wrong, try again!");
            }
            break;
        case 3:
            if (answer.toLowerCase() == 'javascript' || answer.toLowerCase() == 'js') {
                alert("You got it correct!");
                reload()
            }

            else {
                alert("You got it wrong, try again!");
            }
            break;
        case 4:
            if (answer.toLowerCase() == 'c++' || answer.toLowerCase() == 'c plus plus') {
                alert("You got it correct!");
                reload()
            }

            else {
                alert("You got it wrong, try again!");
            }
            break;
        case 5:
            if (answer.toLowerCase() == 'java') {
                alert("You got it correct!");
                reload()
            }

            else {
                alert("You got it wrong, try again!");
            }
            break;
        case 6:
            if (answer.toLowerCase() == 'python') {
                alert("You got it correct!");
                reload()
            }

            else {
                alert("You got it wrong, try again!");
            }
            break;
            
        
    }
}

function reload() {
    var newoptions = [];
    var options = [1, 2, 3, 4, 5, 6]
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
            options.splice(2, 1)
            newoptions = options
            break;
        case 4:
            options.splice(3, 1)
            newoptions = options
            break;
        case 5:
            options.splice(4, 1)
            newoptions = options
            break;
        case 6:
            options.pop()
            newoptions = options
            break;
    }

    console.log(newoptions)

    console.log(chosenimg)

    chosenimg = newoptions[getRndInteger(1, 5) - 1]

    codesample.src = "GuessLangCode/code" + chosenimg + ".png"
}