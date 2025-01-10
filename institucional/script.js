// Add active class to navigation items
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', (e) => {
      document.querySelector('.navbar a.active')?.classList.remove('active');
      e.target.classList.add('active');
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      if (href !== '#') {
          document.querySelector(href).scrollIntoView({
              behavior: 'smooth'
          });
      }
  });
});

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
      }
  });
}, observerOptions);

// Apply fade-in animation to sections
document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  observer.observe(section);
});