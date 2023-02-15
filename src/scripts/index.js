"use strict";

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
const mode = document.querySelector(".mode");
const modeIcon = document.querySelector("#mode-icon");

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  localStorage.theme = "dark";
  modeIcon.removeAttribute("src");
  modeIcon.setAttribute("src", "./images/Iconsun.svg");
} else {
  document.documentElement.classList.remove("dark");
  localStorage.theme = "light";
  modeIcon.removeAttribute("src");
  modeIcon.setAttribute("src", "./images/Icon.svg");
}

//  Whenever the user explicitly chooses light mode

//  Whenever the user explicitly chooses dark mode
mode.addEventListener("click", (e) => {
  if (localStorage.theme === "dark") {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
    modeIcon.removeAttribute("src");
    modeIcon.setAttribute("src", "./images/Icon.svg");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
    modeIcon.removeAttribute("src");
    modeIcon.setAttribute("src", "./images/Iconsun.svg");
  }
});

// ! --------------------- Modal window ---------------------------------------

const modalWindow = document.querySelector(".modal-window"),
  signUpBtn = document.querySelector(".login-btn"),
  modalContent = document.querySelector(".modal-content"),
  closeBtn = document.querySelector(".close-btn");

signUpBtn.addEventListener("click", (e) => {
  modalWindow.classList.remove("hidden");
});
closeBtn.addEventListener("click", (e) => {
  modalWindow.classList.add("hidden");
});

modalWindow.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-window")) {
    modalContent.classList.toggle("shaker");
  }
});
