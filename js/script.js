// script.js

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn-lg");
  buttons.forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      alert("Redirecting to booking page...");
    });
  });
});
