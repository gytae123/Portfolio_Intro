document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');

    // State
    const theme = localStorage.getItem('theme');

    // On mount
    if (theme === 'light-mode') {
        document.body.classList.add('light-mode');
    }

    // Handler
    const handleThemeToggle = () => {
        document.body.classList.toggle('light-mode');
        if (document.body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light-mode');
        } else {
            localStorage.removeItem('theme');
            document.body.classList.remove('light-mode');
        }
    };

    // Event
    themeToggleBtn.addEventListener('click', handleThemeToggle);
});

// export default darkMode;