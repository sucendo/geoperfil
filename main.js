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
    loadQuiz(root);
  }
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
