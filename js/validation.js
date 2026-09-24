// ==========================================
// LOAN SOLUTION - FORM VALIDATION
// ==========================================

document.addEventListener("DOMContentLoaded", function () {


    const forms =
        document.querySelectorAll(
            "form"
        );


    forms.forEach(
        function (form) {


            // Skip EMI Calculator

            if (
                form.id === "emiCalculator"
            ) {
                return;
            }


            const inputs =
                form.querySelectorAll(

                    "input, " +
                    "textarea, " +
                    "select"

                );


            inputs.forEach(
                function (input) {


                    // Real-time validation

                    input.addEventListener(
                        "blur",
                        function () {

                            validateField(
                                input
                            );

                        }
                    );


                    input.addEventListener(
                        "input",
                        function () {

                            if (
                                input.classList.contains(
                                    "error"
                                )
                            ) {

                                validateField(
                                    input
                                );

                            }

                        }
                    );

                }
            );


            // Form Submit Validation

            form.addEventListener(
                "submit",
                function (event) {

                    let formValid =
                        true;


                    inputs.forEach(
                        function (input) {

                            if (
                                !validateField(
                                    input
                                )
                            ) {

                                formValid =
                                    false;

                            }

                        }
                    );


                    if (!formValid) {

                        event.preventDefault();

                    }

                }
            );

        }
    );


    // ==========================================
    // VALIDATE FIELD
    // ==========================================

    function validateField(input) {


        const value =
            input.value.trim();


        // Required Fields

        if (
            input.hasAttribute(
                "required"
            ) &&
            value === ""
        ) {

            showError(
                input,
                "This field is required."
            );

            return false;

        }


        // Email Validation

        if (
            input.type === "email" &&
            value !== ""
        ) {

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (
                !emailPattern.test(
                    value
                )
            ) {

                showError(
                    input,
                    "Please enter a valid email address."
                );

                return false;

            }

        }


        // Phone Validation

        if (
            input.type === "tel" &&
            value !== ""
        ) {

            const phonePattern =
                /^[0-9]{10}$/;


            const cleanedPhone =
                value.replace(
                    /\D/g,
                    ""
                );


            if (
                !phonePattern.test(
                    cleanedPhone
                )
            ) {

                showError(
                    input,
                    "Please enter a valid 10-digit phone number."
                );

                return false;

            }

        }


        // Minimum Length

        if (
            input.hasAttribute(
                "minlength"
            )
        ) {

            const minimumLength =
                parseInt(
                    input.getAttribute(
                        "minlength"
                    )
                );


            if (
                value.length <
                minimumLength
            ) {

                showError(
                    input,
                    "Please enter at least " +
                    minimumLength +
                    " characters."
                );

                return false;

            }

        }


        // Clear Error

        clearError(
            input
        );

        return true;

    }


    // ==========================================
    // SHOW ERROR
    // ==========================================

    function showError(
        input,
        message
    ) {

        input.classList.add(
            "error"
        );


        let errorMessage =
            input.parentElement.querySelector(
                ".error-message"
            );


        if (!errorMessage) {

            errorMessage =
                document.createElement(
                    "small"
                );


            errorMessage.className =
                "error-message";


            input.parentElement.appendChild(
                errorMessage
            );

        }


        errorMessage.textContent =
            message;

    }


    // ==========================================
    // CLEAR ERROR
    // ==========================================

    function clearError(
        input
    ) {

        input.classList.remove(
            "error"
        );


        const errorMessage =
            input.parentElement.querySelector(
                ".error-message"
            );


        if (errorMessage) {

            errorMessage.remove();

        }

    }

});