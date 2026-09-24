// ==========================================
// LOAN SOLUTION - EMI CALCULATOR
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    const calculatorForm = document.querySelector("#emiCalculator");

    if (!calculatorForm) {
        return;
    }

    const loanAmount = document.querySelector("#loanAmount");
    const interestRate = document.querySelector("#interestRate");
    const loanTenure = document.querySelector("#loanTenure");

    const monthlyEMI = document.querySelector("#monthlyEMI");
    const totalInterest = document.querySelector("#totalInterest");
    const totalPayment = document.querySelector("#totalPayment");

    calculatorForm.addEventListener("submit", function (event) {

        event.preventDefault();

        calculateEMI();

    });


    function calculateEMI() {

        const principal = parseFloat(loanAmount.value);
        const annualInterest = parseFloat(interestRate.value);
        const tenureYears = parseFloat(loanTenure.value);


        // Validation

        if (
            isNaN(principal) ||
            isNaN(annualInterest) ||
            isNaN(tenureYears)
        ) {

            alert("Please enter valid loan details.");

            return;

        }


        if (
            principal <= 0 ||
            annualInterest <= 0 ||
            tenureYears <= 0
        ) {

            alert("Values must be greater than zero.");

            return;

        }


        // EMI Calculation

        const monthlyRate =
            annualInterest / 12 / 100;

        const totalMonths =
            tenureYears * 12;


        const emi =
            (
                principal *
                monthlyRate *
                Math.pow(
                    1 + monthlyRate,
                    totalMonths
                )
            )
            /
            (
                Math.pow(
                    1 + monthlyRate,
                    totalMonths
                ) - 1
            );


        const totalAmount =
            emi * totalMonths;

        const interestAmount =
            totalAmount - principal;


        // Display Results

        if (monthlyEMI) {

            monthlyEMI.textContent =
                formatCurrency(emi);

        }


        if (totalInterest) {

            totalInterest.textContent =
                formatCurrency(interestAmount);

        }


        if (totalPayment) {

            totalPayment.textContent =
                formatCurrency(totalAmount);

        }

    }


    // ==========================================
    // Currency Format
    // ==========================================

    function formatCurrency(amount) {

        return new Intl.NumberFormat(
            "en-IN",
            {
                style: "currency",
                currency: "INR",
                maximumFractionDigits: 0
            }
        ).format(amount);

    }

});