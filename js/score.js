var canvasScore = document.querySelector("#score");
var context = canvasScore.getContext('2d');
var point = 0;

function contextDrawing(){
	context.fillStyle = "rgba(227,61,56,1)";
	context.fillRect(0,0,200,200);
	context.font = '30px Bungee Shade';
	context.fillStyle = 'navy';
	context.textAlign = 'center';
	context.fillText('score',100,60);
	context.font = '80px Bungee Shade';
	context.fillText('0' + point,100,150);
}