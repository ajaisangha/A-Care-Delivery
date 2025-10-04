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
