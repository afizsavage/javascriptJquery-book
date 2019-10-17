(function() {

  var hotel = {
    name: "Park",
    roomCost: 240, //room rate in leones
    discount: 15, // discount in percentage
    offerPrice: function() {
      var offerRate = this.roomCost * ((100 - this.discount) / 100);
      return "$" + offerRate;
    }
  };

  var el = document.getElementById("hotelName");
  el.textContent = hotel.name;

  var elRate = document.getElementById("roomRate");
  elRate.textContent = "$" + hotel.roomCost.toFixed(2);

  var elSpecial = document.getElementById("specialRate");
  elSpecial.textContent = hotel.offerPrice();

  //part two displays the date on which the offer will end
  var expiryMsg; // Message displayed to users
  var today; // Today's date
  var elEnds; // The element that shows the message about the offer ending

  function offerExpires(today) {
    // Declare variables within the function for local scope
    var weekFromToday, day, date, month, year, dayNames, monthNames;

    // Add 7 days time (added in milliseconds)
    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

    // Create arrays to hold the names of days / months
    dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // Collect the parts of the date to show on the page
    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();

    // Create the message
    expiryMsg = 'Offer expires next ';
    expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
    return expiryMsg;
  }

  today = new Date(); // Put today's date in variable
  elEnds = document.getElementById('offerEnds'); // Get the offerEnds element
  elEnds.innerHTML = offerExpires(today); // Add the expiry message

})();
