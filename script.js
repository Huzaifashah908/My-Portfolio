document.getElementById("dark-mode-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

document.body.classList.toggle("dark-mode", localStorage.getItem("dark-mode") === "enabled");

document.getElementById("dark-mode-toggle").addEventListener("click", function() {
    let darkMode = document.body.classList.toggle("dark-mode");
    localStorage.setItem("dark-mode", darkMode ? "enabled" : "disabled");
});
