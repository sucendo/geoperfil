export function loadHome(container) {
  const homeDiv = document.createElement('div');
  homeDiv.innerHTML = '<h2>Inicio</h2><p>Bienvenido a la página de inicio.</p>';
  container.appendChild(homeDiv);
}
