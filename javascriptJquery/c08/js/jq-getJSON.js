// NOTE: This example will not work locally in Chrome / IE because of cross-domain restrictions.
// You can try it out on the website for the book http://javascriptbook.com/code
// or run it on your own server.

$('#exchangerates').append('<div id="rates"></div><div id="reload"></div>');

function loadRates() {
    $.getJSON('data/rates.json')
    .done( function(data) {
      var d = new Date();
      var hrs = d.getHours();
      var mins = d.getMinutes();
      var msg = '<h2>Exchange Rates</h2>';
      $.each(data, function(key, val) {
        msg += '<div class="' + key + '">' + key + ': ' + val + '</div>';
      });
      msg += '<br>Last update: ' + hrs + ':' + mins + '<br>';
      $('#rates').html(msg);
    }).fail( function() {
      $('#rates').text('Sorry, we cannot load rates.');
    }).always( function() {
      var reload = '<a id="refresh" href="#">';
      reload += '<img src="img/refresh.png" alt="refresh" /></a>';
      $('#reload').html(reload);
      $('#refresh').on('click', function(e) {
        e.preventDefault();                               // Stop link
        loadRates();
      });
    });
}

loadRates();
