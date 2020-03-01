var inStock;
var shipping;

inStock = true;
shipping = false;

/* Some other processing might go here and , as
a resul t , the script might need to change t hese
values */

inStock = false;
shipping = true;

var el = document.getElementById('stock');
el.className = inStock;
var elShip = document.getElementById('shipping');
elShip.className = shipping;
