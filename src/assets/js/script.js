  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.menu-content nav');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
