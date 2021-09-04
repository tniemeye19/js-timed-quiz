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
timerEl.textContent = 0;

var countdown = function() {
    var timeRemaining = 100;

    var timerInterval = setInterval(function() {
        if (timeRemaining >= 0) {
            timerEl.textContent = timeRemaining;
            timeRemaining--;
        }
    }, 1000)
};

// On Start Quiz click, timer begins counting down in increments of 1000 ms
startBtn.addEventListener('click', function() {

    countdown();

    var timeRemaining = 100;

    var timerInterval = setInterval(function() {
        if (timeRemaining >= 0) {
            timerEl.textContent = timeRemaining;
            timeRemaining--;

            // Set Title Screen to "disappear" so the questions page will be visible
            questionsEl.style.zIndex = "1";
            
            // Question One Function
            var questionOne = function() {
                questionTitleEl.textContent = questionsObj[0].q;
                choiceOneEl.textContent = questionsObj[0].c1;
                choiceTwoEl.textContent = questionsObj[0].c2;
                choiceThreeEl.textContent = questionsObj[0].c3;
                choiceFourEl.textContent = questionsObj[0].c4;
                console.log(choiceOneEl);
                console.log(choiceTwoEl);
                console.log(choiceThreeEl);
                console.log(choiceFourEl);

                // if (choiceOneEl.clicked === true ||  
                //     choiceTwoEl.clicked === true || 
                //     choiceFourEl.clicked === true) {
                //         wrongORrightEl.textContent = "Wrong!";
                // } else if (choiceThreeEl.clicked === true) {
                //         wrongORrightEl.textContent = "Correct!";
                // }
                
                choiceOneEl.textContent = questionsObj[0].c1;
                choiceOneEl.addEventListener('click', function() {
                    wrongORrightEl.textContent = "Wrong!";

                })
                choiceTwoEl.textContent = questionsObj[0].c2;
                choiceTwoEl.addEventListener('click', function () {
                    wrongORrightEl.textContent = "Wrong!";

                })
                choiceThreeEl.textContent = questionsObj[0].c3;
                choiceThreeEl.addEventListener('click', function() {
                    wrongORrightEl.textContent = "Correct!";

                })
                choiceFourEl.textContent = questionsObj[0].c4;
                choiceFourEl.addEventListener('click', function() {
                    wrongORrightEl.textContent = "Wrong!";

                })

            }

            // Call Question One function
            questionOne();
        }

    }, 1000);
});





// input change for loop to iterate between questions and change what viewer sees for length of questions array


// Tutor Ex. Start
// var testButton = document.getElementById('test')

// testButton.addEventListener('click', function(evt){
//     console.log('Stuff')
//     var scoreContainer = document.querySelector('.score-container')
//     scoreContainer.classList.toggle('invisible')

// });
// Tutor Ex. End

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

