// STORYROOMS SHOWCASE - JAVASCRIPT
// Simple interactivity for landing page

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add active state to nav on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= (sectionTop - 100)) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// Coming soon alert for unavailable templates
document.querySelectorAll('.btn-secondary').forEach(btn => {
  if (btn.textContent.includes('Coming Soon') || btn.textContent.includes('Waitlist')) {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      alert('This template is coming soon! Join the waitlist at henrik@storyrooms.se');
    });
  }
});

// Console message
console.log('🏛️ StoryRooms - Transform Data into Living 3D Experiences');
console.log('Week 1 of 30-day launch 🚀');
console.log('Created by Henrik Söderholm');
