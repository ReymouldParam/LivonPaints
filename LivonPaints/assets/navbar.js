document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-item .nav-link");

    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.closest(".nav-item").classList.add("active"); // Ensure active class is applied correctly
        }
    });
});