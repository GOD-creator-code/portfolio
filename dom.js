// DOM.js - Day/Night Mode Toggle

const toggleButton = document.getElementById('toggleMode');

// Check if there's a stored theme preference
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    toggleButton.checked = true;
} else {
    document.body.classList.remove('dark-mode');
    toggleButton.checked = false;
}

// Listen for toggle button changes
toggleButton.addEventListener('change', () => {
    if (toggleButton.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
});
