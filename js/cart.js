breadImg = new Array();
breadImg[0] = " ";
breadImg[1] = "image/bread/baconcheese_rolls.png";
breadImg[2] = "image/bread/cheesecurry_bun.png";
breadImg[3] = "image/bread/cheesepotato_bun.png";
breadImg[4] = "image/bread/chocochip_bun.png";
breadImg[5] = "image/bread/croissant.png";
breadImg[6] = "image/bread/grainnuts_bun.png";
breadImg[7] = "image/bread/ham_toast.png";
breadImg[8] = "image/bread/matcha_twist.png";
breadImg[9] = "image/bread/milkpeanut_toast.png";
breadImg[10] = "image/bread/pineapple_bun.png";
breadImg[11] = "image/bread/redbean_bun.png";
breadImg[12] = "image/bread/sausage_bun.png";
breadImg[13] = "image/bread/wheatwalnuts_toast.png";

cakeImg = new Array();
cakeImg[0] = " ";
cakeImg[1] = "image/cake/cake1.png";
cakeImg[2] = "image/cake/cake2.png";
cakeImg[3] = "image/cake/cake3.png";
cakeImg[4] = "image/cake/cake4.png";
cakeImg[5] = "image/cake/cake5.png";
cakeImg[6] = "image/cake/cake6.png";
cakeImg[7] = "image/cake/cake7.png";
cakeImg[8] = "image/cake/cake8.png";
cakeImg[9] = "image/cake/cake9.png";

cookieImg = new Array();
cookieImg[0] = " ";
cookieImg[1] = "image/cookie/chocochip_cookies.png";
cookieImg[2] = "image/cookie/cranberry_cookies.png";
cookieImg[3] = "image/cookie/garlic_cookies.png";
cookieImg[4] = "image/cookie/matcha_cookies.png";
cookieImg[5] = "image/cookie/oreo_cookies.png";
cookieImg[6] = "image/cookie/saltycheese_cookies.png";
cookieImg[7] = "image/cookie/saltyseaweed_cookies.png";

beverageImg = new Array();
beverageImg[0] = " ";
beverageImg[1] = "image/beverage/caramel_macchiato.jpeg";
beverageImg[2] = "image/beverage/green_orange_coffee.jpeg";
beverageImg[3] = "image/beverage/green_plum_tea_coffee.jpeg";
beverageImg[4] = "image/beverage/latte.jpeg";
beverageImg[5] = "image/beverage/lemon_soda_coffee.jpeg";
beverageImg[6] = "image/beverage/orange_soda_coffee.jpeg";
beverageImg[7] = "image/beverage/soya_coffee_latte.jpeg";
beverageImg[8] = "image/beverage/yakult_coffee.jpeg";

var total;

function display(obj, num) {
    var price = "price" + num;
    var qty = "quantity" + num;
    var variety = "variety" + num;
    var amount = "amount" + num;
    var breadLen = breadImg.length;
    var cakeLen = cakeImg.length;
    var cookieLen = cookieImg.length;
    var beverageLen = beverageImg.length;

    if (num == 1) {
        for (i=0; i<breadLen; i++) {
            if (obj.selectedIndex == i) {
                document.getElementById('bread_image').src = breadImg[i];
            }
        }
    } else if (num == 2) {
        for (i=0; i<cakeLen; i++) {
            if (obj.selectedIndex == i) {
                document.getElementById('cake_image').src = cakeImg[i];
            }
        }
    } else if (num == 3) {
        for (i=0; i<cookieLen; i++) {
            if (obj.selectedIndex == i) {
                document.getElementById('cookie_image').src = cookieImg[i];
            }
        }
    } else if (num == 4) {
        for (i=0; i<beverageLen; i++) {
            if (obj.selectedIndex == i) {
                document.getElementById('beverage_image').src = beverageImg[i];
            }
        }
    }

    if (obj.selectedIndex == 0) {
        document.getElementById(price).value = obj.value;
        document.getElementById(qty).value = "0";
        document.getElementById(qty).disabled = true;
        document.getElementById(variety).disabled = true;
        document.getElementById(amount).value = "0.00";
        calculate();
    } else if (obj.selectedIndex != 0) {
        document.getElementById(price).value = obj.value;
        document.getElementById(qty).value = "0";
        document.getElementById(qty).disabled = false;
        document.getElementById(variety).disabled = false;
        document.getElementById(amount).value = "0.00";
        document.getElementById(qty).focus();
        calculate();
    } else {
        document.getElementById(price).value = "0.00";
    }
}

function sub(obj, num) {
    var amount = "amount" + num;
    var price = "price" + num;

    var qty = obj.selectedIndex;
    if (qty > 0) {
        var subtotal = parseFloat(document.getElementById(price).value)*qty;
        document.getElementById(amount).value = subtotal.toFixed(2);
        calculate();
    } else {
        var subtotal = parseFloat(0);
        document.getElementById(amount).value = subtotal.toFixed(2);
        calculate();
    }
}

function calculate() {
    var amt1, amt2, amt3, amt4;
    amt1 = parseFloat(document.getElementById('amount1').value);
    amt2 = parseFloat(document.getElementById('amount2').value);
    amt3 = parseFloat(document.getElementById('amount3').value);
    amt4 = parseFloat(document.getElementById('amount4').value);

    total = amt1 + amt2 + amt3 + amt4;

    document.getElementById('totalAmount').value = total.toFixed(2);
}

function quantity() {
	for(num=0; num<=5 ; num++)
	{
		document.write("<option>" + num + "</option>");
	}
}

function quantity_cake() {
	for(num=0; num<=3 ; num++)
	{
		document.write("<option>" + num + "</option>");
	}
}

function store() {
    if (total > 0) {
        var bread, cake, cookie, beverage;
        var qty1, qty2, qty3, qty4;
        var amt1, amt2, amt3, amt4;

        bread = document.getElementById('bread').options[document.getElementById('bread').selectedIndex].text;
        cake = document.getElementById('cake').options[document.getElementById('cake').selectedIndex].text;
        cookie = document.getElementById('cookie').options[document.getElementById('cookie').selectedIndex].text;
        beverage = document.getElementById('beverage').options[document.getElementById('beverage').selectedIndex].text;

        qty1 = parseFloat(document.getElementById('quantity1').value);
        qty2 = parseFloat(document.getElementById('quantity2').value);
        qty3 = parseFloat(document.getElementById('quantity3').value);
        qty4 = parseFloat(document.getElementById('quantity4').value);

        amt1 = parseFloat(document.getElementById('amount1').value).toFixed(2);
        amt2 = parseFloat(document.getElementById('amount2').value).toFixed(2);
        amt3 = parseFloat(document.getElementById('amount3').value).toFixed(2);
        amt4 = parseFloat(document.getElementById('amount4').value).toFixed(2);

        productArray = [bread, cake, cookie, beverage];
        quantityArray = [qty1, qty2, qty3, qty4];
        amountArray = [amt1, amt2, amt3, amt4];

        sessionStorage.setItem("productArray", JSON.stringify(productArray));
        sessionStorage.setItem("quantityArray", JSON.stringify(quantityArray));
        sessionStorage.setItem("amountArray", JSON.stringify(amountArray));
        sessionStorage.setItem("totalAmount", total.toFixed(2));

        location.href = "payment.html";
    } else {
        alert("Please kindly add any product to proceed.");
    }
}

function reset() {
    window.location.reload();
}