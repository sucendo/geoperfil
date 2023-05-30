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
  } else if (page === 'kids') {
    loadScript('kidsQuiz.js', loadKids);
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

function loadQuiz() {
  const root = document.getElementById('root');
  root.innerHTML = '';

  // Cargar el archivo quiz.js de forma dinámica
  loadScript('quiz.js', function() {
    // Llamar a la función startGame del archivo quiz.js
    startGame();
  });
}

// Función para cargar el contenido del quiz para niños en el contenedor
function loadKids() {
  const root = document.getElementById('root');
  root.innerHTML = '';

  // Cargar el archivo kidsQuiz.js de forma dinámica
  loadScript('kidsQuiz.js', function() {
    // Llamar a la función startGame del archivo kidsQuiz.js
    startGame();
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
