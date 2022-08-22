document.getElementById('btn-deposit').addEventListener('click', function () {

    // 1
    const depositField = document.getElementById('deposit');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // 2
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // 3
    const currentDepositeTotal = previousDepositTotal + newDepositAmount;
    // total deposite
    depositTotalElement.innerText = currentDepositeTotal;

    // 5
    const blanceTotalElement = document.getElementById('total-balance');
    const previousBlanceTotalString = blanceTotalElement.innerText;
    const previousBlanceTotal = parseFloat(previousBlanceTotalString);

    // 6
    const currentBlanceTotal = previousBlanceTotal + currentDepositeTotal;
    // total blance
    blanceTotalElement.innerText = currentBlanceTotal;


    // 7
    depositField.value = ''
})