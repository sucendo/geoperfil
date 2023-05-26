// Función para cambiar de página
function navigateTo(page) {
  const root = document.getElementById('root');
  root.innerHTML = '';

  if (page === 'home') {
    root.innerHTML = '<h1>Hola amig@</h1><object data="hombre.svg" type="image/svg+xml"></object>';
  } else if (page === 'about') {
    root.innerHTML = '<h2>Acerca de</h2><p>Mi nombre es Sucendo.</p><p>Soy desarrollador informático.</p><p>He desarrollado este juego para mis 5 hijos.</p>';  
  } else if (page === 'quiz') {
    loadScript('quiz.js', loadQuiz);
  } else if (page === 'contact') {
    root.innerHTML = '<h2>Contacto</h2><p>Esta es la página de contacto. Pero...</p>';
  } else if (page === 'kids') {
    loadScript('kidsQuestions.js', loadKidsQuiz);
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
  // Implementación anterior de la función loadQuiz
}

// Función para cargar el contenido del juego para niños en el contenedor
function loadKidsQuiz() {
  const root = document.getElementById('root');
  root.innerHTML = '';

  // Obtener el contenido del archivo de preguntas
  fetch('kidsQuestions.js')
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
        // Implementación anterior de la función showQuestion
      }

      // Función para manejar el evento de siguiente pregunta
      function handleNext() {
        // Implementación anterior de la función handleNext
      }

      // Función para mostrar los resultados
      function showResults() {
        // Implementación anterior de la función showResults
      }

      // Obtener las preguntas para el juego
      quizQuestions = getRandomQuestions(10); // Obtener 10 preguntas aleatorias

      // Mostrar la primera pregunta
      showQuestion();
    })
    .catch(error => console.log('Error al cargar el archivo de preguntas:', error));
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
