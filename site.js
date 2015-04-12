function position(e) {
	if(typeof e.offsetX === "undefined" || typeof e.offsetY === "undefined") {
		var offset = $(e.target).offset();
		return {
			x: e.pageX - offset.left,
			y: e.pageY - offset.top
		}
	}
	return {x: e.offsetX, y: e.offsetY}
}

var mouseHeld = false;
var context;

$(document).ready(function() {
	context = $("#canvas")[0].getContext('2d');
	
	$("#canvas")
	.mousemove(function(e) {
		if (mouseHeld)
		{
			pos = position(e);
			// context.beginPath();
			// context.arc(pos.x, pos.y, 5, 0, 2 * Math.PI, false);
			// context.fillStyle = 'green';
			// context.fill();
			context.lineTo(pos.x, pos.y);
			context.stroke();
			context.beginPath();
			context.moveTo(pos.x, pos.y);
		}
	})
	.mousedown(function(e) {
		mouseHeld = true;
		pos = position(e);
		context.beginPath();
		context.moveTo(pos.x, pos.y);
	})
	.mouseup(function(e) {
		mouseHeld = false;
		pos = position(e);
		context.lineTo(pos.x, pos.y);
		context.stroke();
	});
});