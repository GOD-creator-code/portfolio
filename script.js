// JavaScript for theme toggle
const themeToggleButton = document.getElementById("theme-toggle");

themeToggleButton.addEventListener("click", () => {
    // Toggle dark mode class on body
    document.body.classList.toggle("dark-mode");
    
    // Change button icon depending on the theme
    if (document.body.classList.contains("dark-mode")) {
        themeToggleButton.textContent = "🌞";  // Sun icon for light mode
    } else {
        themeToggleButton.textContent = "🌙";  // Moon icon for dark mode
    }
});
