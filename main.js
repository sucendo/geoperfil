function navigateTo(page, pageTitle, url) {
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
    loadContact(); // Cargar la página de contacto
    pageTitle = 'Contacto'; // Actualizar el título de la página
    url = 'https://sucendo.github.io/geoperfil/contacto'; // Actualizar la URL de la página
  }

  // Actualizar el título de la página
  document.title = pageTitle;

  // Cambiar la URL sin recargar la página
  history.pushState({ page: page }, pageTitle, url);
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
  root.innerHTML = '';

  // Aquí puedes agregar el contenido específico de la página de contacto
  const contactContent = `
    <h2>Contacto</h2>
    <p>Esta es la página de contacto. Puedes utilizar el siguiente formulario para ponerte en contacto con nosotros:</p>
    <form>
      <!-- Aquí iría el formulario de contacto -->
    </form>
  `;

  root.innerHTML = contactContent;
}

document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('nav a');
  links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const page = link.getAttribute('data-page');
      const pageTitle = link.innerText; // Obtener el título de la página desde el texto del enlace
      const url = link.getAttribute('href'); // Obtener la URL del enlace

      navigateTo(page, pageTitle, url);
    });
  });
});

// Navegar a la página de inicio por defecto al cargar la página
navigateTo('home', 'Inicio', '/');
