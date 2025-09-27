document.addEventListener("DOMContentLoaded", function() {
  // Menu toggle for mobile view
  const menuToggle = document.getElementById("menuToggle");
  const navUl = document.querySelector(".nav ul");

  menuToggle.addEventListener("click", function() {
    navUl.classList.toggle("active");
  });
});
