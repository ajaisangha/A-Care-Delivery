// script.js

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("button.btn-lg");

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      const action = button.dataset.action;

      if (action === "book") {
        window.location.href = "book.html"; // Replace with actual booking page
      } else if (action === "pickup") {
        window.location.href = "pickup.html"; // Replace with actual pickup page
      }
    });
  });
});


  (function(){
    const toggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('primary-nav');

    if (!toggle || !nav) return;

    toggle.addEventListener('click', function(){
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape' && nav.classList.contains('open')){
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });

    // Close when clicking a nav link (mobile)
    nav.addEventListener('click', function(e){
      if (e.target.matches('.nav-link') && nav.classList.contains('open')){
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  })();

