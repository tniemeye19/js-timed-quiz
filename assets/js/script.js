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
    // On Start Button click, execute the following functions
    startBtn.addEventListener('click', startGame);
    // On View High Scores click, execute the following function
    viewHighScoreEl.addEventListener('click', viewHighScores);
    // On Go Back click, execute the following function
    goBackEl.addEventListener('click', goBack);
    // On Clear Scores click, execute the following function
    clearScores.addEventListener('click', clearHighScores);
    // On Form Submit click, execute the following function
    finalScoreSubmitBtn.addEventListener('click', submitUserHighScore);

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
            endGame();
        }

    }, 1000);

    resetDisplayTypes();
    questionsEl.style.display = "block";
    nextQuestion();
}

// Initialize index to increment through the questionsObj
var currentQuestionIndex = 0;

// Next Question Function
function nextQuestion() {

    console.log("nextQuestion function initiated");

    if (currentQuestionIndex <= 4) {

        var currentQuestion = questionsObj[currentQuestionIndex];
        
        questionTitleEl.textContent = currentQuestion.q;
        choiceOneEl.textContent = currentQuestion.c1;
        choiceTwoEl.textContent = currentQuestion.c2;
        choiceThreeEl.textContent = currentQuestion.c3;
        choiceFourEl.textContent = currentQuestion.c4;
    
        // Add event listener for each choice
        choiceOneEl.addEventListener('click', evaluateAndIncrement);
        choiceTwoEl.addEventListener('click', evaluateAndIncrement);
        choiceThreeEl.addEventListener('click', evaluateAndIncrement);
        choiceFourEl.addEventListener('click', evaluateAndIncrement);

        function evaluateAndIncrement(userGuess) {

            console.log("evaluateAndIncrement function initiated");
    
                if (userGuess.target.innerHTML === currentQuestion.a) {
                    console.log("Correct!");
                    wrongORrightEl.textContent = "Correct!";
                    score = score + 20;
                    console.log(score);
                    currentQuestionIndex += 1;
                    clearEventListeners();
                    nextQuestion();
        
                } else {
                    console.log("Wrong!");
                    wrongORrightEl.textContent = "Wrong!";
                    timeRemaining = timeRemaining - 20;
                    currentQuestionIndex += 1;
                    clearEventListeners();
                    nextQuestion();

                }

            function clearEventListeners() {
                choiceOneEl.removeEventListener('click', evaluateAndIncrement);
                choiceTwoEl.removeEventListener('click', evaluateAndIncrement);
                choiceThreeEl.removeEventListener('click', evaluateAndIncrement);
                choiceFourEl.removeEventListener('click', evaluateAndIncrement);
            }
        }

    } else {
        resetDisplayTypes();
        completeEl.style.display = "block";
        timeRemaining = 0;

    }

}

// End Game function
function endGame() {
    console.log("endGame function initiated");
    resetDisplayTypes();
    completeEl.style.display ="block";
}

// View High Scores function
function viewHighScores() {
    console.log("viewHighScore function initiated");
    console.log(viewHighScoreEl)
    resetDisplayTypes();
    highscoreEl.style.display = "block";
    timeRemaining = 0;
}

// Submit High Scores function
function submitUserHighScore() {
    console.log("submitHighScores function initiated");
    highscoreEl.style.display = "block";
}

// Go Back function
function goBack() {
    console.log("goBack function initiated");
    resetDisplayTypes();
    landingPageEl.style.display = "block";
}

// Clear High Scores function
function clearHighScores() {
    console.log("clearHighScores function initiated");

}

function resetDisplayTypes() {
    landingPageEl.style.display = "none";
    completeEl.style.display ="none";
    highscoreEl.style.display ="none";
    questionsEl.style.display = "none";
}
