document.addEventListener("DOMContentLoaded", () => {
    const root = document.documentElement;
    const themeButtons = document.querySelectorAll(".theme-colors button");

    // Change theme color on button click
    themeButtons.forEach(button => {
        button.addEventListener("click", () => {
            const color = button.getAttribute("data-color");
            root.style.setProperty("--primary-color", color);
        });
    });
    


    // Toggle dark/light mode
    const toggleThemeBtn = document.getElementById("toggle-theme");
    toggleThemeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            root.style.setProperty("--background-color", "#121212");
            root.style.setProperty("--text-color", "#ffffff");
        } else {
            root.style.setProperty("--background-color", "#ffffff");
            root.style.setProperty("--text-color", "#000000");
        }
    });
});
