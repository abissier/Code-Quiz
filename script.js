var timeEl = document.querySelector(".time");
var quizContainer = document.querySelector(".card-body");
var resultsContainer = document.getElementById("results");
var startBtn = document.querySelector(".startBtn");
var questionSpot = document.querySelector(".question");
var answerList = document.querySelectorAll("ol");

//event listner to start quiz
startBtn.addEventListener("click", startQuiz);

//start quiz function calls the following functions
function startQuiz() {
    setTime();
    renderQuestion();
    renderOptions();
    checkAnswer();
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

//keep track of question number user is on 
var questionNumber = 0;
var answerNumber = 0;

//  array of question objects for  quiz game.
var questions = [
    {
        q: "Where in the HTML document is the JavaScript file linked?",
        a: {
            a: "In the body",
            b: "In the head ",
            c: "In the header",
            d: "In the footer"
        },
        correctAnswer: "a"
    },
    {
        q: "How do you call a function named 'myFunction' ?",
        a: {
            a: "call myFunction()",
            b: "myfunction()",
            c: ":myFunction",
            d: "myFunction()"
        },
        correctAnswer: "d"
    },
    {
        q: "What is the indexof('Peas') in the following example: var vegetables = ['Carrots', 'Peas', 'Lettuce', 'Tomatoes']?",
        a: {
            a: "1",
            b: "2",
            c: "3",
            d: "4"
        },
        correctAnswer: "a"
    },
    {
        q: "What is the loop condition in the following example: 'for (var i = 0; i < 10; i++) ?",
        a: {
            a: "not applicable",
            b: "i++",
            c: "var i = 0",
            d: "i < 10"
        },
        correctAnswer: "d"
    },
    {
        q: "What is the splice() method?",
        a: {
            a: "It takes each item of an array and creates one string",
            b: "It changes content of an array by removing or replacing existing elements and/or adding new elements in place",
            c: "It divides an array into two arrays",
            d: "It is used to is used to join two or more strings within an array"
        },
        correctAnswer: "b"
    }
];

// renderQuestion function to loop through array of questions 
function renderQuestion() {

    for (var i = 0; i < questions.length; i++) {
        questionSpot.textContent = questions[i].q;
        questionNumber++;
        renderOptions();




    }
}


//renderOptions function to display answer choices 
function renderOptions() {
    for (var i = 0; i < questions.length; i++) {
        answerList.createElement("li");
        answerList.li.textContent = questions[i].a;
        answerNumber++;
    }

    // checkAnswer function check if a === correctAnswer, then add points, else subtract time from timer
    if (response == questions[i].correctAnswer) {
        score++;
    } else {
        score--;
        secondsLeft - 5;
    }
}

// create function deliverScore 

// function deliverScore