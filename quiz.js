// Array con las preguntas del quiz
const questions = [
  {
    question: '¿Cuál es la capital de Francia?',
    options: ['Londres', 'París', 'Madrid', 'Roma'],
    correctAnswer: 1
  },
  {
    question: '¿Cuántos planetas hay en el sistema solar?',
    options: ['5', '7', '8', '9'],
    correctAnswer: 2
  },
  {
    question: '¿Cuál es el río más largo del mundo?',
    options: ['Nilo', 'Amazonas', 'Yangtsé', 'Mississippi'],
    correctAnswer: 1
  }
];

// Función para cargar el contenido del quiz en el contenedor
function loadQuiz(container) {
  container.innerHTML = '';

  // Generar las preguntas y opciones del quiz
  questions.forEach(function(question, index) {
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.innerHTML = `<h3>${index + 1}. ${question.question}</h3>`;

    question.options.forEach(function(option, optionIndex) {
      const optionElement = document.createElement('div');
      optionElement.classList.add('option');
      optionElement.innerHTML = `
        <input type="radio" id="option-${index}-${optionIndex}" name="question-${index}" value="${optionIndex}">
        <label for="option-${index}-${optionIndex}">${option}</label>
      `;
      questionElement.appendChild(optionElement);
    });

    container.appendChild(questionElement);
  });

  // Agregar botón de envío de respuestas
  const submitButton = document.createElement('button');
  submitButton.innerText = 'Enviar Respuestas';
  submitButton.addEventListener('click', checkAnswers);
  container.appendChild(submitButton);
}

// Función para verificar las respuestas seleccionadas por el usuario
function checkAnswers() {
  const answerElements = document.querySelectorAll('input[type="radio"]:checked');
  const userAnswers = Array.from(answerElements).map(function(element) {
    return parseInt(element.value);
  });

  let correctCount = 0;
  userAnswers.forEach(function(userAnswer, index) {
    const question = questions[index];
    if (userAnswer === question.correctAnswer) {
      correctCount++;
    }
  });

  const resultMessage = `Obtuviste ${correctCount} respuestas correctas de ${questions.length}.`;
  alert(resultMessage);
}

// Exportar la función loadQuiz para poder utilizarla en main.js
export { loadQuiz };
