//TARGET OBJECT
function getTarget(e) {
  if (!e) {
    e = window.event;
  }
  return e.target || e.srcElement;
}

var el, elNote, elInput, elButtons, elLink;

//FUNCTION TO LABEL AUDIO
function writeLabel(e) {
  elNote = document.getElementById('noteName');
  elInput = document.getElementById('noteInput').value;
  elNote.innerHTML = elInput;
}

//FUNCTION TO RECORD AND STOP
function play(e) {
  if (e.preventDefault) {
    e.preventDefault()
  } else {
    e.returnValue = false;
  }
  var attr = elLink.getAttribute('data-state');
  if(attr === 'record') {
    elLink.setAttribute('data-state', 'stop');
  } else {
    elLink.setAttribute('data-state', 'record');
  }
  }

el = document.querySelector('form');
elLink = document.getElementById('link');

//EVENT HANDLERS WITH IE 8 FALL-BACK
if (elLink.addEventListener || el.addEventListener) {
  el.addEventListener('keyup', function(e) {
    writeLabel(e);
  }, false);
elLink.addEventListener('click', function(e) {
  play(e);
}, false);

} else {
  el.attachEvent('onkeyup', function(e) {
    writeLabel(e);
  });
}
elLink.attachEvent('onclick', function(e) {
  play(e)
});
