//Declared variables
import questions from "./questions.js"
let startButton = document.getElementById("start-btn");
let questContainerElement = document.getElementById("question-container");
let shuffledQuestions, currentQuestionIndex;
let questionElement = document.getElementById("question");
let answerButtonsElement = document.getElementById("answer-buttons");
let nextButton = document.getElementById("next-btn");
let openInfo = document.getElementById("info-btn")
let closeInfo = document.getElementById("close-info")
let quizInfo = document.getElementById("quiz-info")
let nameForm = document.getElementById("form-container");
let formSubmit = document.getElementById("form-submit");
let scoreBoard = document.getElementById("score-container");
let score = 0;
let liveScore = `<td id="live-score">${score}/10</td>`;
let playerName = "";


startButton.addEventListener("click", openForm);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
});
li


function showInfo() {
    quizInfo.classList.remove("hide");
    startButton.classList.add("hide");
    nameForm.classList.add("hide");
    scoreBoard.classList.add("hide");
    openInfo.classList.add("hide");
    questContainerElement.classList.add("hide")
}

function hideInfo() {
    quizInfo.classList.add("hide");
    startButton.classList.remove("hide");
    openInfo.classList.remove("hide");
}

openInfo.addEventListener("click", showInfo);
closeInfo.addEventListener("click", hideInfo);

function openForm() {
    startButton.classList.add("hide");
    openInfo.classList.add("hide");
    nameForm.classList.remove("hide");
    scoreBoard.classList.add("hide");
}


function handleSubmit(event) {
    event.preventDefault();
    let username = document.getElementById("name").value
    document.getElementById("username-fill").innerHTML = username;
    startGame()
}

formSubmit.addEventListener("submit", handleSubmit);

//* Function to start the game and randomise order of questions
function startGame() {
    console.log("started");
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questContainerElement.classList.remove("hide");
    setNextQuestion();
    nameForm.classList.add("hide");
    scoreBoard.classList.remove("hide");
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}
// From Web Dev Simplified tutorial video
function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        let button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
            score++
            console.log(score)
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });

}
// From Web Dev Simplified tutorial video
function selectAnswer(e) {
    let selectedButton = e.target;
    let correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide");
    } else {
        startButton.innerText = "Restart";
        startButton.classList.remove("hide");
    }

}
// From Web Dev Simplified tutorial video
function resetState() {
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}