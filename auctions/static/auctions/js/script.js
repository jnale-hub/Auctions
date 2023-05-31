'use strict';

function toggleDescription() {
  const descriptionContainer = document.querySelector("#desc");
  const toggleBtn = document.querySelector(".toggle-btn");
  if (descriptionContainer.classList.contains("close")) {
    toggleBtn.textContent = "Show less";
    descriptionContainer.classList.remove("close");
    descriptionContainer.scrollIntoView({ behavior: "smooth", block: "end" });
  } else {
    toggleBtn.textContent = "Show more";
    descriptionContainer.classList.toggle("close");
  }

}