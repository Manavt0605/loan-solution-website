// ==========================================
// LOAN SOLUTION - NAVIGATION JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", function () {


    // ------------------------------------------
    // Mobile Menu
    // ------------------------------------------

    const menuButton =
        document.querySelector(".menu-toggle");

    const navigation =
        document.querySelector(".nav");


    if (menuButton && navigation) {

        menuButton.addEventListener("click", function () {

            navigation.classList.toggle("mobile-active");

            menuButton.classList.toggle("active");

        });

    }


    // ------------------------------------------
    // Mobile Dropdowns
    // ------------------------------------------

    const dropdowns =
        document.querySelectorAll(".dropdown");


    dropdowns.forEach(function (dropdown) {

        const dropdownLink =
            dropdown.querySelector(".dropdown-link");


        if (!dropdownLink) {
            return;
        }


        dropdownLink.addEventListener("click", function (event) {

            if (window.innerWidth <= 768) {

                event.preventDefault();

                dropdown.classList.toggle("open");

            }

        });

    });


    // ------------------------------------------
    // Close Mobile Menu After Clicking Link
    // ------------------------------------------

    const navLinks =
        document.querySelectorAll(".nav a");


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (window.innerWidth <= 768) {

                if (
                    !this.classList.contains("dropdown-link")
                ) {

                    if (navigation) {
                        navigation.classList.remove(
                            "mobile-active"
                        );
                    }

                    if (menuButton) {
                        menuButton.classList.remove(
                            "active"
                        );
                    }

                }

            }

        });

    });


    // ------------------------------------------
    // Close Dropdown When Clicking Outside
    // ------------------------------------------

    document.addEventListener("click", function (event) {

        if (!event.target.closest(".dropdown")) {

            dropdowns.forEach(function (dropdown) {

                dropdown.classList.remove("open");

            });

        }

    });


    // ------------------------------------------
    // Reset Mobile Menu on Resize
    // ------------------------------------------

    window.addEventListener("resize", function () {

        if (window.innerWidth > 768) {

            if (navigation) {
                navigation.classList.remove(
                    "mobile-active"
                );
            }

            if (menuButton) {
                menuButton.classList.remove(
                    "active"
                );
            }

            dropdowns.forEach(function (dropdown) {

                dropdown.classList.remove("open");

            });

        }

    });


    // ------------------------------------------
    // Active Page Detection
    // ------------------------------------------

    const currentPage =
        window.location.pathname.split("/").pop();


    navLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href");


        if (!linkPage || linkPage === "#") {
            return;
        }


        const linkFile =
            linkPage.split("/").pop();


        if (
            linkFile === currentPage &&
            !link.classList.contains("dropdown-link")
        ) {

            link.classList.add("active");

        }

    });

});