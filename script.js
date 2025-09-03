/*
  Script to manage active states for the bottom navigation.
  When a navigation link is clicked, it receives the
  `active` class and other links are deactivated. This simple
  behaviour mimics the interactive feedback patterns found in
  Samsung’s bottom bars【599480136451797†L194-L211】.
*/

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-item');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
});