function getInputValue(inputId, amountId, isIncrease) {
    const getInputValue = document.getElementById(inputId);
    const inputValueText = getInputValue.value;
    const inputValue = parseFloat(inputValueText);
    const perviousAmountText = document.getElementById(amountId).innerText;
    const perviousAmount = parseFloat(perviousAmountText);
    if (inputValueText > 0) {
        document.getElementById(amountId).innerText = perviousAmount + inputValue;
    } else {
        console.log('Not Valid');
    }
    document.getElementById(inputId).value = '';
    const previousBalanceText = document.getElementById('balance-total').innerText;
    const previousBalance = parseFloat(previousBalanceText);

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
document.getElementById('deposit-btn').addEventListener('click', function () {
    getInputValue('deposit-input', 'deposit-total', true);
});
document.getElementById('withdraw-btn').addEventListener('click', function () {
    getInputValue('withdraw-input', 'withdraw-total', false);
});