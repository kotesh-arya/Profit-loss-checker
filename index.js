const initialPrice = document.querySelector("#initial-price");
const stockQuantity = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#message");

checkButton.addEventListener("click", () => {
    const ip = initialPrice.value;
    const qs = stockQuantity.value;
    const curr = currentPrice.value;
    profitAndLossCalculation(ip, qs, curr);
});




function profitAndLossCalculation(initial, quantity, current) {
    if (initial && quantity && current) {
        if (initial > current) {
            const loss = (initial - current) * quantity;
            const lossPercentage = (loss / initial) * 100;

            showMessage(`Hey! its ${loss} loss and the loss percentage is ${lossPercentage}%`);
            // loss here
        } else if (current > initial) {
            const profit = (current - initial) * quantity;
            const profitPercentage = (profit / initial) * 100;
            showMessage(`Hey! its ${profit} profit and the loss percentage is ${profitPercentage}%`);
            // profit
        } else {
            showMessage(`Hey! that is a no pain no gain`);
        }
    }else{
        showMessage(`You should fill the given feilds`);
    }
}

function showMessage(msg) {
    message.innerText = msg;
}