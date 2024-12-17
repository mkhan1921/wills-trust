import "./style.css";
const contactForm = document.getElementById("contact_form");
const snackbar = document.getElementById("snackbar") as HTMLDivElement;
const scrollToTopBtn = document.getElementById("scrollToTop");

contactForm?.addEventListener("submit", submit);

function submit(e: SubmitEvent) {
  e.preventDefault();
  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);

  // Extract values
  const lastname = (formData.get("lastname") as string)?.trim() || "";
  const email = (formData.get("email") as string)?.trim() || "";
  const firstname = (formData.get("firstname") as string)?.trim() || "";
  const cellphone = (formData.get("cellphone_no") as string)?.trim() || "";
  const shariah = (formData.get("shariah") as string)?.trim() || "";
  const language = (formData.get("language") as string)?.trim() || "";

  // Validate fields
  if (
    !lastname ||
    !email ||
    !firstname ||
    !cellphone ||
    !shariah ||
    !language
  ) {
    return showSnackbar("All Fields are required.", "error");
  }

  // Disable the submit button
  const submitButton = form.querySelector(
    "button[type='submit']"
  ) as HTMLButtonElement;
  submitButton.disabled = true;
  submitButton.textContent = "Submitting...";

  fetch("https://formsubmit.co/ajax/muhammadkhan1921@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      firstname,
      lastname,
      email,
      cellphone,
      language,
      shariah,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success === "false") {
        throw new Error("An error has occurred.");
      } else {
        console.log(data);
        // alert("Form submitted successfully!");
        showSnackbar("Form submitted successfully!");
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

function showSnackbar(message: string, state?: string) {
  snackbar.classList.add(
    "flex",
    "animate-fade-in-out",
    state == "error" ? "bg-red-600" : "bg-green-600"
  );
  snackbar.classList.remove("hidden");
  snackbar.innerText = message;
  // After 3 seconds, remove the animation and hide the snackbar
  setTimeout(function () {
    snackbar.classList.remove("flex", "animate-fade-in-out");
    snackbar.classList.add("hidden");
  }, 3000);
}

// Show or hide the button based on scroll position
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollToTopBtn?.classList.replace("hidden", "flex");
  } else {
    scrollToTopBtn?.classList.replace("flex", "hidden");
  }
});

scrollToTopBtn?.addEventListener("click", scrollToTop);
// Scroll to top function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
