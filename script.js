const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      if(navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
      }
    });
  });
  document.getElementById('ctaBtn').addEventListener('click', () => {
    alert('Ready to unleash your creativity!');
  });
