// console.log('shit works');

function buttonClick() {
    const message = 'Button press'
    console.log(message);
}


let scoreGamers = 0
let scoreNotGamers = 0

function plusOnebutton() {
    scoreGamers += 1
    console.log(`Score: ${scoreGamers}`);
    activeScore()
}

function plusTwoButton() {
    scoreGamers += 2
    console.log(`Score: ${scoreGamers}`)
    activeScore()
}

function plusOnebuttonTwo() {
    scoreNotGamers += 1
    console.log(`Score: ${scoreNotGamers}`);
    activeNotScore()
}

function plusTwoButtonTwo() {
    scoreNotGamers += 2
    console.log(`Score: ${scoreNotGamers}`)
    activeNotScore()
}

function activeScore() {
    const currentScoreGamer = document.getElementById('scoreGamer');

    currentScoreGamer.innerText = scoreGamers
}
function activeNotScore() {
    const currentScoreNotGamer = document.getElementById('scoreNotGamer');
    currentScoreNotGamer.innerText = scoreNotGamers
}