function getPhoneUpdates(isIncrease) {
    const phoneAmountField = document.getElementById('phone-number-field');
    const phoneAmountString = phoneAmountField.value
    const previousPhoneAmount = parseInt(phoneAmountString)

    let newPhoneAmount
    if (isIncrease === true) {
        newPhoneAmount = previousPhoneAmount + 1;
    }
    else {
        newPhoneAmount = previousPhoneAmount - 1;
    }

    phoneAmountField.value = newPhoneAmount;
    return newPhoneAmount;
}

function updatePhonePrice(newPhoneAmount) {
    const updatePhonePrice = newPhoneAmount * 1219
    const phoneTotalPrice = document.getElementById('phone-total');
    phoneTotalPrice.innerText = updatePhonePrice;
}

function getElementForTotalShop(elementId) {
    const shopTotalPice = document.getElementById(elementId)
    const shopTotalString = shopTotalPice.innerText;
    const currentTotalShop = parseInt(shopTotalString);
    return currentTotalShop;

}

function subTotalCalculation(elementId, value) {
    const currentTotalField = document.getElementById(elementId)
    currentTotalField.innerText = value;
}

function calculateShopping() {
    const totalPhoneExpense = getElementForTotalShop('phone-total')
    const totalCaseExpense = getElementForTotalShop('case-total')

    const currentshopSubTotal = totalCaseExpense + totalPhoneExpense;
    subTotalCalculation('sub-total', currentshopSubTotal);

    const taxAmountString = (currentshopSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    subTotalCalculation('tax-amount', taxAmount);

    const finalAmount = currentshopSubTotal + taxAmount;
    subTotalCalculation('final-total', finalAmount);
}



document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneAmount = getPhoneUpdates(true);
    updatePhonePrice(newPhoneAmount);
    calculateShopping();

})

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneAmount = getPhoneUpdates(false);
    updatePhonePrice(newPhoneAmount);
    calculateShopping();

})
