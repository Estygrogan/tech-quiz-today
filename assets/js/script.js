let startButton=document.getElementById('start-btn')
let questContainerElement=document.getElementById('question-container')

startButton.addEventListener('click', startGame)

function startGame() {
console.log('started')
startButton.classList.add('hide')
questContainerElement.classList.remove('hide')
}

function setNextQuestion() {

}

function selectAnswer() {

}