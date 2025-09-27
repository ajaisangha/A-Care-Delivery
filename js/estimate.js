document.addEventListener("DOMContentLoaded", function() {
  // Toggle mobile nav
  const menuToggle = document.getElementById("menuToggle");
  const navUl = document.querySelector(".nav ul");

  if (menuToggle) {
    menuToggle.addEventListener("click", function() {
      navUl.classList.toggle("active");
    });
  }

  // Form submit and calculation logic
  const estimateForm = document.getElementById("estimateForm");
  const resultDiv = document.getElementById("estimateResult");

  estimateForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const service = document.getElementById("serviceType").value;
    const distanceInput = document.getElementById("distance").value;
    const distance = parseFloat(distanceInput);

    if (isNaN(distance) || distance < 0) {
      resultDiv.textContent = "Please enter a valid distance.";
      return;
    }

    let baseCost = 0;
    switch (service) {
      case "homeNursing":
        baseCost = 50;
        break;
      case "medicineDelivery":
        baseCost = 20;
        break;
      case "teleconsultation":
        baseCost = 30;
        break;
      default:
        baseCost = 0;
    }

    // Cost = base + distance * rate
    const ratePerKm = 1; // example rate
    const cost = baseCost + (distance * ratePerKm);

    // Time estimate, e.g. 1 minute per km (custom logic)
    const timeEstimate = Math.ceil(distance * 2); // e.g. 2 min per km

    resultDiv.textContent =
      `Estimated cost: $${cost.toFixed(2)}. ` +
      `Estimated time: ~${timeEstimate} minutes.`;
  });
});
