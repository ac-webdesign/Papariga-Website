function highlightActiveNav() {
    let currentPath = window.location.pathname.split("/").pop(); // Get current file name
    let navLinks = document.querySelectorAll(".nav-item, .nav-link");

    navLinks.forEach(link => {
        let linkPath = link.getAttribute("href");
        if (linkPath === currentPath) {
            link.style.color = "#FFB162"; // Apply active link color
        }
    });
}

document.addEventListener("DOMContentLoaded", highlightActiveNav);
