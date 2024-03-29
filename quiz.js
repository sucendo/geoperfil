// Elementos del DOM
const quizContainer = document.createElement('div');
quizContainer.classList.add('quiz-container');
document.getElementById('root').appendChild(quizContainer);

let currentQuestionIndex = 0; // Índice de la pregunta actual
let remainingQuestions = 10; // Número de preguntas restantes
let quizQuestions = []; // Preguntas para el juego actual
let countdownTimer; // Temporizador de cuenta regresiva

// Función para iniciar el juego
function startGame(questionsFile) {
  const root = document.getElementById('root');
  root.innerHTML = '';

  // Obtener el contenido del archivo proporcionado por la variable questionsFile
  fetch(questionsFile)
    .then(response => response.text())
    .then(data => {
      eval(data); // Ejecutar el código JavaScript de questionsFile

      const quizContainer = document.createElement('div');
      quizContainer.classList.add('quiz-container');
      root.appendChild(quizContainer);

      let currentQuestionIndex = 0; // Índice de la pregunta actual
      let quizQuestions = []; // Preguntas para el juego actual

      // Función para mostrar la pregunta actual
      function showQuestion() {
        const question = quizQuestions[currentQuestionIndex];

        // Mezclar el orden de las opciones de respuesta
        //shuffleOptions(question); 

        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `<h3>${currentQuestionIndex + 1}. ${question.question}</h3>`;

        question.options.forEach(function(option, optionIndex) {
          const optionElement = document.createElement('button');
          optionElement.classList.add('option');
          optionElement.innerText = option;
          optionElement.addEventListener('click', () => handleAnswer(optionIndex));
          questionElement.appendChild(optionElement);
        });

        const countdownElement = document.createElement('div');
        countdownElement.classList.add('countdown');
        countdownElement.innerText = '20';
        questionElement.appendChild(countdownElement);

        startCountdown(countdownElement);

        quizContainer.innerHTML = '';
        quizContainer.appendChild(questionElement);
      }

      // Función para iniciar el temporizador de cuenta regresiva
      function startCountdown(countdownElement) {
        let timeRemaining = 20;

        countdownTimer = setInterval(function() {
          timeRemaining--;
          countdownElement.innerText = timeRemaining;

          if (timeRemaining === 0) {
            clearInterval(countdownTimer);
            handleNext();
          }
        }, 1000);
      }

      // Función para reiniciar el temporizador de cuenta regresiva
      function resetCountdown() {
        clearInterval(countdownTimer);
      }

      // Función para manejar la respuesta seleccionada
      function handleAnswer(optionIndex) {
        const currentQuestion = quizQuestions[currentQuestionIndex];
        currentQuestion.userAnswer = optionIndex;

        resetCountdown();
        handleNext();
      }

      // Función para manejar el evento de siguiente pregunta
      function handleNext() {
        const currentQuestion = quizQuestions[currentQuestionIndex];

        currentQuestionIndex++;

        if (currentQuestionIndex < quizQuestions.length) {
          resetCountdown();
          showQuestion();
        } else {
          showResults();
        }
      }

      // Función para mostrar los resultados
      function showResults() {
        quizContainer.innerHTML = '<h2>Resultados</h2>';

        let correctCount = 0;

        quizQuestions.forEach(function(question, index) {
          const questionElement = document.createElement('div');
          questionElement.classList.add('result');
          questionElement.innerHTML = `<h3>${index + 1}. ${question.question}</h3>`;

          const userAnswer = question.hasOwnProperty('userAnswer') ? question.userAnswer : null;
          const correctAnswer = question.correctAnswer;
          const isCorrect = userAnswer === correctAnswer;

          if (isCorrect) {
            correctCount++;
            questionElement.classList.add('correct');
          } else {
            questionElement.classList.add('incorrect');
          }

          const options = question.options.map(function(option, optionIndex) {
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

          options.forEach(function(option) {
            questionElement.appendChild(option);
          });

          quizContainer.appendChild(questionElement);
        });

        const scoreElement = document.createElement('p');
        scoreElement.classList.add('score');
        scoreElement.innerText = `Obtuviste ${correctCount} respuestas correctas de ${currentQuestionIndex}.`;
        quizContainer.appendChild(scoreElement);

        const playAgainButton = document.createElement('button');
        playAgainButton.innerText = '¿Volver a jugar?';
        playAgainButton.addEventListener('click', () => startGame(questionsFile));
        quizContainer.appendChild(playAgainButton);
      }

      // Obtener las preguntas para el juego
      quizQuestions = getRandomQuestions(10); // Obtener 10 preguntas aleatorias

      // Mostrar la primera pregunta
      showQuestion();
    })
    .catch(error => console.log('Error al cargar el archivo ' + questionsFile + ':', error));
}

// Función para obtener un conjunto de preguntas aleatorias
function getRandomQuestions(count) {
  const availableQuestions = allQuestions.filter((question) => !question.used);
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

// Función para mezclar el orden de las respuestas de una pregunta
function shuffleOptions(question) {
  const correctAnswer = question.correctAnswer;
  const options = [...question.options];

  // Mezclar las opciones de respuesta
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }

  // Encontrar el índice de la respuesta correcta antes de la mezcla
  const correctIndex = options.findIndex(option => option === correctAnswer);

  if (correctIndex !== -1) {
    // Actualizar el índice de la respuesta correcta en la pregunta mezclada
    question.correctAnswer = correctIndex;
  }

  // Actualizar las opciones de respuesta en la pregunta mezclada
  question.options = options;
}
