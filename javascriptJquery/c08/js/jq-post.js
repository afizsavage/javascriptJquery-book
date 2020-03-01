

$('#reg').on('submit', function(e) {
  e.preventDefault();
  var details = $('#reg').serialize();
  $.post('/javascriptbook.com', details, function(data) {
    $('#reg').html(data);
  });
});
