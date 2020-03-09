console.log('And we\'re off...');
var $form, width, height, area;
$form = $('#calculator');

$('#form input[type="text"]').on('blur', () => console.log('You entered ', this.value));

$('#calculator').on('submit', function(e) {
    e.preventDefault();
    console.log('clicked submit...');

    width = $('#width').val();
    console.log('Width', width);

    height = $('#height').val();
    console.log('height', height);

    area = width * height;
    console.log(area);

    $form.append('<p>' + area + '</p>')
}); 