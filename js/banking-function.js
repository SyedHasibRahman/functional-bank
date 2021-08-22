/* // Example
function doubleIt(num) {
    const result = num * 2;
    return result;
}
const first = doubleIt(5);
const second = doubleIt(7); */

// Banking function

function getInputValue(inputId) {
    // debugger;
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // Clear input field
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    const totalField = document.getElementById(totalFieldId);
    const totalText = totalField.innerText;
    const previousAmount = parseFloat(totalText);
    totalField.innerText = previousAmount + amount;

}
function getCurrentBalance() {
    const updateBalance = document.getElementById('balance-total');
    const previousBalanceText = updateBalance.innerText;
    const previousBalance = parseFloat(previousBalanceText);
    return previousBalance;
}
function updateBalance(Amount, isAdd) {
    const updateBalance = document.getElementById('balance-total');
    /* const previousBalanceText = updateBalance.innerText;
    const previousBalance = parseFloat(previousBalanceText); */
    const previousBalance = getCurrentBalance();
    if (isAdd == true) {
        updateBalance.innerText = previousBalance + Amount;
    }
    else {
        updateBalance.innerText = previousBalance - Amount;
    }
}
document.getElementById('deposit-btn').addEventListener('click', function () {

    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    } else {
        alert('Input Valid Amount')
    }
});
// handle withdraw system
document.getElementById('withdraw-btn').addEventListener('click', function () { 
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false)
    } else {
        alert('Input a valid Amount')
    }
})