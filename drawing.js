var xEyeOne = 40;
var yEyeOne = 40;
var eyeOneSize = 40
var xEyeTwo = 200;
var yEyeTwo = 40;
var eyeTwoSize = 40;
var xNose = 120;
var yNose = 100;
var xLine = 115;
var yLine = 120;
var xMouth = 87;
var yMouth = 150;
var eyeSizeMin = 20;
var eyeSizeMax = 60;
var eyeSizeChange = 1;

function setup(){
	createCanvas(240,200);
}

function draw(){
	background(211,211,211);
	drawAnimal();
	eyeOneSize -= eyeSizeChange;
	eyeTwoSize -= eyeSizeChange;

	if(eyeOneSize <= eyeSizeMin){
		eyeSizeChange *= -1;
	}
	if(eyeOneSize >= eyeSizeMax){
		eyeSizeChange *= -1;
	}
}	
	
function drawAnimal(){
	ellipse(xEyeOne,yEyeOne,eyeOneSize,eyeOneSize);
	ellipse(xEyeTwo,yEyeTwo,eyeTwoSize,eyeTwoSize);
	ellipse(xNose,yNose,100,40);
	rect(xLine,yLine,5,30);
	rect(xMouth,yMouth,60,10);
}