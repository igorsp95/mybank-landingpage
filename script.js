////// TABS ///////

const tabBtns = document.querySelectorAll(".btn-tab");
const btnsContainer = document.querySelector(".tabs-btns");
const contents = document.querySelectorAll(".content-tab");

btnsContainer.addEventListener("click", (e) => {
  const clicked = e.target.closest(".btn-tab");

  if (!clicked) return;
  console.log(clicked);

  tabBtns.forEach((btn) => btn.classList.remove("btn-tab-active"));
  contents.forEach((content) => content.classList.remove("content-active"));
  clicked.classList.add("btn-tab-active");

  document
    .querySelector(`.content-tab-${clicked.dataset.tab}`)
    .classList.add("content-active");
});

////// MODAL SIGNUP ///////

const modalBtn = document.querySelector(".btn-primary-navbar");
const loginModal = document.querySelector(".modal-section");
const closeButton = document.querySelector(".modal-close-btn");
const overlay = document.querySelector(".overlay");

modalBtn.addEventListener("click", () => {
  loginModal.classList.add("modal-section-active");
});

overlay.addEventListener("click", () => {
  loginModal.classList.remove("modal-section-active");
});

closeButton.addEventListener("click", () => {
  loginModal.classList.remove("modal-section-active");
});

const signUpLink = document.querySelector(".signup-link");
const signInLink = document.querySelector(".signin-link");
const modalContentSignup = document.querySelector(".signup-content");
const modalContentSignin = document.querySelector(".signin-content");
const modalCard = document.querySelector(".modal");

signUpLink.addEventListener("click", () => {
  modalContentSignin.classList.remove("modal-content-active");
  modalContentSignup.classList.add("modal-content-active");
});

signInLink.addEventListener("click", () => {
  modalContentSignup.classList.remove("modal-content-active");
  modalContentSignin.classList.add("modal-content-active");
});

const inputs = document.querySelectorAll(".login-input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

////// REVEAL ///////

window.addEventListener("scroll", reveal);

function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    const windowheight = window.innerHeight;
    const revealtop = reveals[i].getBoundingClientRect().top;
    const revealpoint = 50;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
