document.addEventListener('DOMContentLoaded', () => {
    const calculateButton = document.getElementById('calculate-change');

    calculateButton.addEventListener('click', () => {
        const totalAmount = parseFloat(document.getElementById('amount-due').value);
        const paidAmount = parseFloat(document.getElementById('amount-received').value);

        // Validation
        if (isNaN(totalAmount) || isNaN(paidAmount)) {
            alert("Please enter valid amounts.");
            return;
        }

        if (paidAmount < totalAmount) {
            alert("The paid amount is less than the total amount. No change is due.");
            return;
        }

        let change = Math.round((paidAmount - totalAmount) * 100);

        // Calculate denominations
        const dollars = Math.floor(change / 100);
        change %= 100;

        const quarters = Math.floor(change / 25);
        change %= 25;

        const dimes = Math.floor(change / 10);
        change %= 10;

        const nickels = Math.floor(change / 5);
        change %= 5;

        const pennies = change;

        // Update output elements
        document.getElementById('dollars-output').textContent = dollars;  // Only display the number
        document.getElementById('quarters-output').textContent = quarters;
        document.getElementById('dimes-output').textContent = dimes;
        document.getElementById('nickels-output').textContent = nickels;
        document.getElementById('pennies-output').textContent = pennies;
    });
});
