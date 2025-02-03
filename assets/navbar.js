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


// gallery section animation
document.addEventListener("DOMContentLoaded", function () {
    const categoryItems = document.querySelectorAll(".category-item");
    const paintContainers = document.querySelectorAll(".paint-card-container");

    categoryItems.forEach((item) => {
        item.addEventListener("click", function () {
            // Remove 'active' class from all category items
            categoryItems.forEach((el) => el.classList.remove("active"));
            this.classList.add("active");

            const selectedCategory = this.getAttribute("data-category").toLowerCase();

            // Apply animation to each container
            paintContainers.forEach((container) => {
                const containerCategory = container.getAttribute("data-category").toLowerCase();

                if (selectedCategory === "all" || containerCategory === selectedCategory) {
                    // Show matching category with fade-in effect
                    container.style.display = "flex";
                    setTimeout(() => {
                        container.classList.add("fade-in");
                    }, 10);
                } else {
                    // Hide non-matching categories with fade-out effect
                    container.classList.remove("fade-in");
                    setTimeout(() => {
                        container.style.display = "none";
                    }, 300); // Match transition duration
                }
            });
        });
    });
});


// toggle action close buttton
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navContainer = document.querySelector(".nav-container");

    hamburger.addEventListener("click", () => {
        navContainer.classList.toggle("active"); // Show/hide menu
        hamburger.classList.toggle("active"); // Change to "X"
    });

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
        if (!navContainer.contains(event.target) && !hamburger.contains(event.target)) {
            navContainer.classList.remove("active");
            hamburger.classList.remove("active");
        }
    });
});


// pop-up card

// pop-up card
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const flagValue = urlParams.get('emailSuccess');
    const popupMessage = document.getElementById("popup-message");
    const popupHeading = document.getElementById("popup-heading");
    const popupPara = document.getElementById("popup-para");
    const closePopup = document.getElementById("close-popup");

    if (flagValue === 'true') {
        popupHeading.innerHTML = "EMAIL SENT SUCCESSFULLY";
        popupPara.innerHTML = "Thanks for Your Subscription"; // Clear any existing message
        popupMessage.style.display = "block";
    } else if (flagValue === 'false') {
        popupHeading.innerHTML = "EMAIL NOT SENT";
        popupPara.innerHTML = "There was an error sending your message. Please try again later.";
        popupMessage.style.display = "block";
    }

    closePopup.addEventListener("click", function () {
        popupMessage.style.display = "none";
    });

    // Get the current URL without the query parameters
    const baseUrl = window.location.href.split('?')[0];

    // Replace the current state with a new state without the query parameters
    history.replaceState(null, null, baseUrl);
});
