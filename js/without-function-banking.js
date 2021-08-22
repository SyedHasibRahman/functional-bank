// Handle deposit button event
document.getElementById('deposit-btn').addEventListener('click', function () {
    // console.log('Deposit Clicked');
    // get the amount deposited 
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    // console.log(depositAmount);

    // Update Deposit Total
    const depositTotal = document.getElementById('deposit-total');
    const depositPreviousAmountText = depositTotal.innerText;
    const depositPreviousAmount = parseFloat(depositPreviousAmountText);

    const newDepositTotal = depositPreviousAmount + depositAmount;
    depositTotal.innerText = newDepositTotal;

    // clear the deposit input field 
    depositInput.value = '';

    // Update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousTotalBalance = parseFloat(balanceTotalText);
    const newBalanceTotal = previousTotalBalance + depositAmount;
    balanceTotal.innerText = newBalanceTotal;

});

// Handle withdraw event 
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // console.log('Withdraw Clicked');
    // get the withdraw amount 
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
    console.log(withdrawAmount);

    // Update withdraw Balance 
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawPreviousAmountText = withdrawTotal.innerText;
    const withdrawPreviousAmount = parseFloat(withdrawPreviousAmountText);
    const newWithdrawTotal = withdrawPreviousAmount + withdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    // Clear the withdraw Input field
    withdrawInput.value = '';

    // Update Balance after withdraw
    const balanceTotal = document.getElementById('balance-total');
    const previousTotalBalanceText = balanceTotal.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceText);
    const newBalanceTotal = previousTotalBalance - withdrawAmount;
    balanceTotal.innerText = newBalanceTotal;


})