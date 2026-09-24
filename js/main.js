// ==========================================
// LOAN SOLUTION - MAIN JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // ------------------------------------------
    // Current Year
    // ------------------------------------------

    const yearElements = document.querySelectorAll(".current-year");

    yearElements.forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });


    // ------------------------------------------
    // Smooth Scroll
    // ------------------------------------------

    const scrollLinks = document.querySelectorAll('a[href^="#"]');

    scrollLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#" || targetId === "") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    // ------------------------------------------
    // Apply Now Buttons
    // ------------------------------------------

    const applyButtons = document.querySelectorAll(".apply-btn");

    applyButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            window.location.href = "pages/apply-now.html";

        });

    });


    // ------------------------------------------
    // Scroll Animation
    // ------------------------------------------

    const animatedElements = document.querySelectorAll(
        ".feature, .process-step, .about-content, .about-image"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


        animatedElements.forEach(function (element) {

            element.classList.add("animate-on-scroll");

            observer.observe(element);

        });

    }


    // ------------------------------------------
    // Back To Top Button
    // ------------------------------------------

    const backToTop = document.querySelector("#backToTop");

    if (backToTop) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 400) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        });


        backToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    // ------------------------------------------
    // Contact Form Validation
    // ------------------------------------------

    const forms = document.querySelectorAll("form");

    forms.forEach(function (form) {

        form.addEventListener("submit", function (event) {

            const requiredFields =
                form.querySelectorAll("[required]");

            let valid = true;


            requiredFields.forEach(function (field) {

                if (!field.value.trim()) {

                    valid = false;

                    field.classList.add("error");

                } else {

                    field.classList.remove("error");

                }

            });


            if (!valid) {

                event.preventDefault();

                alert("Please fill in all required fields.");

            }

        });

    });


    // ------------------------------------------
    // Phone Number Validation
    // ------------------------------------------

    const phoneInputs =
        document.querySelectorAll('input[type="tel"]');


    phoneInputs.forEach(function (input) {

        input.addEventListener("input", function () {

            this.value = this.value.replace(
                /[^0-9+\-\s]/g,
                ""
            );

        });

    });


    // ------------------------------------------
    // Navbar Shadow on Scroll
    // ------------------------------------------

    const header = document.querySelector(".header");

    if (header) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 20) {

                header.classList.add("scrolled");

            } else {

                header.classList.remove("scrolled");

            }

        });

    }

});