const loader = document.getElementById("loader");

const toggleBtn = document.getElementById("themeToggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    toggleBtn.textContent = currentTheme === "dark" ? "Light mode" : "Dark mode";
}

toggleBtn.addEventListener("click", () => {
    let theme = document.documentElement.getAttribute("data-theme");

    if (theme === "dark") {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "Dark Mode";
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "Light Mode";
    }
});

if (!localStorage.getItem("theme")) {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.setAttribute(
        "data-theme",
        prefersDark ? "dark" : "light"
    );
}