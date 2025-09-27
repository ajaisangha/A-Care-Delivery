document.addEventListener("DOMContentLoaded", function() {
  // Toggle menu on mobile
  var menuToggle = document.getElementById("menuToggle");
  var navUl = document.querySelector(".nav ul");

  menuToggle.addEventListener("click", function() {
    navUl.classList.toggle("active");
  });

  // Estimate form handling
  var estimateForm = document.getElementById("estimateForm");
  var resultDiv = document.getElementById("estimateResult");

  estimateForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var service = document.getElementById("serviceType").value;
    var distance = parseFloat(document.getElementById("distance").value);

    if (isNaN(distance) || distance < 0) {
      resultDiv.textContent = "Please enter a valid distance.";
      return;
    }

    // Sample estimation logic
    var baseCost;
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

    // Let's say cost is base plus $1 per km
    var cost = baseCost + (distance * 1);
    var timeEstimate = Math.ceil(distance / 10) * 10; // e.g. 10 km takes ≈10 min etc.

    resultDiv.textContent = "Estimated cost: $" + cost.toFixed(2) + ". Estimated arrival / service time: ~" + timeEstimate + " minutes.";
  });
});
