// COLLAPSING SIDE BAR
const sidebar = document.getElementById('sidebar');

window.addEventListener('resize', () => (window.innerHeight >= window.innerWidth) ? sidebar.classList.add('collapse') : sidebar.classList.remove('collapse'));