
document.querySelector("#submit").addEventListener("click", function(event) {
         event.preventDefault();
         makeGrid();
}, false);


function makeGrid() {
	$('#pixelCanvas').children().remove();
	var height = $('#inputHeight').val();
	for (var i = 0; i < height; i++) {
		$('#pixelCanvas').append(getRow());
	}
}

function getRow() {
	var row = $('<tr></tr>');
	var width = $('#inputWeight').val();
	for (var i = 0; i < width; i++) {
		row.append(getCell());
	}
	return row;
}


function getCell() {
	var cell = $('<td></td>');
	var colorPicker = $('#colorPicker').val();
	cell.click(function() {
		cell.css('background', colorPicker);
	});
	return cell;
}