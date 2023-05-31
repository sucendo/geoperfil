// Elementos del DOM
const quizContainer = document.createElement('div');
quizContainer.classList.add('quiz-container');
document.getElementById('root').appendChild(quizContainer);

let currentQuestionIndex = 0; // Índice de la pregunta actual
let remainingQuestions = 10; // Número de preguntas restantes
let quizQuestions = []; // Preguntas para el juego actual
let countdownTimer; // Temporizador de cuenta regresiva

// Función para iniciar el juego
function startGame(questions) {
  clearQuizContainer();
  resetQuizState();

  fetch(questions)
    .then(response => response.text())
    .then(data => {
      eval(data);
      quizQuestions = getRandomQuestions(remainingQuestions);
      showQuestion();
    })
    .catch(error => console.log('Error al cargar el archivo questions.js:', error));
}

// Función para limpiar el contenedor del cuestionario
function clearQuizContainer() {
  quizContainer.innerHTML = '';
}

// Función para reiniciar el estado del cuestionario
function resetQuizState() {
  currentQuestionIndex = 0;
  remainingQuestions = 10;
  quizQuestions = [];
  clearInterval(countdownTimer);
}

// Función para mostrar la pregunta actual
function showQuestion() {
  const question = quizQuestions[currentQuestionIndex];

  clearQuizContainer();

  const questionElement = document.createElement('div');
  questionElement.classList.add('question');
  questionElement.innerHTML = `<h3>${currentQuestionIndex + 1}. ${question.question}</h3>`;

  question.options.forEach((option, optionIndex) => {
    const optionElement = createOptionButton(option, optionIndex);
    questionElement.appendChild(optionElement);
  });

  quizContainer.appendChild(questionElement);

  startCountdown();
}

// Función para crear un botón de opción
function createOptionButton(option, optionIndex) {
  const optionButton = document.createElement('button');
  optionButton.classList.add('option');
  optionButton.innerText = option;
  optionButton.addEventListener('click', () => handleOptionSelection(optionIndex));
  return optionButton;
}

// Función para manejar la selección de una opción
function handleOptionSelection(optionIndex) {
  const currentQuestion = quizQuestions[currentQuestionIndex];
  currentQuestion.userAnswer = optionIndex;

  clearInterval(countdownTimer);

  if (currentQuestionIndex < quizQuestions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
  } else {
    showResults();
  }
}

// Función para mostrar los resultados
function showResults() {
  clearQuizContainer();
  // Código para mostrar los resultados
  // ...
}

// Función para obtener un conjunto de preguntas aleatorias
function getRandomQuestions(count) {
  const availableQuestions = allQuestions.filter(question => !question.used);
  const shuffledQuestions = shuffleArray(availableQuestions);
  return shuffledQuestions.slice(0, count);
}

// Función para mezclar un array utilizando el algoritmo de Fisher-Yates
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Función para iniciar el temporizador de cuenta regresiva
function startCountdown() {
  const countdownElement = document.createElement('div');
  countdownElement.classList.add('countdown');
  countdownElement.innerText = '10';
  quizContainer.appendChild(countdownElement);

  let timeRemaining = 10;

  countdownTimer = setInterval(() => {
    timeRemaining--;
    countdownElement.innerText = timeRemaining;

    if (timeRemaining === 0) {
      clearInterval(countdownTimer);
      handleOptionSelection(-1); // Opción inválida para indicar que el tiempo ha expirado
    }
  }, 1000);
}

// Iniciar el juego al cargar la página
// startGame();
