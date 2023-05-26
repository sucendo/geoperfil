// Archivo main.js

// Función para cambiar de página
function navigateTo(page) {
  const root = document.getElementById('root');
  root.innerHTML = '';

  if (page === 'home') {
    root.innerHTML = '<h1>Hola amig@</h1>';
  } else if (page === 'about') {
    root.innerHTML = '<h2>Acerca de</h2><p>Mi nombre es Sucendo.</p><p>Soy desarrollador informático.</p><p>He desarrollado este juego para mis 5 hijos.</p>';  
  } else if (page === 'quiz') {
    loadScript('quiz.js', loadQuiz);
  } else if (page === 'kids') {
    const kidsOptions = `
      <h2>Juego para niños</h2>
      <p>Selecciona una opción:</p>
      <button onclick="loadKidsQuiz('questions.js')">Opción 1</button>
      <button onclick="loadKidsQuiz('kidsQuestions.js')">Opción 2</button>
    `;
    root.innerHTML = kidsOptions;
  } else if (page === 'contact') {
    root.innerHTML = '<h2>Contacto</h2><p>Esta es la página de contacto. Pero...</p>';
  }
}

// Función para cargar un script de forma dinámica
function loadScript(scriptPath, callback) {
  const script = document.createElement('script');
  script.src = scriptPath;
  script.onload = callback;
  document.head.appendChild(script);
}

// Función para cargar el contenido del quiz en el contenedor
function loadQuiz() {
  const root = document.getElementById('root');
  root.innerHTML = '';

  // Obtener el contenido del archivo questions.js
  fetch('questions.js')
    .then(response => response.text())
    .then(data => {
      eval(data); // Ejecutar el código JavaScript de questions.js

      const quizContainer = document.createElement('div');
      quizContainer.classList.add('quiz-container');
      root.appendChild(quizContainer);

      // Generar las preguntas y opciones del quiz
      quizQuestions.forEach(function(question, index) {
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

        quizContainer.appendChild(questionElement);
      });

      // Agregar botón de envío de respuestas
      const submitButton = document.createElement('button');
      submitButton.innerText = 'Enviar Respuestas';
      submitButton.addEventListener('click', checkAnswers);
      quizContainer.appendChild(submitButton);
    })
    .catch(error => console.log('Error al cargar el archivo questions.js:', error));
}

// Función para cargar el juego de quiz para niños
function loadKidsQuiz(questionsFile) {
  const root = document.getElementById('root');
  root.innerHTML = '';

  // Obtener el contenido del archivo de preguntas para niños
  fetch(questionsFile)
    .then(response => response.text())
    .then(data => {
      eval(data); // Ejecutar el código JavaScript del archivo de preguntas para niños

      const quizContainer = document.createElement('div');
      quizContainer.classList.add('quiz-container');
      root.appendChild(quizContainer);

      // Generar las preguntas y opciones del quiz para niños
      quizQuestions.forEach(function(question, index) {
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

        quizContainer.appendChild(questionElement);
      });

      // Agregar botón de envío de respuestas para niños
      const submitButton = document.createElement('button');
      submitButton.innerText = 'Enviar Respuestas';
      submitButton.addEventListener('click', checkAnswers);
      quizContainer.appendChild(submitButton);
    })
    .catch(error => console.log('Error al cargar el archivo de preguntas para niños:', error));
}

// Función para verificar las respuestas del quiz
function checkAnswers() {
  // Implementación anterior de la función checkAnswers
}

// Manejo de eventos de navegación
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('nav a');
  links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const page = link.getAttribute('data-page');
      navigateTo(page);
    });
  });
});

// Navegar a la página de inicio por defecto al cargar la página
navigateTo('home');
