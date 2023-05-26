// Elementos del DOM
const root = document.getElementById('root');
const quizContainer = document.createElement('div');
quizContainer.classList.add('quiz-container');
root.appendChild(quizContainer);

let currentQuestionIndex = 0; // Índice de la pregunta actual
let quizQuestions = []; // Preguntas para el juego actual
let correctCount = 0; // Contador de respuestas correctas

// Función para iniciar el juego
function startGame() {
  currentQuestionIndex = 0;
  correctCount = 0;
  quizQuestions = getRandomQuestions();
  showQuestion();
}

// Función para obtener un conjunto de preguntas aleatorias
function getRandomQuestions() {
  const availableQuestions = allQuestions.slice(); // Copia todas las preguntas
  return shuffleArray(availableQuestions);
}

// Función para mostrar la pregunta actual
function showQuestion() {
  const question = quizQuestions[currentQuestionIndex];

  const questionElement = document.createElement('div');
  questionElement.classList.add('question');
  questionElement.innerHTML = `<h3>${currentQuestionIndex + 1}. ${question.question}</h3>`;

  question.options.forEach(function (option, optionIndex) {
    const optionElement = document.createElement('div');
    optionElement.classList.add('option');
    optionElement.innerHTML = `
      <input type="radio" id="option-${optionIndex}" name="question" value="${optionIndex}">
      <label for="option-${optionIndex}">${option}</label>
    `;
    questionElement.appendChild(optionElement);
  });

  const nextButton = document.createElement('button');
  nextButton.innerText = 'Siguiente';
  nextButton.addEventListener('click', handleNext);
  questionElement.appendChild(nextButton);

  quizContainer.innerHTML = '';
  quizContainer.appendChild(questionElement);
}

// Función para mezclar un array utilizando el algoritmo de Fisher-Yates
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Función para manejar el evento de siguiente pregunta
function handleNext() {
  const selectedOption = document.querySelector('input[name="question"]:checked');

  if (selectedOption) {
    const userAnswer = parseInt(selectedOption.value);
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const correctAnswer = currentQuestion.correctAnswer;

    if (userAnswer === correctAnswer) {
      correctCount++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResults();
    }
  } else {
    alert('Por favor, selecciona una opción.');
  }
}

// Función para mostrar los resultados
function showResults() {
  quizContainer.innerHTML = '<h2>Resultados</h2>';

  quizQuestions.forEach(function (question, index) {
    const questionElement = document.createElement('div');
    questionElement.classList.add('result');
    questionElement.innerHTML = `<h3>${index + 1}. ${question.question}</h3>`;

    const userAnswer = question.hasOwnProperty('userAnswer') ? question.userAnswer : null;
    const correctAnswer = question.correctAnswer;
    const isCorrect = userAnswer === correctAnswer;

    const options = question.options.map(function (option, optionIndex) {
      const optionElement = document.createElement('div');
      optionElement.classList.add('option');
      optionElement.innerHTML = `
        <input type="radio" id="result-option-${optionIndex}" name="result-question-${index}" disabled>
        <label for="result-option-${optionIndex}">${option}</label>
      `;

      if (optionIndex === userAnswer) {
        optionElement.classList.add('selected');
      }

      if (optionIndex === correctAnswer) {
        optionElement.classList.add('correct-answer');
      }

      return optionElement;
    });

    options.forEach(function (option) {
      questionElement.appendChild(option);
    });

    quizContainer.appendChild(questionElement);
  });

  const scoreElement = document.createElement('p');
  scoreElement.classList.add('score');
  scoreElement.innerText = `Obtuviste ${correctCount} respuestas correctas de ${quizQuestions.length}.`;
  quizContainer.appendChild(scoreElement);
}

// Iniciar el juego al cargar la página
startGame();
