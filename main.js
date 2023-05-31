// Función para cambiar de página
function navigateTo(page) {
  const root = document.getElementById('root');
  root.innerHTML = '';

  if (page === 'home') {
    root.innerHTML = '<h1>Hola amig@</h1><object data="hombre.svg" type="image/svg+xml"></object>';
    updateURL('');
  } else if (page === 'about') {
    root.innerHTML = '<h2>Acerca de</h2><p>Mi nombre es Sucendo.</p><p>Soy desarrollador informático.</p><p>He desarrollado este juego para mis 5 hijos.</p>';
    updateURL('about');
  } else if (page === 'quiz') {
    loadQuiz("questions.js");
    updateURL('quiz');
  } else if (page === 'kids') {
    loadQuiz("questionsKids.js");
    updateURL('kids');
  } else if (page === 'blog') {
    loadBlog();
    updateURL('blog');
  } else if (page === 'contact') {
    root.innerHTML = '<h2>Contacto</h2><p>Esta es la página de contacto. Pero...</p>';
    updateURL('contact');
  }
}

// Función para cargar un script de forma dinámica
function loadScript(scriptPath, callback) {
  const script = document.createElement('script');
  script.src = scriptPath;
  script.onload = callback;
  document.head.appendChild(script);
}

/** Quiz **/

function loadQuiz(questionsFile) {
  const root = document.getElementById('root');
  root.innerHTML = '';

  // Cargar el archivo de las preguntas de forma dinámica de la variable questionsFile
  loadScript(questionsFile, function() {
    // Llamar a la función startGame del archivo quiz.js
    startGame(questionsFile);
  });
}

/** Blog **/

function loadBlog() {
  const root = document.getElementById('root');
  root.innerHTML = '';

  // Cargar el archivo JavaScript de forma dinámica
  loadScript('blog.js', function() {
    // El objeto 'blogData' estará disponible desde el archivo 'blog.js'

    // Generar el contenido del blog a partir de los datos
    const blogContent = generateBlogContent(blogData);

    // Insertar el contenido en el contenedor
    root.innerHTML = blogContent;
  });
}

function generateBlogContent(data) {
  // Generar el contenido del blog a partir de los datos del archivo JSON
  let blogHTML = '<h2>Blog</h2>';

  // Recorrer los artículos del blog y generar el HTML correspondiente
  data.articles.forEach(article => {
    blogHTML += '<div class="article">';
    blogHTML += `<h3>${article.title}</h3>`;
    blogHTML += `<p>${article.content}</p>`;
    blogHTML += '</div>';
  });

  return blogHTML;
}

/** Navegación **/

function updateURL(section) {
  const currentURL = window.location.href;
  const baseURL = currentURL.split('#')[0]; // Obtener la parte base de la URL sin el fragmento

  // Actualizar la URL reemplazando el fragmento con el nombre de la sección
  const newURL = baseURL + (section ? '#' + section : '');
  history.replaceState(null, null, newURL);
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
