// ==========================================
// LOAN SOLUTION - EMI CALCULATOR
// ==========================================

function calculateEMI() {
    const loanAmount = document.querySelector("#loanAmount");
    const interestRate = document.querySelector("#interestRate");
    const loanTenure = document.querySelector("#loanTenure");
    const emiResult = document.querySelector("#emiResult");

    if (!loanAmount || !interestRate || !loanTenure) return;

    const principal = parseFloat(loanAmount.value);
    const annualInterest = parseFloat(interestRate.value);
    const tenureYears = parseFloat(loanTenure.value);

    // Validation
    if (isNaN(principal) || isNaN(annualInterest) || isNaN(tenureYears)) {
        alert("Please enter valid loan details.");
        return;
    }

    if (principal <= 0 || annualInterest <= 0 || tenureYears <= 0) {
        alert("Values must be greater than zero.");
        return;
    }

    // EMI Calculation
    const monthlyRate = annualInterest / 12 / 100;
    const totalMonths = tenureYears * 12;

    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);

    // Display Results
    if (emiResult) {
        emiResult.textContent = formatCurrency(emi);
    }
}

// ==========================================
// Currency Format
// ==========================================

function formatCurrency(amount) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
    }).format(amount);
}