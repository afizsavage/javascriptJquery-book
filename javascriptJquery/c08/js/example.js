$(function() {

  var times;
  $.ajax({
    beforeSend: function(xhr) {
      if (xhr.overrideMimeType) {
        xhr.overrideMimeType("application/json");
      }
    }
  });

  // CLICK ON PRIMARY NAVIGATION
  $('nav a').on('click', function(e) {
    e.preventDefault();
    var url = this.href;

    $('nav a.current').removeClass('current');
    $(this).addClass('current');

    $('#container').remove();
    $('#content').load(url + ' #content').hide().fadeIn('slow');
  });


  // FUNCTION THAT COLLECTS DATA FROM THE JSON FILE
  function loadTimetable() {
    $.getJSON('data/example.json')
      .done(function(data) {
        times = data;
      }).fail(function() {
        $('#event').html('Sorry! We could not load the timetable at the moment');
      });
  }

  loadTimetable();


  // CLICK ON THE EVENT TO LOAD A TIMETABLE
  $('#content').on('click', '#event a', function(e) {
    e.preventDefault();
    var loc = this.id.toUpperCase();

    var newContent = '';
    for (var i = 0; i < times[loc].length; i++) {
      newContent += '<li><span class="time">' + times[loc][i].time;
      newContent += '</span><a href="description.html#';
      newContent += times[loc][i].title.replace(/ /g, '-') + '">';
      newContent += times[loc][i].title + '</a></li>';
    }

    $('#sessions').html('<ul>' + newContent + '</ul>');

    $('#event a.current').removeClass('current');
    $(this).addClass('current');

    $('#details').html('');
  });

//CLICK ON TIMETABLE TO LOAD DETAILS
  $('#content').on('click', '#sessions a', function(e) {
    e.preventDefault();
    var fragment = this.href;                               // Title is in href

    fragment = fragment.replace('#', ' #');                 // Add space after#
    $('#details').load(fragment);                           // To load info

    $('#sessions a.current').removeClass('current');        // Update selected
    $(this).addClass('current');
  });

});
