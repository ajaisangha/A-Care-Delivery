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

// Dynamic field display based on service type
const service = document.getElementById('service');
const packageGroup = document.getElementById('packageGroup');
const urgencyGroup = document.getElementById('urgencyGroup');

service.addEventListener('change', function () {
  const value = service.value;
  packageGroup.style.display = value === 'retail' ? 'block' : 'none';
  urgencyGroup.style.display = value === 'sameDay' ? 'block' : 'none';
});

// Estimate logic
document.getElementById('estimateForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const distance = parseFloat(document.getElementById('distance').value);
  const serviceType = service.value;
  const packageSize = document.getElementById('packageSize').value;
  const urgency = document.getElementById('urgency').value;
  let estimate = 0;

  if (isNaN(distance) || distance < 0) {
    alert("Please enter a valid distance.");
    return;
  }

  switch (serviceType) {
    case 'florist':
      if (distance <= 10) estimate = 15;
      else if (distance <= 15) estimate = 22;
      else if (distance <= 20) estimate = 35;
      else estimate = 40; // Holiday/Emergency
      break;

    case 'pharmacy':
      if (distance <= 5) estimate = 8;
      else if (distance <= 10) estimate = 15;
      else estimate = 20;
      break;

    case 'retail':
      switch (packageSize) {
        case 'small':
          if (distance <= 15) estimate = 12;
          else estimate = 18;
          break;
        case 'medium':
          estimate = distance <= 15 ? 16 : 24;
          break;
        case 'large':
          estimate = distance <= 15 ? 22 : 32;
          break;
        case 'xl':
          estimate = 'Custom quote required';
          break;
        default:
          estimate = 0;
      }
      break;

    case 'sameDay':
      switch (urgency) {
        case 'economy': estimate = 12; break;
        case 'standard': estimate = 18; break;
        case 'express': estimate = 28; break;
        case 'rush': estimate = 40; break;
        default: estimate = 0;
      }
      break;

    default:
      estimate = 0;
  }

  const resultDiv = document.getElementById('estimateResult');
  if (typeof estimate === 'number') {
    resultDiv.innerHTML = `💰 Estimated Price: <strong>$${estimate.toFixed(2)}</strong>`;
  } else {
    resultDiv.innerHTML = `💬 ${estimate}`;
  }
});
