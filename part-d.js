function calculatePartD() {
    const basePremium = 34.70; // 2024 value
    const uncoveredMonths = parseInt(document.getElementById('partD-months').value);

    if (isNaN(uncoveredMonths)) {
        alert('Please enter a valid number of months');
        return;
    }

    const penaltyPercentage = uncoveredMonths * 0.01;
    const penaltyAmount = basePremium * penaltyPercentage;
    const roundedPenaltyAmount = Math.round(penaltyAmount * 10) / 10;

    const resultElement = document.getElementById('partD-result');
    resultElement.innerText = ` $${roundedPenaltyAmount.toFixed(2)}`;
    resultElement.classList.add('visible');
}

function clearPartD() {
    document.getElementById('partD-months').value = '';
    const resultElement = document.getElementById('partD-result');
    resultElement.classList.remove('visible');
    setTimeout(() => {
        resultElement.innerText = '';
    }, 500); // Wait for the animation to complete
}
