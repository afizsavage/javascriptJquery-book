var $form = $('#calculator');

$form.on('submit', function(e) {
    e.preventDefault();
    console.log('Clicked submit...');

    var width, height, area;
    width = $('#width').val();
    height = $('#height').val();
    area = width * height;

    console.group('Area calculations');
        console.info('width', width);
        console.info('Height', height);
        console.log(area);
    console.groupEnd();
    $form.append('<p>' + area + '</p>');
});