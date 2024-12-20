document.addEventListener('DOMContentLoaded', (event) => {
  // Initialize Lucide icons
  lucide.createIcons();

  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  

  menuToggle.addEventListener('click', () => {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Active nav link update on scroll
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (pageYOffset >= sectionTop - sectionHeight / 3) {
              current = section.getAttribute('id');
          }
      });

      navItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('href').substring(1) === current) {
              item.classList.add('active');
          }
      });
  });
});









