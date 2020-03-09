var width = 12;
var height = 'area';

function calculateArea(width, height) {
    try {
        var area = width * height;
        if (!isNaN(area)) {
            return area;
        } else {
            throw new Error('calculateArea() received invalid number');
        }
    } catch(e) {
        console.log(e.name + ' ' + e.message);
        return 'we were unable to calculate the area.';
    }
}

// TRY TO SHOW THE AREA ON THE PAGE
document.getElementById('area').innerHTML = calculateArea(width, height);