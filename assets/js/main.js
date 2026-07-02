
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.menu-toggle');
  const links = document.querySelector('.links');
  if (btn && links) btn.addEventListener('click', () => links.classList.toggle('open'));
});
