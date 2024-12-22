const quizData = [
    {
      question: "What is the continent by land area?",
      options: ["North America", "Africa", "Australia", "Asia"],
      answer: "Australia"
    },
    {
      question: "Who developed the theory of relativity?",
      options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
      answer: "Albert Einstein"
    },
    {
      question: "Which fibre is used in bulletproof windows?",
      options: ["Nylon-6,6", "Terylene", "Polycarbonate", "Kevlar"],
      answer: "Polycarbonate"
    },
    {
        question: "Who is the first Indian Governor of the Reserve Bank of India(RBI)?",
        options: ["C D Deshmukh", "Sukumar Sen", "Amartya Sen", "C Rajagopalachari"],
        answer: "C D Deshmukh"
      },
      {
        question: "Based on which principle does the optical fibre work?",
        options: ["Diffraction of light", "Refraction of light", "Total Internal Reflection", "None of the above"],
        answer: "Total Internal Reflection"
      },
     
  ];
  
  let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');
const submitButton = document.getElementById('submit');
const homeButton = document.getElementById('home'); // Add a "Home" button in your HTML.

function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;
  optionsElement.innerHTML = "";

  currentQuestion.options.forEach(option => {
    const li = document.createElement('li');
    li.innerHTML = `<label><input type="radio" name="answer" value="${option}"> ${option}</label>`;
    optionsElement.appendChild(li);
  });
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (!selectedOption) {
    resultElement.innerText = "Please select an answer!";
    return;
  } 

  const answer = selectedOption.value;
  if (answer === quizData[currentQuestionIndex].answer) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  questionElement.style.display = 'none';
  optionsElement.style.display = 'none';
  submitButton.style.display = 'none';
  resultElement.innerText = `You scored ${score} out of ${quizData.length}`;
  homeButton.style.display = 'block'; // Show the home button.
}

function resetQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  questionElement.style.display = 'block';
  optionsElement.style.display = 'block';
  submitButton.style.display = 'block';
  resultElement.innerText = "";
  homeButton.style.display = 'none'; // Hide the home button.
  loadQuestion();
}

submitButton.addEventListener('click', checkAnswer);
homeButton.addEventListener('click', resetQuiz); // Attach reset functionality to the home button.

loadQuestion();
