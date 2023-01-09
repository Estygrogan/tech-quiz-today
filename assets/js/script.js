let startButton = document.getElementById("start-btn")
let questContainerElement = document.getElementById("question-container")
let shuffledQuestions, currentQuestionIndex
let questionElement = document.getElementById("question")
let answerButtonsElement = document.getElementById("answer-buttons")
let score = 0;

startButton.addEventListener("click", startGame)

function startGame() {
    console.log("started")
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questContainerElement.classList.remove("hide")
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
}

function selectAnswer() {

}

let questions = [{
        question: "What is the name of Nintendo's most recent console",
        answers: [{
                text: "Switch",
                correct: true
            },
            {
                text: "3DS",
                correct: false
            },
            {
                text: "Gamecube",
                correct: false
            },
            {
                text: "Vita",
                correct: false
            },
        ]

    },
    {
        question: "What is the name of Nintendo's most recent console",
        answers: [{
                text: "Switch",
                correct: true
            },
            {
                text: "3DS",
                correct: false
            },
            {
                text: "Gamecube",
                correct: false
            },
            {
                text: "Vita",
                correct: false
            },
        ]

    },
]