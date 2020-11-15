var startBtn = document.querySelector(".startBtn");
var imgEl = document.querySelector(".img-display");
var timeEl = document.querySelector(".time");
var quizContainer = document.getElementById("question-container");
var questionSpot = document.querySelector("#question");
var answerSpot = document.getElementById("answer-buttons");
var resultsContainer = document.getElementById("results");
var saveButton = document.getElementById("save");
var userName = document.getElementById("user-name");
var scoreBoard= document.getElementById("scores");

var endGame = document.getElementById("end-game");

//keep track of question number user is on 
var questionNumber = 0;

//event listner to start quiz
startBtn.addEventListener("click", startQuiz);

//start quiz function calls the following functions
function startQuiz() {
    startBtn.classList.add("hide");
    quizContainer.classList.remove("hide");
    imgEl.classList.add("hide");
    setTime();
    renderQuestion();
}

//countdown timer function that starts at 60 seconds
var secondsLeft = 60;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        if (secondsLeft > 10) {
            timeEl.textContent = secondsLeft + " seconds remaining";
        } else if (secondsLeft > 0 && secondsLeft < 10) {
            timeEl.textContent = secondsLeft + " seconds left, hurry!";
        } else if (secondsLeft == 0) {
            clearInterval(timerInterval);
            timeEl.textContent = "";
            deliverScore();
        }

    }, 1000);
}

// store score variable
var score = 0;

//  array of question objects 
var questions = [
    {
        question: "Where in the HTML document is the JavaScript file linked?",
        answers: [
            { text: "In the body", correct: true },
            { text: "In the head", correct: false },
            { text: "In the header", correct: false },
            { text: "In the footer", correct: false }
        ]
    },
    {
        question: "How do you call a function named 'myFunction' ?",
        answers: [
            { text: "call myFunction()", correct: false },
            { text: "myfunction()", correct: false },
            { text: ":myFunction", correct: false },
            { text: "myFunction()", correct: true }
        ]
    },
    {
        question: "What is the indexof('Peas') in the following example: var vegetables = ['Carrots', 'Peas', 'Lettuce', 'Tomatoes']?",
        answers: [
            { text: "1", correct: true },
            { text: "2", correct: false },
            { text: "3", correct: false },
            { text: "4", correct: false }
        ]
    },
    {
        question: "What is the loop condition in the following example: 'for (var i = 0; i < 10; i++) ?",
        answers: [
            { text: "not applicable", correct: false },
            { text: "i++", correct: false },
            { text: "var i = 0", correct: false },
            { text: "i < 10", correct: true }
        ]
    },
    {
        question: "What is the splice() method?",
        answers: [
            { text: "It takes each item of an array and creates one string", correct: false },
            { text: "It changes content of an array by removing or replacing existing elements and/or adding new elements in place", correct: true },
            { text: "It divides an array into two arrays", correct: false },
            { text: "It is used to is used to join two or more strings within an array", correct: false }
        ]
    }
]

// Displays question from questions array for the current question number, passes questionnumber to renderoptions
function renderQuestion() {
    questionSpot.textContent = questions[questionNumber].question;
    renderOptions(questionNumber);
}

// displays answer choices, creates button element for each answer, eventlistner for button that is clicked
function renderOptions(questionNumber) {
    questions[questionNumber].answers.forEach(answer => {
        var button = document.createElement("button")
        button.textContent = answer.text
        button.classList.add('btn')
        button.addEventListener("click", checkAnswer)
        answerSpot.appendChild(button)

    })
}

// deletes question and answer text, if there is another question call the renderquestion function, otherwise deliverscore
function getNextQuestion() {
    questionSpot.textContent = "";
    answerSpot.textContent = "";
    if (questionNumber < questions.length - 1) {
        questionNumber += 1;
        renderQuestion();
    } else {
        deliverScore();
    }
}

//match the answer chosen to innertext and check if correct is true.
// if true add points, else subtract time from secondsLeft. call getnextquestion function
function checkAnswer(event) {
    for (var i = 0; i < questions[questionNumber].answers.length; i++) {
        if (event.target.innerText === questions[questionNumber].answers[i].text) {
            if (questions[questionNumber].answers[i].correct === true) {
                score++;
            } else {
                secondsLeft -= 5;
            }
        }
    }
    getNextQuestion();
}

// is called when secondleft ===0 or no more questions left 
function deliverScore() {
    endGame.classList.remove("hide");
    imgEl.classList.remove("hide");
    timeEl.classList.add("hide");
    resultsContainer.textContent = "You scored " + score + " questions correctly";
}

//event listner that runs function to display score
saveButton.addEventListener("click", function (event) {
    endGame.classList.add("hide");
    scoreBoard.classList.remove("hide");

//store info as user object
var user = {
    userName: userName.value.trim(),
    score: score,
};

localStorage.setItem("user", JSON.stringify(user));
scoreBoard.textContent= user;


})

// var email = document.querySelector("#email").value;
//   var password = document.querySelector("#password").value;

// var userInfo= localStorage.getItem("user", userName);
// var userScore= localStorage.getItem("user", score);

//     localStorage.setItem("email", email);
//     localStorage.setItem("password", password);
//     renderLastRegistered();
