const themeToggleButton = document.querySelector('#theme-toggle');

function updateThemeButtonLabel() {
    if (!themeToggleButon) return;

    if (document.body.classList.contains("dark")) {
        themeToggleButton.textContent = "Light Mode";
    } else {
        themeToggleButton.textContent = "Dark Mode";
    }
}

if (themeToggleButton) {
    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        updateThemeButtonLabel();
    });

    // Set the initial label based on the current theme
    updateThemeButtonLabel();
}