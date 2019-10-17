//create variables for the welcome message
var greetings = 'Howdy ';
var customerName = 'Molly';
var message = ', please check your order:';

//concatenate the three variables above to create the welcome message
var welcome = greetings + customerName + message;

//create variables to hold details about the sign
var sign = 'Montague House';
var shipping = 77;
var tiles = sign.length;
var subTotal = tiles * 5;

function calcSubTotal(subTotal) {
  subTotal = tiles * 5;
  return '$' + subTotal;
}
//get the element that has an id of greetings
var el = document.getElementById('greetings');
//replace the content of that message with the personalised welcome message
el.textContent = welcome;

//get the element that has the id of userSign
var elSign = document.getElementById('userSign');
//replace the content of that message with custom sign
elSign.textContent = sign;

//get the element with the id of tiles the update it content
var eltiles = document.getElementById('tiles');
eltiles.textContent = tiles;

//get the element wit the id of subTotal and update it content
var elsubTotal = document.getElementById('subTotal');
elsubTotal.textContent = calcSubTotal(subTotal);

//get element by id shipping and update content
var elShipping = document.getElementById('shipping');
elShipping.textContent = '$' + shipping;

//get element by id grandTotal and update content
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = (function(grandTotal) {
  grandTotal = subTotal + shipping;
  return '$' + grandTotal;
})();
