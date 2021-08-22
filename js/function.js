// Main funtion
function getInputValue(inputId, amountId, isIncrease) {
    // Get Input Value
    const getInputValue = document.getElementById(inputId);
    const inputValueText = getInputValue.value;
    const inputValue = parseFloat(inputValueText);
    // Get Input Number
    const perviousAmountText = document.getElementById(amountId).innerText;
    const perviousAmount = parseFloat(perviousAmountText);
    // Validation for Input Value
    if (inputValueText > 0) {
        document.getElementById(amountId).innerText = perviousAmount + inputValue;
    } else {
        console.log('Not Valid');
    }
    // Clearing Input Value
    document.getElementById(inputId).value = '';
    const previousBalanceText = document.getElementById('balance-total').innerText;
    const previousBalance = parseFloat(previousBalanceText);
    // Validation for Balance field
    if (isIncrease == true && inputValueText > 0) {
        document.getElementById('balance-total').innerText = previousBalance + inputValue;
    }
    else if (isIncrease == false && inputValueText > 0) {
        if (previousBalance >= inputValue) {
            document.getElementById('balance-total').innerText = previousBalance - inputValue;
        } else {
            console.log('your account balance is not sufficient');
        }
    }
}
// Handle Diposit button
document.getElementById('deposit-btn').addEventListener('click', function () {
    getInputValue('deposit-input', 'deposit-total', true);
});
// Handle withdraw button
document.getElementById('withdraw-btn').addEventListener('click', function () {
    getInputValue('withdraw-input', 'withdraw-total', false);
});