let num1 = Math.ceil(Math.random() * 10);
let num2 = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if (score === null) {
    score = 0;
}

scoreEl.innerText = `Score: ${score}`;

questionEl.innerText = `What is ${num1} multiplied by ${num2}?`;

let correctAns = num1 * num2;

formEl.addEventListener("submit", (event) => {
    event.preventDefault();  // Prevent form from refreshing
    const userAns = +inputEl.value;
    if (userAns === correctAns) {
        score++;
    } else {
        score--;
    }
    updateLocalStorage(); // Update localStorage after checking the answer
    scoreEl.innerText = `Score: ${score}`;  // Update score on screen

    // Generate new question
    num1 = Math.ceil(Math.random() * 10);
    num2 = Math.ceil(Math.random() * 10);
    correctAns = num1 * num2;
    questionEl.innerText = `What is ${num1} multiplied by ${num2}?`;
    inputEl.value = "";  // Clear input field
});

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));  // Use setItem to save score
}
