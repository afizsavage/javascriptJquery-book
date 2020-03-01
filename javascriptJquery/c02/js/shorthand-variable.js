var quantity, price, total;

quantity = 14;
price = 5;
total = quantity * price;

var el = document.getElementById('cost');
el.textContent = '$' + total;
