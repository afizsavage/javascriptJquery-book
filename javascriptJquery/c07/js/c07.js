$(function() {

  //SETUP
  var $form = $('#newItemForm');
  var $newItem = $('#newItemButton');
  var $list = $('ul');
  var item = '';

  //WHEN PAGE LOADS HIDE THE FORM AND SHOW THE NEW ITEM BUTTON
  $form.hide();
  $newItem.show();
  $('li').hide().each(function(index) {
    $(this).delay(500 * index).fadeIn(500);
  });

  //GET THE SUM OF <li> THAT THEIR CLASS IS NOT! "COMPLETE"
  function counter() {
    var itemsCount = $('li[class!=complete]').length;
    $('#counter').text(itemsCount);
  }
  counter();

  //SETUP FOR NEW ITEM
  $('#showForm').on('click', function(e) {
    e.preventDefault();
    $newItem.hide();
    $form.show();
  });

  //ADDING A NEW LIST ITEM AND UPDATE COUNTER
  $form.on('submit', function(e) {
    var value = $('#itemDescription').val();
    e.preventDefault();
    $list.append('<li>' + value + '</li>');
    $('#itemDescription').val('');
    counter();
  });

  /*FIRST CLICK EVENT ON ANY <li> ELEMENT ADDS CLASS ATTRIBUTE
  WITH THE VLUE OF COMPLETE ON THE TARGET ELEMENT AND MOVES
  IT TO THE BOTTOM OF THE LIST. SECOND CLICK EVENT REMOVES IT*/
  $list.on('click', function(e) {
    var target = $(e.target);
    var input = $('#itemDescription');

    if (target.hasClass('complete')) {
      target.animate({
        opacity: 0.0,
        paddingLeft: '+=180'
      }, 500, 'swing', function() {
        target.remove();
      });
    } else {
      var item = target.text();
      target.remove();
      $list.append('<li class=\"complete\">' + item + '</li>')
        .hide().fadeIn(300);
      counter();
    }
  });

});
