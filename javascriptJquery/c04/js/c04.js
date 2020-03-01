 var table = 3; // Unit of table
 var operator = 'addition'; // Type of calculation
 var i = 1; // Set counter to 1
 var msg = ''; // Message

 if (operator === 'addition') {
   // Do addition
   for (i; i < 11; i++) {
     msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
   }
 } else {
   // Do multiplication
   while (i < 11) {
     msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
     i++;
   }
 }
 // Write the message into the page
 var el = document.getElementById('blackboard');
 el.innerHTML = msg;
