function getCaseUpdateTotal(isIncrease) {
    const caseQuantityField = document.getElementById('case-number-field');
    const previouseCaseQtyString = caseQuantityField.value
    const previouseCaseQty = parseInt(previouseCaseQtyString);

    let newCaseQty;

    if (isIncrease) {
        newCaseQty = previouseCaseQty + 1;
    }
    else {
        newCaseQty = previouseCaseQty - 1;
    }
    caseQuantityField.value = newCaseQty;

    return newCaseQty;
}
function updateCasePrice(newCaseQty) {
    const caseTotalPrice = newCaseQty * 59;
    const currentCaseField = document.getElementById('case-total');
    currentCaseField.innerText = caseTotalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseQty = getCaseUpdateTotal(true);
    updateCasePrice(newCaseQty);
    calculateShopping();

})
document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseQty = getCaseUpdateTotal(false);
    updateCasePrice(newCaseQty);
    calculateShopping();
})