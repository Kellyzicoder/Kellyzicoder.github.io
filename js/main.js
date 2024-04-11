// Sticky menu background
window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    this.document.querySelector("#navbar").style.opacity = 0.9;
  } else {
    this.document.querySelector("#navbar").style.opacity = 1;
  }
});


// Smooth Scrolling
$("#navbar a, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});


// This is for the Pop Up On my home Page
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");
const donate = document.getElementById("donate");
const volunteer = document.getElementById("volunteer");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function donateButton(donate) {
  donate.addEventListener("click", (e) => {
    window.location = "signin.html";
  });
}

function volunteerButton(volunteer) {
  volunteer.addEventListener("click", (e) => {
    window.location = "signup.html";
  });
}

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
  donateButton(donate);
  volunteerButton(volunteer);
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
