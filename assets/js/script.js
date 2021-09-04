let questionsObj = [
    {
        q: "Commonly used data types DO NOT include:",
        a: "3. alerts",
        c1: "1. strings",
        c2: "2. booleans",
        c3: "3. alerts",
        c4: "4. numbers"
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

// Initialize variables for use within functions
score = 0;


// Initialize Variables for Timer
timerEl.textContent = 0;
var timeRemaining = 100;
// On Start Quiz click, timer begins counting down in increments of 1000 ms
startBtn.addEventListener('click', function() {

    console.log("Start Button has been pressed");
    // Set Title Screen to "disappear" so the questions page will be visible
    questionsEl.style.zIndex = "1";

    var timerInterval = setInterval(function() {
        if (timeRemaining >= 0) {
            timerEl.textContent = timeRemaining;
            timeRemaining--;
        }
    }, 1000);

    nextQuestion();

});


var currentQuestionIndex = 0;
var nextQuestion = function() {

    console.log("nextQuestion function executed");

    function evaluateAndIncrement() {
        
        if ((choiceOneClickEl === currentQuestion.a) ||
            (choiceTwoClickEl === currentQuestion.a) ||
            (choiceThreeClickEl === currentQuestion.a) ||
            (choiceFourClickEl === currentQuestion.a)) {
            console.log("You are correct!");
            wrongORrightEl.textContent = "Correct!";
            score = score + 20;
            console.log(score);
            currentQuestionIndex += 1;
            console.log(currentQuestionIndex);
            nextQuestion();
        } else {
            console.log("You are wrong!")
            wrongORrightEl.textContent = "Wrong!";
            timeRemaining = timeRemaining - 10;
            currentQuestionIndex += 1;
            console.log(currentQuestionIndex);
            nextQuestion();
        }
    }


    var currentQuestion = questionsObj[currentQuestionIndex];
    var qObj = questionsObj.length;

    questionTitleEl.textContent = currentQuestion.q;
    choiceOneEl.textContent = currentQuestion.c1;
    choiceTwoEl.textContent = currentQuestion.c2;
    choiceThreeEl.textContent = currentQuestion.c3;
    choiceFourEl.textContent = currentQuestion.c4;
    var choiceOneClickEl = document.querySelector("#s1").addEventListener("click", evaluateAndIncrement);
    var choiceTwoClickEl = document.querySelector("#s2").addEventListener("click", evaluateAndIncrement);
    var choiceThreeClickEl = document.querySelector("#s3").addEventListener("click", evaluateAndIncrement);
    var choiceFourClickEl = document.querySelector("#s4").addEventListener("click", evaluateAndIncrement);
    console.log(currentQuestionIndex);


};