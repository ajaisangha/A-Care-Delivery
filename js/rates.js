// Simple interactivity — allows collapsing sections for easier mobile viewing
document.querySelectorAll('.rate-category h2').forEach(header => {
  header.style.cursor = 'pointer';
  header.addEventListener('click', () => {
    const table = header.nextElementSibling.nextElementSibling; // skip <p> desc
    if (table && table.tagName === 'TABLE') {
      table.classList.toggle('hidden');
    }
  });
});
