let questions = [
    {
        q: "Commonly used data types DO NOT include:",
        a: "3. alerts",
        aList: [
            "1. strings",
            "2. booleans",
            "3. alerts",
            "4. numbers"
        ]
    },
    {
        q: "The condition if an if / else statement is enclosed with ______.",
        a: "3. parenthesis",
        aList: [
            "1. quotes",
            "2. curly brackets",
            "3. parenthesis",
            "4. square brackets"
        ]
    },
    {
        q: "Arrays in JavaScript can be used to store ______.",
        a: "4. all of the above",
        aList: [
            "1. numbers and strings",
            "2. other arrays",
            "3. booleans",
            "4. all of the above"
        ]
    },
    {
        q: "String values must be enclosed within ______ when being assigned to variables.",
        a: "3. quotes",
        aList: [
            "1. commas",
            "2. curly brackets",
            "3. quotes",
            "4. parenthesis"
        ]
    },
    {
        q: "A very useful tool used during development and debugging for printing content to the debugger is:",
        a: "4. console.log",
        aList: [
            "1. JavaScript",
            "2. terminal/bash",
            "3. for loops",
            "4. console.log"
        ]
    }
];

var score = 0;

var startBtn = document.querySelector(".start-btn");
var timerEl = document.querySelector("#timer-sec");
var questionsEl = document.querySelector("#question-screen");
var completeEl = document.querySelector("#complete-screen");
var highscoreEl = document.querySelector("#highscore-screen");
var questionTitleEl = document.querySelector("#question-title");


timerEl.textContent = 0;

startBtn.addEventListener('click', function(event) {

    var timeRemaining = 100;

    var timerInterval = setInterval(function() {
        if (timeRemaining >= 0) {
            timerEl.textContent = timeRemaining;
            timeRemaining--;
        }
    }, 1000);


});

var testButton = document.getElementById('test')

testButton.addEventListener('click', function(evt){
    console.log('Stuff')
    var scoreContainer = document.querySelector('.score-container')
    scoreContainer.classList.toggle('invisible')

});

// On start, retrieve first question, once first question is answered,
// it will state whether it is right or wrong. After a selectioin is
// pressed, it will move onto the following questions until there are
// no more questions or until time runs out. Wrong answers acquire a 10
// second time penalty. Once the game is finished, you will be presented
// with another screen that states you have finished the quiz, and asks
// you to input your initials to save the score. Once you submit, it 
// takes you to the high scores page which lists all of the scores logged.
// From there, you can press two buttons, one will take you to the title
// menu, and the other will clear the high scores from localStorage.

// Initialize game by pressing "Start Quiz"

startBtn.onClick = function() {
    
}



// click the start button
// - timer starts and I am
// - presented with a question


// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

