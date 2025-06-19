function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  fetch("/", {
    method: "POST",
    body: formData,
  })
    .then(() => {
      form.reset();
      document.getElementById("form-status").style.display = "block";
    })
    .catch((error) => {
      alert("Oops! There was a problem submitting the form");
    });
}
