import "./style.css";
const contactForm = document.getElementById("contact_form");

contactForm?.addEventListener("submit", submit);

function submit(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);

  // Extract values
  const name = formData.get("name")?.trim() || "";
  const email = formData.get("email")?.trim() || "";
  const message = formData.get("message")?.trim() || "";

  // Validate fields
  if (!name || !email || !message) {
    return alert("All Fields are required.");
  }

  // Disable the submit button
  const submitButton = form.querySelector("button[type='submit']");
  submitButton.disabled = true;
  submitButton.textContent = "Submitting...";

  fetch("https://formsubmit.co/ajax/mahmoodkns@hotmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      message: message,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success === "false") {
        throw new Error("An error has occurred.");
      } else {
        console.log(data);
        alert("Form submitted successfully!");
        form.reset(); // Reset the form after successful submission
      }
    })
    .catch((error) => {
      console.error(error);
      alert(error.message || "An unexpected error occurred.");
    })
    .finally(() => {
      // Re-enable the submit button
      submitButton.disabled = false;
      submitButton.textContent = "Submit";
    });
}
