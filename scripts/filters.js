const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
const storyCards = Array.from(document.querySelectorAll("[data-category]"));

function setActiveFilter(category) {
  for (const button of filterButtons) {
    const isActive = button.dataset.filter === category;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  }

  for (const card of storyCards) {
    const isVisible = category === "Všetko" || card.dataset.category === category;
    card.hidden = !isVisible;
  }
}

for (const button of filterButtons) {
  button.setAttribute("aria-pressed", String(button.classList.contains("is-active")));
  button.addEventListener("click", () => setActiveFilter(button.dataset.filter));
}
