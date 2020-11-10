//start button

//create a countdown timer that begins when start button is clicked

// store score variable
var score = 0; 

//  array of questions for  quiz game.
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
        q: "How to you call a function named 'myFunction' ?",
        a: {
            a: "call myFunction()",
            b: "myfunction()",
            c: ":myFunction", 
            d: "myFunction()",
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


// check if a === correctAnswer, then add points, else subtract time from timer

//go to next question 

//when all questions completed OR timer reaches 0, game is over

//save initials and highscore