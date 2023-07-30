var productArray = JSON.parse(sessionStorage.getItem("productArray"));
var quantityArray = JSON.parse(sessionStorage.getItem("quantityArray"));
var amountArray = JSON.parse(sessionStorage.getItem("amountArray"));
var subtotalAmount = parseFloat(sessionStorage.getItem("totalAmount"));
var deliveryFee = parseFloat(sessionStorage.getItem("deliveryFee"));
var discount = parseFloat(sessionStorage.getItem("discount"));
var total;

function receipt() {
    document.getElementById("orderTime").innerHTML = new Date().toLocaleString();
    document.getElementById("name").innerHTML = sessionStorage.getItem("name");
    document.getElementById("tel").innerHTML = sessionStorage.getItem("tel");

    document.getElementById("product1").innerHTML = productArray[0];
    document.getElementById("quantity1").innerHTML = quantityArray[0];
    document.getElementById("amount1").innerHTML = amountArray[0];

    document.getElementById("product2").innerHTML = productArray[1];
    document.getElementById("quantity2").innerHTML = quantityArray[1];
    document.getElementById("amount2").innerHTML = amountArray[1];

    document.getElementById("product3").innerHTML = productArray[2];
    document.getElementById("quantity3").innerHTML = quantityArray[2];
    document.getElementById("amount3").innerHTML = amountArray[2];

    document.getElementById("product4").innerHTML = productArray[3];
    document.getElementById("quantity4").innerHTML = quantityArray[3];
    document.getElementById("amount4").innerHTML = amountArray[3];

    document.getElementById("subtotalAmount").innerHTML = subtotalAmount.toFixed(2);
    document.getElementById("deliveryFee").innerHTML = deliveryFee.toFixed(2);
    document.getElementById("discount").innerHTML = discount.toFixed(2);
    total = subtotalAmount + deliveryFee - discount;
    document.getElementById("totalAmount").innerHTML = total.toFixed(2);
}