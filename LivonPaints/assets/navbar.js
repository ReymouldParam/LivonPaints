document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-item .nav-link");

    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.closest(".nav-item").classList.add("active"); // Ensure active class is applied correctly
        }
    });
});


// character limit

document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('message');
    const charCount = document.getElementById('charCount');

    textarea.addEventListener('input', function() {
        const used = textarea.value.length;
        const remaining = 300 - used;
        charCount.textContent = `${used}/300 characters used`;

        // Optional: Change the text color when approaching the limit
        if (remaining <= 20) {
            charCount.style.color = 'red'; // Warn if only 20 characters or less remain
        } else {
            charCount.style.color = '#777'; // Default color
        }
    });
});
