// Elementos del DOM
const root = document.getElementById('root');
const quizContainer = document.createElement('div');
quizContainer.classList.add('quiz-container');
root.appendChild(quizContainer);

let currentQuestionIndex = 0; // Índice de la pregunta actual
let remainingQuestions = 10; // Número de preguntas restantes
let quizQuestions = []; // Preguntas para el juego actual

// Función para iniciar el juego
function startGame() {
  allQuestions.forEach((question) => {
    question.used = false;
    question.userAnswer = null; // Reiniciar las respuestas del usuario
  });
  currentQuestionIndex = 0;
  remainingQuestions = 10;
  quizQuestions = getRandomQuestions(remainingQuestions);
  showQuestion();
}

// Función para obtener un conjunto de preguntas aleatorias
function getRandomQuestions(count) {
  const availableQuestions = allQuestions.filter((question) => !question.used);
  const shuffledQuestions = shuffleArray(availableQuestions);
  return shuffledQuestions.slice(0, count);
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

    const inputElement = document.createElement('input');
    inputElement.type = 'radio';
    inputElement.id = `option-${optionIndex}`;
    inputElement.name = 'question';
    inputElement.value = optionIndex;
    inputElement.checked = optionIndex === question.userAnswer; // Marcar la respuesta seleccionada

    const labelElement = document.createElement('label');
    labelElement.htmlFor = `option-${optionIndex}`;
    labelElement.innerText = option;

    optionElement.appendChild(inputElement);
    optionElement.appendChild(labelElement);

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
    currentQuestion.userAnswer = userAnswer;
    currentQuestion.used = true;

    currentQuestionIndex++;
    remainingQuestions--;

    if (remainingQuestions > 0) {
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

  let correctCount = 0;

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

      if (isCorrect && optionIndex === userAnswer) {
        questionElement.classList.add('correct');
        correctCount++;
      } else if (!isCorrect && optionIndex === userAnswer) {
        questionElement.classList.add('incorrect');
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
  scoreElement.innerText = `Obtuviste ${correctCount} respuestas correctas de ${currentQuestionIndex}.`;
  quizContainer.appendChild(scoreElement);
}

// Iniciar el juego al cargar la página
startGame();
