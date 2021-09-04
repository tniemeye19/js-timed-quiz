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
var choiceOneClickEl = document.querySelector("#s1").addEventListener("click", nextQuestion);
var choiceOneEl = document.querySelector("#s1");
var choiceTwoClickEl = document.querySelector("#s2").addEventListener("click", nextQuestion);
var choiceTwoEl = document.querySelector("#s2");
var choiceThreeClickEl = document.querySelector("#s3").addEventListener("click", nextQuestion);
var choiceThreeEl = document.querySelector("#s3");
var choiceFourClickEl = document.querySelector("#s4").addEventListener("click", nextQuestion);
var choiceFourEl = document.querySelector("#s4");
var wrongORrightEl = document.querySelector("#wrongORright");
var userFinalScoreEl = document.querySelector("#final-score");

// Initialize variables for use within functions
score = 0;


// var qOne = function () {
//     questionTitleEl.textContent = questionsObj[0].q;
//     choiceOneEl.textContent = questionsObj[0].c1;
//     choiceTwoEl.textContent = questionsObj[0].c2;
//     choiceThreeEl.textContent = questionsObj[0].c3;
//     choiceFourEl.textContent = questionsObj[0].c4;
//     if (choiceOneEl.clicked === true ||  
//         choiceTwoEl.clicked === true || 
//         choiceFourEl.clicked === true) {
//         wrongORrightEl.textContent = "Wrong!";
//         count += 1;
//         timeRemaining -= 10;
//     } else if (choiceThreeEl.clicked === true) {
//         wrongORrightEl.textContent = "Correct!";
//         count += 1;
//     }
// };

// var qTwo = function () {
//     questionTitleEl.textContent = questionsObj[1].q;
//     choiceOneEl.textContent = questionsObj[1].c1;
//     choiceTwoEl.textContent = questionsObj[1].c2;
//     choiceThreeEl.textContent = questionsObj[1].c3;
//     choiceFourEl.textContent = questionsObj[1].c4;
//     if (choiceOneEl.clicked === true ||  
//         choiceTwoEl.clicked === true || 
//         choiceFourEl.clicked === true) {
//         wrongORrightEl.textContent = "Wrong!";
//         count += 1;
//     } else if (choiceThreeEl.clicked === true) {
//         wrongORrightEl.textContent = "Correct!";
//         count += 1;
//     }
// };

// var qThree = function () {
//     questionTitleEl.textContent = questionsObj[2].q;
//     choiceOneEl.textContent = questionsObj[2].c1;
//     choiceTwoEl.textContent = questionsObj[2].c2;
//     choiceThreeEl.textContent = questionsObj[2].c3;
//     choiceFourEl.textContent = questionsObj[2].c4;
//     if (choiceOneEl.clicked === true ||  
//         choiceTwoEl.clicked === true || 
//         choiceThreeEl.clicked === true) {
//         wrongORrightEl.textContent = "Wrong!";
//         count += 1;
//     } else if (choiceFourEl.clicked === true) {
//         wrongORrightEl.textContent = "Correct!";
//         count += 1;
//     }
// };

// var qFour = function () {
//     questionTitleEl.textContent = questionsObj[3].q;
//     choiceOneEl.textContent = questionsObj[3].c1;
//     choiceTwoEl.textContent = questionsObj[3].c2;
//     choiceThreeEl.textContent = questionsObj[3].c3;
//     choiceFourEl.textContent = questionsObj[3].c4;
//     if (choiceOneEl.clicked === true ||  
//         choiceTwoEl.clicked === true || 
//         choiceFourEl.clicked === true) {
//         wrongORrightEl.textContent = "Wrong!";
//         count += 1;
//     } else if (choiceThreeEl.clicked === true) {
//         wrongORrightEl.textContent = "Correct!";
//         count += 1;
//     }
// };

// var qFive = function () {
//     questionTitleEl.textContent = questionsObj[4].q;
//     choiceOneEl.textContent = questionsObj[4].c1;
//     choiceTwoEl.textContent = questionsObj[4].c2;
//     choiceThreeEl.textContent = questionsObj[4].c3;
//     choiceFourEl.textContent = questionsObj[4].c4;
//     if (choiceOneEl.clicked === true ||  
//         choiceTwoEl.clicked === true || 
//         choiceThreeEl.clicked === true) {
//         wrongORrightEl.textContent = "Wrong!";
//         count += 1;
//     } else if (choiceFourEl.clicked === true) {
//         wrongORrightEl.textContent = "Correct!";
//         count += 1;
//     };
// };

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



var nextQuestion = function() {
    console.log("nextQuestion function executed");
    qObj = questionsObj.length;
    for (var i = 0; i < qObj; i++) {
        questionTitleEl.textContent = questionsObj[i].q;
        choiceOneEl.textContent = questionsObj[i].c1;
        choiceTwoEl.textContent = questionsObj[i].c2;
        choiceThreeEl.textContent = questionsObj[i].c3;
        choiceFourEl.textContent = questionsObj[i].c4;
    }
    // for (var i = 0; i <= 5; i++) {
    //     if (questionsObj[i] === 1) {
    // };

    // var ii = questionsObj.length;

    // for (i = 0; i < ii; i++) {
    //     switch(questionsObj[i]) {
    //         case 0:
    //             questionTitleEl.textContent = questionsObj[i].q;
    //             choiceOneEl.textContent = questionsObj[i].c1;
    //             choiceTwoEl.textContent = questionsObj[i].c2;
    //             choiceThreeEl.textContent = questionsObj[i].c3;
    //             choiceFourEl.textContent = questionsObj[i].c4;
    //             break;
    //     }
    
    
    // i = 0;
    // for (i = 0; i <= 4; ++i) {
    //     questionTitleEl.textContent = questionsObj[0].q;
    //     choiceOneEl.textContent = questionsObj[0].c1;
    //     choiceTwoEl.textContent = questionsObj[0].c2;
    //     choiceThreeEl.textContent = questionsObj[0].c3;
    //     choiceFourEl.textContent = questionsObj[0].c4;
    //     choiceOneClickEl;
    //     console.log(i);
    // }
    // }
};