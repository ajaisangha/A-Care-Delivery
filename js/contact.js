// contact.js

document.addEventListener("DOMContentLoaded", () => {
  console.log("Contact page loaded.");

  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Collect form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Placeholder for email sending logic
    // Here you can integrate EmailJS, Formspree, or your backend endpoint
    status.textContent = "Sending message...";
    status.style.color = "#555";

    setTimeout(() => {
      status.textContent = "✅ Message sent successfully!";
      status.style.color = "green";
      form.reset();
    }, 1000);
  });
});
