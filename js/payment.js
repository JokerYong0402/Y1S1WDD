var productArray = JSON.parse(sessionStorage.getItem("productArray"));
var quantityArray = JSON.parse(sessionStorage.getItem("quantityArray"));
var amountArray = JSON.parse(sessionStorage.getItem("amountArray"));
var subtotalAmount = parseFloat(sessionStorage.getItem("totalAmount"));

var deliveryFee = 0;
var discount = 0;
var total;

var membership_username = localStorage.getItem("username");
var membership_password = localStorage.getItem("password");

function cart() {
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
    document.getElementById("pay").value = "Pay " + "(" +total.toFixed(2) + ")";
}

function pickup() {
    deliveryFee = 0;
    document.getElementById("deliveryFee").innerHTML = deliveryFee.toFixed(2);
    document.getElementById('time').innerHTML = "Pickup Time";
    document.getElementById('addr').style.display = "none";
    document.getElementById('note').style.display = "none";
    cart();
}

function delivery() {
    deliveryFee = 5;
    document.getElementById("deliveryFee").innerHTML = deliveryFee.toFixed(2);
    document.getElementById('time').innerHTML = "Delivery Time";
    document.getElementById('addr').style.display = "block";
    document.getElementById('note').style.display = "block";
    cart();
}

function membership() {
    var form = document.getElementById("membership_form");
    if (form.style.display == "block") {
        form.style.display = "none";
    } else {
        form.style.display = "block";
    }
}

function validation() {
    var username = document.getElementById("username");
    if (username.value == membership_username) {
        username.style.backgroundColor = "#b3ffb3";
    } else {
        username.style.backgroundColor = "#ff9999";
    }

    var password = document.getElementById("password");
    if (password.value == membership_password) {
        password.style.backgroundColor = "#b3ffb3";
    } else {
        password.style.backgroundColor = "#ff9999";
    }

    if(username.value == membership_username) {
        if(password.value == membership_password) {
            discount = subtotalAmount * 10 / 100;
            cart();
        }
    }
}

function store() {
    sessionStorage.setItem("name", document.getElementById("name").value);
    sessionStorage.setItem("tel", document.getElementById("tel").value);

    sessionStorage.setItem("productArray", JSON.stringify(productArray));
    sessionStorage.setItem("quantityArray", JSON.stringify(quantityArray));
    sessionStorage.setItem("amountArray", JSON.stringify(amountArray));
    sessionStorage.setItem("subtotalAmount", subtotalAmount.toFixed(2));
    sessionStorage.setItem("deliveryFee", deliveryFee.toFixed(2));
    sessionStorage.setItem("discount", discount.toFixed(2));
}