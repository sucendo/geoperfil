export function loadAbout(container) {
  const aboutDiv = document.createElement('div');
  aboutDiv.innerHTML = '<h2>Acerca de</h2><p>Esta es la página de Acerca de.</p>';
  container.appendChild(aboutDiv);
}
