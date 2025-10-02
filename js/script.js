// script.js

// Example: Alert on clicking "Book a Delivery"
document.addEventListener("DOMContentLoaded", function () {
  const bookBtn = document.querySelector(".btn-lg");
  if (bookBtn) {
    bookBtn.addEventListener("click", function (e) {
      e.preventDefault();
      alert("Redirecting to booking page...");
    });
  }
});
