// ADDING ITEMS TO START AND END OF LIST
var unList = document.getElementsByTagName('ul')[0];

//ADD NEW ITEM TO START OF THE LIST
var list1 = document.createElement('li');
var text1 = document.createTextNode('kale');

list1.appendChild(text1);
unList.appendChild(list1);
unList.insertBefore(list1, unList.childNodes[0]);

//ADD NEW ITEM TO END OF THE LIST
var get = unList.innerHTML;
var list2 = '<li>cream</li>';
unList.innerHTML = get + list2;

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var listItems = document.querySelectorAll('li');
var i = 0;

for (i; i < listItems.length; i++) {
  listItems[i].setAttribute('class', 'cool');
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.getElementById('height'); // h2 element
var headingText = heading.firstChild.nodeValue; // h2 text
var totalItems = listItems.length; // No. of <li> elements
var newHeading = headingText + '<span>' + totalItems + '</span>'; // Content
heading.innerHTML = newHeading;
