document.addEventListener('DOMContentLoaded', () => {
  // Generate video grid items
  const videoGrid = document.getElementById('videoGrid');
  const videoUrls = [
      'https://images.unsplash.com/photo-1500500000000-1',
      'https://images.unsplash.com/photo-1500500000000-2',
      'https://images.unsplash.com/photo-1500500000000-3',
      'https://images.unsplash.com/photo-1500500000000-4',
      'https://images.unsplash.com/photo-1500500000000-5',
      'https://images.unsplash.com/photo-1500500000000-6'
  ];

  videoUrls.forEach((url, index) => {
      const videoCard = document.createElement('div');
      videoCard.className = 'video-card';
      videoCard.innerHTML = `
          <img src="${url}?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Video ${index + 1}">
          <div class="play-button"></div>
      `;
      videoGrid.appendChild(videoCard);
  });

  // Add smooth scroll behavior for navigation links
  document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' });
          }
      });
  });
});