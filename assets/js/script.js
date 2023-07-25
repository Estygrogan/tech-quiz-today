//Declared variables
let startButton = document.getElementById("start-btn");
let questContainerElement = document.getElementById("question-container");
let shuffledQuestions, currentQuestionIndex;
let questionElement = document.getElementById("question");
let answerButtonsElement = document.getElementById("answer-buttons");
let nextButton = document.getElementById("next-btn");
let openInfo = document.getElementById("info-btn")
let closeInfo = document.getElementById("close-info")
let quizInfo = document.getElementById("quiz-info")
let formButton = document.getElementById("form-button");
let nameForm = document.getElementById("form-container");
let scoreBoard = document.getElementById("score-container");
let score = 0;
let playerName = "";


startButton.addEventListener("click", openForm);
formButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion();
});


/*
openInfo.addEventListener("click", () => {
    quizInfo.showModal();
})
*/

function openForm() {
    startButton.classList.add("hide");
    openInfo.classList.add("hide");
    nameForm.classList.remove("hide");
    scoreBoard.classList.add("hide");
}

function handleSubmit() {
    nameForm.preventDefault();
    let username = document.getElementById("name").value
    localStorage.setItem("username", username)
}

nameForm.addEventListener("submit", handleSubmit());

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


// List of quiz questions
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
        question: "What mathematician is widely considered to be the father of theoretical computer science? ",
        answers: [{
                text: "John von Neumann",
                correct: false
            },
            {
                text: "David Hilbert",
                correct: false
            },
            {
                text: "Alan Turing",
                correct: true
            },
            {
                text: "Georg Cantor",
                correct: false
            },
        ]

    },
    {
        question: "What PC components are Nvidia primarily known for manufacturing?",
        answers: [{
                text: "GPU",
                correct: true
            },
            {
                text: "CPU",
                correct: false
            },
            {
                text: "RAM",
                correct: false
            },
            {
                text: "Motherboards",
                correct: false
            },
        ]

    },
    {
        question: "What is the best selling games console of all time?",
        answers: [{
                text: "Game Boy",
                correct: true
            },
            {
                text: "Nintendo Switch",
                correct: false
            },
            {
                text: "Nintendo DS",
                correct: false
            },
            {
                text: "Playstation 2",
                correct: true
            },
        ]

    },
    {
        question: "Satya Nadella is the current CEO of which tech company?",
        answers: [{
                text: "Apple",
                correct: false
            },
            {
                text: "Sony",
                correct: false
            },
            {
                text: "Microsoft",
                correct: true
            },
            {
                text: "Amazon",
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
    {
        question: "Which animation studio was Steve Jobs a co-founder of?",
        answers: [{
                text: "Illumination",
                correct: false
            },
            {
                text: "Pixar",
                correct: true
            },
            {
                text: "Dreamworks",
                correct: false
            },
            {
                text: "Cartoon Saloon",
                correct: false
            },
        ]

    },
    {
        question: "What large game publisher are Microsoft attempting to acquire?",
        answers: [{
                text: "Take Two",
                correct: false
            },
            {
                text: "EA",
                correct: false
            },
            {
                text: "Ubisoft",
                correct: false
            },
            {
                text: "Activision",
                correct: true
            },
        ]

    },
    {
        question: "Which of the following social media companies does Meta own?",
        answers: [{
                text: "Facebook",
                correct: false
            },
            {
                text: "Instagram",
                correct: false
            },
            {
                text: "WhatsApp",
                correct: false
            },
            {
                text: "All of the above",
                correct: true
            },
        ]

    },
    {
        question: "What year was Google founded?",
        answers: [{
                text: "1997",
                correct: false
            },
            {
                text: "1998",
                correct: true
            },
            {
                text: "1999",
                correct: false
            },
            {
                text: "2000",
                correct: false
            },
        ]

    },
];