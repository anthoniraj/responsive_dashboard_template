// Function to update the logo image based on the theme
const updateLogo = (theme) => {
    const logo = document.getElementById('logo-image');
    if (logo) {  // Check if the logo image exists
        if (theme === 'dark') {
            logo.src = '../images/logo_for_dark.png'; // Dark mode logo
        } else {
            logo.src = '../images/logo_for_light.png'; // Light mode logo
        }
    }
};

// Load theme from localStorage
const loadTheme = () => {
    const storedTheme = localStorage.getItem('theme');
    const body = document.body;
    const modeIcon = document.getElementById('mode-icon');
    
    if (storedTheme === 'dark') {
        body.classList.add('dark-mode');
        modeIcon.textContent = '☀️'; // Sun icon for light mode
        updateLogo('dark'); // Change to dark logo
    } else {
        body.classList.remove('dark-mode');
        modeIcon.textContent = '🌙'; // Moon icon for dark mode
        updateLogo('light'); // Change to light logo
    }

    // Update tooltip styles based on the loaded theme
    updateTooltips();
};

// Toggle theme and save it to localStorage
const toggleTheme = () => {
    const body = document.body;
    body.classList.toggle('dark-mode');
    
    const modeIcon = document.getElementById('mode-icon');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        modeIcon.textContent = '☀️'; // Sun icon for light mode
        updateLogo('dark'); // Change to dark logo
    } else {
        localStorage.setItem('theme', 'light');
        modeIcon.textContent = '🌙'; // Moon icon for dark mode
        updateLogo('light'); // Change to light logo
    }

    // Update the tooltip styles based on the current mode
    updateTooltips();
};

// Function to update tooltip styles based on the current theme
const updateTooltips = () => {
    const tooltips = document.querySelectorAll('.tooltip');
    tooltips.forEach(tooltip => {
        tooltip.classList.toggle('dark', document.body.classList.contains('dark-mode'));
    });
};

// Apply stored theme on page load
document.addEventListener('DOMContentLoaded', loadTheme);
