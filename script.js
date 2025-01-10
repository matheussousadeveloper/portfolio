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
  
  
  window.addEventListener('scroll', function () {
      const scrollIndicator = document.querySelector('.scroll-indicator');
      if (window.scrollY > 50) { // Ajuste o valor conforme necessário
          scrollIndicator.style.display = 'none';
      } else {
          scrollIndicator.style.display = 'block';
      }
  });  
  
  
  
  
  
  document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project');
    
    projects.forEach((project, index) => {
        project.style.opacity = '0';
        project.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            project.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            project.style.opacity = '1';
            project.style.transform = 'translateY(0)';
        }, index * 200);
        
        const tags = project.querySelectorAll('.tag');
        tags.forEach((tag, tagIndex) => {
            tag.style.opacity = '0';
            tag.style.transform = 'scale(0.8)';
            
            project.addEventListener('mouseenter', () => {
                setTimeout(() => {
                    tag.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                    tag.style.opacity = '1';
                    tag.style.transform = 'scale(1)';
                }, tagIndex * 100);
            });
            
            project.addEventListener('mouseleave', () => {
                tag.style.opacity = '0.8';
                tag.style.transform = 'scale(0.9)';
            });
        });
    });

    

    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            if (!link.classList.contains('active')) {
                link.style.color = '#2DD4BF';
                link.style.transform = 'scale(1.1)';
            }
        });
        link.addEventListener('mouseleave', () => {
            if (!link.classList.contains('active')) {
                link.style.color = '#a0aec0';
                link.style.transform = 'scale(1)';
            }
        });
    });
});  