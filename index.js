const initialPrice = document.querySelector("#initial-price");
const stockQuantity = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#message");

checkButton.addEventListener("click", () => {
    const ip = Number(initialPrice.value);
    const qs = Number(stockQuantity.value);
    const curr = Number(currentPrice.value);
    profitAndLossCalculation(ip, qs, curr);
});




function profitAndLossCalculation(initial, quantity, current) {
    if (initial && quantity && current > 0) {
        if (initial > current) {
            const loss = (initial - current) * quantity;
            const lossPercentage = (loss / (initial*quantity)) * 100;

            showMessage(`Hey! its ${loss} loss and the loss percentage is ${lossPercentage.toFixed(2)}%`);
            // loss here
        } else if (current > initial) {
            const profit = (current - initial) * quantity;
            const profitPercentage = (profit / (initial*quantity)) * 100;
            showMessage(`Hey! its ${profit} profit and the profit percentage is ${profitPercentage.toFixed(2)}%`);
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