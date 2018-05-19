// **[Basic Trivia (Demo)](./basic-trivia-demo.mov)**.

// * You'll create a trivia form with multiple choice or true/false options (your choice).

// * The player will have a limited amount of time to finish the quiz.

// * The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

// * Don't let the player pick more than one answer per question.

// * Don't forget to include a countdown timer.


var myQuestions = [
    {
        question: "What is the full name of Hogwarts?",
        answer: "The Hogwarts School of Witchcraft and Wizardry",
        possibleAnswers: ["The Hogwarts School of Witchcraft and Wizardry", "The Hogwarts School of Wizardry", "The Hogwarts School", "Hogwarts"]
    },
    {
        question: "What is Harry Potters Birthday?",
        answer: "July 31",
        possibleAnswers: ["July 31", "September 1", "August 1", "August 31"]
    },
    {
        question: "Which of these is the correct order of the Weasley children, by age?",
        answer: "Bill, Charlie, Percy, Fred & George, Ron, Ginny",
        possibleAnswers: ["Charlie, Bill, Percy, Fred & George, Ron, Ginny", "Bill, Charlie, Percy, Fred & George, Ron, Ginny", "Bill, Charlie, Fred & George, Percy, Ron, Ginny", "Bill, Charlie, Percy, Fred & George, Ginny, Ron"]
    },
    {
        question: "What is Albus Dumbledore's full name?",
        answer: "Albus Percival Wulfric Brian Dumbledore",
        possibleAnswers: ["Albus Percival Brian Wulfric Dumbledore", "Albus Wulfric Percival Brian Dumbledore", "Albus Brian Percival Wulfric Dumbledore", "Albus Percival Wulfric Brian Dumbledore"]
    },
    {
        question: "True or False. The Tale of the Three Brothers refers to the Three Dealthy Hallows ",
        answer: "True",
        possibleAnswers: ["True", "False"]
    },
]

var timeLeft = 45;
var counter;

function startQuiz() {
    for (question of myQuestions) {
        addQuestion(question)
    }
    timeLeft = 45;
    counter = setInterval(timer, 1000);
}

function timer() {
    timeLeft--;
    $("#seconds").text(timeLeft);
    console.log(timeLeft);
    if (timeLeft <= 0) {
        clearInterval(counter);
        console.log("Game Over");
    }
}

function addQuestion(question) {
    var div = $("<div>");
    div.addClass("my-4")
    var form = $("<form>")
    var showQuestion = $("<h4>").text(question.question);
    div.append(showQuestion);
    div.append(form);
    for (answer of question.possibleAnswers) {
        var radioBtn = $(`<input type = "radio" name =  value=${answer}/>`);
        var displayText = $("<span>").text("  " + answer + "  ");
        form.append(radioBtn);
        form.append(displayText);
        $("#quiz").append(div);
    }
}
//Next step would be to create an onclick function for when a user hits the submit button.
//Once the button is clicked, the timer would stop, the game would end,  and the player would see the score they received.
//The answers of the questions would be provided so the user could see what they missed.

window.onload = function (event) {
    $("#startGame").hide();
    $("#start").on("click", function (event) {
        startQuiz();
        $(this).hide();
        $("#startGame").show();
            
         })
};