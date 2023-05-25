// Archivo main.js

// Función para cambiar de página
function navigateTo(page) {
  const root = document.getElementById('root');
  root.innerHTML = '';

  if (page === 'home') {
    root.innerHTML = '<h1>Hola desde JavaScript</h1>';
  } else if (page === 'about') {
    root.innerHTML = '<h2>Acerca de</h2><p>Esta es la página de Acerca de...</p>';
  } else if (page === 'contact') {
    root.innerHTML = '<h2>Contacto</h2><p>Esta es la página de contacto.</p>';
  } else if (page === 'quiz') {
    loadQuiz();
  }
}

// Función para cargar el contenido del quiz en el contenedor
function loadQuiz() {
  const root = document.getElementById('root');
  root.innerHTML = '';

  const quizContainer = document.createElement('div');
  quizContainer.classList.add('quiz-container');
  root.appendChild(quizContainer);

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

    quizContainer.appendChild(questionElement);
  });

  // Agregar botón de envío de respuestas
  const submitButton = document.createElement('button');
  submitButton.innerText = 'Enviar Respuestas';
  submitButton.addEventListener('click', checkAnswers);
  quizContainer.appendChild(submitButton);
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
