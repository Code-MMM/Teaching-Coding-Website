
var chosenimg = getRndInteger(1, 5)

var codesample = new Image()
codesample.src = "GuessLangCode/code" + chosenimg + ".png"
codesample.style = " display: block; margin-left: auto; margin-right: auto; width: 40%;"
document.body.appendChild(codesample)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function verifyAnswer(answer) {
    switch (chosenimg) {
        case 1:
            if (answer.toLowerCase() == 'python') {
                alert("You got it correct!");
                location.reload()
            }

            else {
                alert("You got it wrong, try again!");
            }
            break;
        case 2:
            if (answer.toLowerCase() == 'c sharp' || answer.toLowerCase() == 'c#') {
                alert("You got it correct!");
                location.reload()
            }

            else {
                alert("You got it wrong, try again!");
            }
            break;
        case 3:
            if (answer.toLowerCase() == 'javascript' || answer.toLowerCase() == 'js') {
                alert("You got it correct!");
                location.reload()
            }

            else {
                alert("You got it wrong, try again!");
            }
            break;
        case 4:
            if (answer.toLowerCase() == 'c++' || answer.toLowerCase() == 'c plus plus') {
                alert("You got it correct!");
                location.reload()
            }

            else {
                alert("You got it wrong, try again!");
            }
            break;
        case 5:
            if (answer.toLowerCase() == 'java') {
                alert("You got it correct!");
                location.reload()
            }

            else {
                alert("You got it wrong, try again!");
            }
            break;
            
        
    }
}