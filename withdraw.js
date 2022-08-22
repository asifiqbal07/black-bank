document.getElementById('btn-withdraw').addEventListener('click', function () {

    // 1
    const withdrawFiled = document.getElementById('withdraw');
    const newWithdrawAmountString = withdrawFiled.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // 7
    withdrawFiled.value = '';

    
    if(isNaN(newWithdrawAmount)){
        alert('Provide Valid Data');
        return
    }

    // 2
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    

    // 4
    const blanceTotalElement = document.getElementById('total-balance');
    const previousBlanceTotalString = blanceTotalElement.innerText;
    const previousBlanceTotal = parseFloat(previousBlanceTotalString);

    if (newWithdrawAmount > previousBlanceTotal) {
        alert('Halarput eto taka ki tor bape raksilo?')
        return;
    }

    // 3
    const currentWitdrawTotal = newWithdrawAmount + previousWithdrawTotal;
    withdrawTotalElement.innerText = currentWitdrawTotal;


    // 5
    const newBlanceTotal = previousBlanceTotal - newWithdrawAmount;
    blanceTotalElement.innerText = newBlanceTotal;



})