// Función para cambiar de página
function navigateTo(page) {
  const root = document.getElementById('root');
  root.innerHTML = '';

  if (page === 'home') {
    root.innerHTML = '<h1>Hola amig@</h1><object data="hombre.svg" type="image/svg+xml"></object>';
  } else if (page === 'about') {
    root.innerHTML = '<h2>Acerca de</h2><p>Mi nombre es Sucendo.</p><p>Soy desarrollador informático.</p><p>He desarrollado este juego para mis 5 hijos.</p>';  
  } else if (page === 'quiz') {
    loadQuiz('questions.js');
  } else if (page === 'kids') {
    loadQuiz('kidsQuestions.js');
  } else if (page === 'contact') {
    root.innerHTML = '<h2>Contacto</h2><p>Esta es la página de contacto. Pero...</p>';
  }
}

// Función para cargar el contenido del quiz en el contenedor
function loadQuiz(questionsFile) {
  const root = document.getElementById('root');
  root.innerHTML = '';

  // Obtener el contenido del archivo de preguntas
  fetch(questionsFile)
    .then(response => response.text())
    .then(data => {
      eval(data); // Ejecutar el código JavaScript del archivo de preguntas

      const quizContainer = document.createElement('div');
      quizContainer.classList.add('quiz-container');
      root.appendChild(quizContainer);

      let currentQuestionIndex = 0; // Índice de la pregunta actual
      let quizQuestions = []; // Preguntas para el juego actual

      // Función para mostrar la pregunta actual
      function showQuestion() {
        const question = quizQuestions[currentQuestionIndex];

        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `<h3>${currentQuestionIndex + 1}. ${question.question}</h3>`;

        question.options.forEach(function(option, optionIndex) {
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

      // Función para manejar el evento de siguiente pregunta
      function handleNext() {
        const selectedOption = document.querySelector('input[name="question"]:checked');

        if (selectedOption) {
          const userAnswer = parseInt(selectedOption.value);
          const currentQuestion = quizQuestions[currentQuestionIndex];
          currentQuestion.userAnswer = userAnswer;

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

        let correctCount = 0;

        quizQuestions.forEach(function(question, index) {
          const questionElement = document.createElement('div');
          questionElement.classList.add('result');

          questionElement.innerHTML = `<h3>${index + 1}. ${question.question}</h3>`;

          const userAnswer = question.userAnswer;
          const correctAnswer = question.correctAnswer;

          if (userAnswer === correctAnswer) {
            questionElement.classList.add('correct');
            correctCount++;
          } else {
            questionElement.classList.add('incorrect');
          }

          const options = question.options.map((option, optionIndex) => {
            const optionElement = document.createElement('div');
            optionElement.innerHTML = `
              <input type="radio" disabled ${optionIndex === userAnswer ? 'checked' : ''}>
              <label>${option}</label>
            `;
            return optionElement.outerHTML;
          });

          questionElement.innerHTML += options.join('');

          quizContainer.appendChild(questionElement);
        });

        const resultMessage = document.createElement('p');
        resultMessage.innerText = `Obtuviste ${correctCount} respuestas correctas de ${quizQuestions.length}.`;
        quizContainer.appendChild(resultMessage);
      }

      // Obtener las preguntas para el juego
      quizQuestions = getRandomQuestions(10); // Obtener 10 preguntas aleatorias

      // Mostrar la primera pregunta
      showQuestion();
    })
    .catch(error => console.log('Error al cargar el archivo de preguntas:', error));
}

// Función para cargar el script de forma dinámica
function loadScript(scriptPath, callback) {
  const script = document.createElement('script');
  script.src = scriptPath;
  script.onload = callback;
  document.head.appendChild(script);
}

// Manejo de eventos de navegación
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('nav a');
  links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const page = link.getAttribute('data-page');
      if (page === 'quiz') {
        loadQuiz('questions.js'); // Cargar preguntas para el quiz
      } else if (page === 'kids') {
        loadQuiz('kidsQuestions.js'); // Cargar preguntas para el juego de niños
      } else {
        navigateTo(page);
      }
    });
  });
});

// Navegar a la página de inicio por defecto al cargar la página
navigateTo('home');
