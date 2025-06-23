function calculateTotalPrice(price, discountPercentage) {
    debugger;
    let discount = (price * discountPercentage) / 100;
    let totalPrice = price - discount;
    return totalPrice;
}

let itemPrice = 200;
let discount = 15; // 15% discount
let finalPrice = calculateTotalPrice(itemPrice, discount);
console.log("The final price after discount is:", finalPrice);
// This code calculates the total price after applying a discount
// The debugger statement allows you to inspect variables and execution flow