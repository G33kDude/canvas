$(document).ready(function() {
	$("#canvas").click(function(event) {
		if(typeof event.offsetX === "undefined" || typeof event.offsetY === "undefined") {
			var targetOffset = $(event.target).offset();
			event.offsetX = event.pageX - targetOffset.left;
			event.offsetY = event.pageY - targetOffset.top;
		}
		// alert(event.offsetX + " " + event.offsetY);
		context = this.getContext('2d');
		context.beginPath();
		context.arc(event.offsetX, event.offsetY, 5, 0, 2 * Math.PI, false);
		context.fillStyle = 'green';
		context.fill();
	});
});