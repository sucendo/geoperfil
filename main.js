// Función para cambiar de página
function navigateTo(page) {
  const root = document.getElementById('root');
  root.innerHTML = '';

  if (page === 'home') {
    root.innerHTML = '<h1>Hola amig@</h1><object data="hombre.svg" type="image/svg+xml"></object>';
  } else if (page === 'about') {
    root.innerHTML = '<h2>Acerca de</h2><p>Mi nombre es Sucendo.</p><p>Soy desarrollador informático.</p><p>He desarrollado este juego para mis 5 hijos.</p>';
  } else if (page === 'quiz') {
    loadQuiz("questions.js");
  } else if (page === 'kids') {
    loadQuiz("questionsKids.js");
  } else if (page === 'blog') {
    root.innerHTML = '<h2>Blog</h2><p>Este es mi blog dinámico</p><p></p><p></p>';
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

// Función para cargar el juego de preguntas
function loadQuiz(questions) {
  const root = document.getElementById('root');
  root.innerHTML = '';

  // Crear contenedor para el juego
  const quizContainer = document.createElement('div');
  quizContainer.classList.add('quiz-container');
  root.appendChild(quizContainer);

  // Cargar el archivo questions.js de forma dinámica
  loadScript(questions, function() {
    // Llamar a la función startGame del archivo quiz.js dentro de una función anónima
    startGame(questions);
  });
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
