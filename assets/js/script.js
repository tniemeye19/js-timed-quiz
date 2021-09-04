let questionsObj = [
    {
        q: "Commonly used data types DO NOT include:",
        a: "alerts",
        c1: "strings",
        c2: "booleans",
        c3: "alerts",
        c4: "numbers"
    },
    {
        q: "The condition of an if / else statement is enclosed with ______.",
        a: "3. parenthesis",
        c1: "1. quotes",
        c2: "2. curly brackets",
        c3: "3. parenthesis",
        c4: "4. square brackets"
    },
    {
        q: "Arrays in JavaScript can be used to store ______.",
        a: "4. all of the above",
        c1: "1. numbers and strings",
        c2: "2. other arrays",
        c3: "3. booleans",
        c4: "4. all of the above"
    },
    {
        q: "String values must be enclosed within ______ when being assigned to variables.",
        a: "3. quotes",
        c1: "1. commas",
        c2: "2. curly brackets",
        c3: "3. quotes",
        c4: "4. parenthesis"
    },
    {
        q: "A very useful tool used during development and debugging for printing content to the debugger is:",
        a: "4. console.log",
        c1: "1. JavaScript",
        c2: "2. terminal/bash",
        c3: "3. for loops",
        c4: "4. console.log"
    }
];


// Initialize Elements for use in JavaScript
var startBtn = document.querySelector(".start-btn");
var timerEl = document.querySelector("#timer-sec");
var viewHighScoreEl = document.querySelector("#view-hs");
var landingPageEl = document.querySelector("#title-screen");
var questionsEl = document.querySelector("#question-screen");
var completeEl = document.querySelector("#complete-screen");
var highscoreEl = document.querySelector("#highscore-screen");
var questionTitleEl = document.querySelector("#question-title");
var selectionsEl = document.querySelector(".selection");
var choiceOneEl = document.querySelector("#s1");
var choiceTwoEl = document.querySelector("#s2");
var choiceThreeEl = document.querySelector("#s3");
var choiceFourEl = document.querySelector("#s4");
var wrongORrightEl = document.querySelector("#wrongORright");
var userFinalScoreEl = document.querySelector("#final-score");
var finalScoreSubmitBtn = document.querySelector("#submit");
var goBackEl = document.querySelector("#go-back");
var clearScores = document.querySelector("#clear-scores");


// Initialize Event Listeners for use in JavaScript
startBtn.addEventListener('click', startGame);
startBtn.addEventListener('click', nextQuestion);
viewHighScoreEl.addEventListener('click', viewHighScores);
goBackEl.addEventListener('click', goBack);
clearScores.addEventListener('click', clearHighScores);
finalScoreSubmitBtn.addEventListener('click', submitHighScores);


// zIndex's for reference from CSS
    // landingPageEl.style.zIndex = 0
    // questionsEl.style.zIndex = -1
    // completeEl.style.zIndex = -2
    // highscoreEl.style.zIndex = -3

// Initialize variables for use within functions
score = 0;

// Initialize Variables for Timer
timerEl.textContent = 0;
var timeRemaining = 99;

// Start Game function
function startGame() {

    console.log("Start Button has been pressed");

    var timerInterval = setInterval(function() {
        if (timeRemaining > 0) {
            timerEl.textContent = timeRemaining;
            timeRemaining--;
        } else {
            timerEl.textContent = "";
            clearInterval(timerInterval);
            timeRemaining = 99;
            endGame();
        }

    }, 1000);

}

// Initialize index to increment through the questionsObj


// Next Question Function
function nextQuestion() {

    questionsEl.style.zIndex = "1";

    var currentQuestionIndex = 0;
    console.log(currentQuestionIndex);
    var currentQuestion = questionsObj[currentQuestionIndex];
    console.log(currentQuestion);
    var qObjLen = questionsObj.length;
    console.log(qObjLen);

    for (var currentQuestionIndex = 0; currentQuestionIndex < qObjLen; currentQuestionIndex++) {
        
        questionTitleEl.textContent = currentQuestion.q;
        choiceOneEl.textContent = currentQuestion.c1;
        choiceTwoEl.textContent = currentQuestion.c2;
        choiceThreeEl.textContent = currentQuestion.c3;
        choiceFourEl.textContent = currentQuestion.c4;

    }
    
    selectionsEl.addEventListener('click', evaluateAndIncrement);

    function evaluateAndIncrement(userGuess) {
        if (userGuess.target.innerHTML === currentQuestion.a) {
            console.log("Correct!");
            wrongORrightEl.textContent = "Correct!";
            score = score + 20;
            currentQuestionIndex += 1;
            console.log(currentQuestionIndex);
            nextQuestion();
        } else {
            console.log("Wrong!");
            wrongORrightEl.textContent = "Wrong!";
            timeRemaining = timeRemaining - 10;
            currentQuestionIndex += 1;
            console.log(currentQuestionIndex);
            nextQuestion();
        }
    }
}

// End Game function
function endGame() {
    console.log("endGame function initiated");
    // Reset zIndex's for pages not currently being displayed
    questionsEl.style.zIndex = "-1";
    // Set zIndex so Complete Screen is visible
    completeEl.style.zIndex = "1";
}

// View High Scores function
function viewHighScores() {
    console.log("viewHighScore function initiated");
    // Reset zIndex's for pages not currently being displayed
    landingPageEl.style.zIndex = "0";
    questionsEl.style.zIndex = "-1";
    completeEl.style.zIndex = "-2";
    // Set zIndex so High Score screen is visible
    highscoreEl.style.zIndex = "1";
}

// Go Back function
function goBack() {
    console.log("goBack function initiated");
    // Reset zIndex's for pages not currently being displayed
    questionsEl.style.zIndex = "-1";
    completeEl.style.zIndex = "-2";
    highscoreEl.style.zIndex = "-3";
    // Set zIndex so Title Screen is visible
    landingPageEl.style.zIndex = "1";
}

// Clear High Scores function
function clearHighScores() {
    console.log("clearHighScores function initiated");
    // Clears local storage and empties the list of high scores
}

// Submit High Scores function
function submitHighScores() {
    console.log("submitHighScores function initiated");
    // takes high score and initials input from form and stores them in local storage,
    // and displays them on the High Score screen
}