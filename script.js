const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What protocol is used for secure communication over a computer network?",
        options: ["HTTP", "FTP", "SSH", "SMTP"],
        answer: "SSH"
    },
    {
        question: "What does TCP stand for in terms of computer networking?",
        options: ["Transmission Control Protocol", "Transport Control Protocol", "Transfer Control Protocol", "Telecommunication Control Protocol"],
        answer: "Transmission Control Protocol"
    },
    {
        question: "What is the full form of URL?",
        options: ["Universal Resource Locator", "Uniform Resource Locator", "Uniform Request Locator", "Universal Request Locator"],
        answer: "Uniform Resource Locator"
    },
    // Add more questions here...
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submitBtn");
const resultElement = document.getElementById("result");

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("btn", "btn-light");
        button.addEventListener("click", () => {
            checkAnswer(option);
        });
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
        showFlashMessage("Correct!", "success");
    } else {
        showFlashMessage("Incorrect!", "failure");
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    questionElement.textContent = "Quiz Complete!";
    optionsElement.innerHTML = "";
    submitButton.style.display = "none";
    showFlashMessage(`Your Score: ${score}/${questions.length}`, "info");
}

function showFlashMessage(message, messageType) {
    const flashMessage = document.createElement("div");
    flashMessage.textContent = message;
    flashMessage.classList.add("flash-message", `flash-${messageType}`);
    resultElement.appendChild(flashMessage);

    // Remove flash message after 3 seconds
    setTimeout(() => {
        flashMessage.remove();
    }, 3000);
}

displayQuestion();
