// home.js
export function loadHome(container) {
  const homeDiv = document.createElement('div');
  homeDiv.innerHTML = '<h2>Inicio</h2><p>Bienvenido a la página de inicio.</p>';
  container.appendChild(homeDiv);
}

// about.js
export function loadAbout(container) {
  const aboutDiv = document.createElement('div');
  aboutDiv.innerHTML = '<h2>Acerca de</h2><p>Esta es la página de Acerca de.</p>';
  container.appendChild(aboutDiv);
}

// contact.js
export function loadContact(container) {
  const contactDiv = document.createElement('div');
  contactDiv.innerHTML = '<h2>Contacto</h2><p>Ponte en contacto con nosotros.</p>';
  container.appendChild(contactDiv);
}
