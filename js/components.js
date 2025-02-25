// function loadComponent(selector, file) {
//     fetch(file)
//         .then(response => response.text())
//         .then(data => {
//             document.querySelector(selector).innerHTML = data;
//         })
//         .then(() => {
//             highlightActiveNav(); // Call function to highlight active link
//         })
//         .catch(error => console.error(`Error loading ${file}:`, error));
// }

// document.addEventListener("DOMContentLoaded", function () {
//     loadComponent("#header", "components/header.html");
// });
// function loadComponent(selector, file) {
//     // Ensure the correct path regardless of the current directory
//     let basePath = window.location.origin + "/components/";
//     let filePath = basePath + file;

//     fetch(filePath)
//         .then(response => response.text())
//         .then(data => {
//             document.querySelector(selector).innerHTML = data;
//         })
//         .then(() => {
//             highlightActiveNav(); // Ensure active link highlighting still works
//         })
//         .catch(error => console.error(`Error loading ${filePath}:`, error));
// }

// document.addEventListener("DOMContentLoaded", function () {
//     loadComponent("#header", "header.html"); // Now uses absolute path
// });

function loadComponent(selector, file, callback) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.querySelector(selector).innerHTML = data;
        })
        .then(() => {
            if (callback) callback(); // Run callback function (for scripts)
        })
        .catch(error => console.error(`Error loading ${file}:`, error));
}

document.addEventListener("DOMContentLoaded", function () {
    loadComponent("#header", "components/header.html", setupNavigation);
});

// Function to initialize navigation script after header is loaded
function setupNavigation() {
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav');
    const navFooter = document.querySelector('.nav-footer');

    if (!burgerMenu || !nav) return; // Ensure elements exist before adding event listeners

    burgerMenu.addEventListener('click', () => {
        nav.classList.toggle('active');
        burgerMenu.classList.toggle('open');
        burgerMenu.textContent = burgerMenu.classList.contains('open') ? '✖' : '☰';

        if (navFooter) {
            navFooter.classList.toggle('active');
        }

        document.body.style.overflow = burgerMenu.classList.contains('open') ? 'hidden' : 'auto';
    });

    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !burgerMenu.contains(e.target)) {
            nav.classList.remove('active');
            burgerMenu.classList.remove('open');
            burgerMenu.textContent = '☰';
            document.body.style.overflow = 'auto';
        }
    });

    setupDropdowns(); // Run dropdown logic after header loads
}

// Function to set up dropdown menus
function setupDropdowns() {
    const dropdowns = document.querySelectorAll(".dropdown");

    if (window.innerWidth >= 1000) {
        dropdowns.forEach(dropdown => {
            const dropdownMenu = dropdown.querySelector(".dropdown-menu");

            dropdown.addEventListener("mouseenter", () => {
                dropdownMenu.classList.add("show");
            });

            dropdown.addEventListener("mouseleave", () => {
                dropdownMenu.classList.remove("show");
            });
        });
    }

    const dropdownMobiles = document.querySelectorAll(".dropdown-mobile");

    dropdownMobiles.forEach(dropdownMobile => {
        const dropdownMobileMenu = dropdownMobile.querySelector(".dropdown-menu-mobile");

        dropdownMobile.addEventListener("click", () => {
            dropdownMobileMenu.classList.toggle("show");
        });
    });
}
