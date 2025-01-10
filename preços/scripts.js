// Add smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Add hover effects for cards
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.transition = 'transform 0.3s ease';
  });

  card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
  });
});

// Add click animation for buttons
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', function() {
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
          this.style.transform = 'scale(1)';
      }, 100);
  });
});