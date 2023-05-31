// Importar la biblioteca de enrutamiento page.js
import page from 'page';

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
    loadContact();
  }
}

// Función para cargar un script de forma dinámica
function loadScript(scriptPath, callback) {
  const script = document.createElement('script');
  script.src = scriptPath;
  script.onload = callback;
  document.head.appendChild(script);
}

function loadQuiz(questionsFile) {
  const root = document.getElementById('root');
  root.innerHTML = '';

  // Cargar el archivo de las preguntas de forma dinámica de la variable questionsFile
  loadScript(questionsFile, function() {
    // Llamar a la función startGame del archivo quiz.js
    startGame(questionsFile);
  });
}

function loadContact() {
  const root = document.getElementById('root');
  root.innerHTML = '<h2>Contacto</h2><p>Esta es la página de contacto. Pero...</p>';
}

// Configurar las rutas y el enrutamiento con page.js
page('/', function() {
  navigateTo('home');
});

page('/about', function() {
  navigateTo('about');
});

page('/quiz', function() {
  navigateTo('quiz');
});

page('/kids', function() {
  navigateTo('kids');
});

page('/blog', function() {
  navigateTo('blog');
});

page('/contact', function() {
  navigateTo('contact');
});

// Iniciar el enrutamiento
page();

// Navegar a la página de inicio por defecto al cargar la página
page('/');
