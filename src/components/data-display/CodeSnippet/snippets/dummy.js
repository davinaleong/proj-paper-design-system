// Dummy text snippet example in JS
const dummyText =
  "This is some dummy text used for testing JavaScript logic and UI rendering.";

// Simple function to inject the text into an element
function renderDummyText(elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;
  el.textContent = dummyText;
}

// Example usage
document.addEventListener("DOMContentLoaded", () => {
  renderDummyText("dummy-text");
});
