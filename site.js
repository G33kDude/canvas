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

$(document).ready(function() {
	$("#canvas")
	.mousemove(function(e) {
		if (mouseHeld)
		{
			pos = position(e)
			context = this.getContext('2d');
			context.beginPath();
			context.arc(pos.x, pos.y, 5, 0, 2 * Math.PI, false);
			context.fillStyle = 'green';
			context.fill();
		}
	})
	.mousedown(function(e) {
		mouseHeld = true;
	})
	.mouseup(function(e) {
		mouseHeld = false;
	});
});