// form validation -----------------------------------------------------
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill in all fields");
        return false;
    }

    alert("Thank you! Your message has been sent.");
    return true;
}

// mobile menu toggle ---------------------------------------------------
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // close menu when a link is tapped (mobile)
    navLinks.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
            navLinks.classList.remove("active");
        }
    });
}
