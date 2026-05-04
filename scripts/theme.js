const themeToggleButton = document.querySelector("#theme-toggle");

// Apply saved theme on page load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}

function updateThemeButtonLabel() {
  if (!themeToggleButton) return;

  if (document.body.classList.contains("dark")) {
    themeToggleButton.textContent = "Light Mode";
  } else {
    themeToggleButton.textContent = "Dark Mode";
  }
}

if (themeToggleButton) {
  themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark") ? "dark" : "light",
    );
    updateThemeButtonLabel();
  });

  // Set the initial label based on the current theme
  updateThemeButtonLabel();
}
