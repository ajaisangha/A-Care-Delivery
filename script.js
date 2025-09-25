document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.accordion-btn');

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const panel = this.nextElementSibling;

      // Collapse all panels
      document.querySelectorAll('.panel').forEach(p => {
        if (p !== panel) {
          p.style.maxHeight = null;
          p.classList.remove('open');
        }
      });

      // Toggle current panel
      const isOpen = panel.classList.contains('open');

      panel.classList.toggle('open');
      this.classList.toggle('active');

      if (isOpen) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });
});