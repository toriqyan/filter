
var index = -1;
$(document).ready(function() {
	setup();
});

function setup() {
	index = parseInt(document.getElementById("imageIndex").value);
	document.getElementById("target").src = urls[index];
}

function reject() {

	document.getElementById('image').value = urls[index];
	document.getElementById('reject').value = 'yes';
	$('#database').submit();
}

function accept() {

	document.getElementById('image').value = urls[index];
	document.getElementById('reject').value = 'no';
	$('#database').submit();
}

