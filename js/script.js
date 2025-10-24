document.addEventListener("DOMContentLoaded", () => {
  // Load header and footer dynamically
  Promise.all([
    fetch("header.html").then(res => res.text()),
    fetch("footer.html").then(res => res.text())
  ])
    .then(([headerData, footerData]) => {
      document.getElementById("header-placeholder").innerHTML = headerData;
      document.getElementById("footer-placeholder").innerHTML = footerData;

      // Initialize nav toggle AFTER header loads
      const toggle = document.getElementById("nav-toggle");
      const nav = document.getElementById("primary-nav");

      if (toggle && nav) {
        toggle.addEventListener("click", () => {
          const expanded = toggle.getAttribute("aria-expanded") === "true";
          toggle.setAttribute("aria-expanded", String(!expanded));
          nav.classList.toggle("open");
        });

        document.addEventListener("keydown", (e) => {
          if (e.key === "Escape" && nav.classList.contains("open")) {
            nav.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
            toggle.focus();
          }
        });

        nav.addEventListener("click", (e) => {
          if (e.target.matches(".nav-link") && nav.classList.contains("open")) {
            nav.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
          }
        });
      }
    })
    .catch(err => console.error("Error loading components:", err));
});
