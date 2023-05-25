// Función para cambiar de página
function navigateTo(page) {
  const root = document.getElementById('root');
  root.innerHTML = '';

  // Actualizar la URL dinámicamente
  history.pushState({ page }, null, `#${page}`);

  if (page === 'home') {
    root.innerHTML = '<h1>Hola desde JavaScript</h1>';
  } else if (page === 'about') {
    root.innerHTML = '<h2>Acerca de</h2><p>Esta es la página de Acerca de...</p>';
  } else if (page === 'contact') {
    root.innerHTML = '<h2>Contacto</h2><p>Esta es la página de contacto.</p>';
  } else if (page === 'quiz') {
    loadQuiz(root);
  }
}

// Función para cargar el contenido del quiz
// ...

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

  // Manejar el evento popstate para actualizar la página al navegar hacia atrás o adelante en el historial del navegador
  window.addEventListener('popstate', function(event) {
    const page = event.state.page;
    navigateTo(page);
  });
});

// Navegar a la página correspondiente según la URL actual al cargar la página
const currentPage = window.location.hash.slice(1);
navigateTo(currentPage || 'home');
