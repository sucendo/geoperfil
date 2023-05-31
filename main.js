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
    root.innerHTML = '<h2>Blog</h2><p>Este es mi blog dinámico</p><p></p><p></p>';
    updateURL('blog');
  } else if (page === 'contact') {
    root.innerHTML = '<h2>Contacto</h2><p>Esta es la página de contacto. Pero...</p>';
    updateURL('contact');
  }
}

// Función para actualizar la URL
function updateURL(page) {
  const url = window.location.href;
  const baseURL = url.split('#')[0]; // Obtener la parte base de la URL sin el fragmento

  if (page) {
    const newURL = baseURL + '#' + page; // Construir la nueva URL con el fragmento de página
    history.replaceState(null, '', newURL); // Reemplazar la URL actual sin recargar la página
  } else {
    history.replaceState(null, '', baseURL); // Restablecer la URL base si no hay fragmento de página
  }
}

// Resto del código...

// Navegar a la página de inicio por defecto al cargar la página
navigateTo('home');
