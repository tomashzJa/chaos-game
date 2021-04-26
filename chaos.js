function setup(){
	
	createCanvas(500,500);
	background(0);
	angleMode(DEGREES);
	xC=width/2;
	yC=width-10-((width-20)*(sqrt(3)/2));
	
	frameRate(120);
	
	
	
	}
	let x=0,y=0,xC,yC;
	let red=125,green=125,blue=125;

	
function draw(){
	
	
	let vectorA=createVector(10,height-10);
	let vectorB=createVector(width-10,height-10);
	let vectorC=createVector(xC,yC);
	let vectorPunkt=createVector(x,y);
	

	/*point(vectorA.x,vectorA.y);
	point(vectorB.x,vectorB.y);
	point(vectorC.x,vectorC.y);
	
	line(vectorC.x,vectorC.y,vectorB.x,vectorB.y);
	line(vectorC.x,vectorC.y,vectorA.x,vectorA.y);
	line(vectorB.x,vectorB.y,vectorA.x,vectorA.y); */
	

	
	let r=random(3);
	
	if (r<1){
		vectorPunkt.lerp(vectorA,0.5);
		red+=50;
		green-=50;
		blue-=50;
	}
	else if(r<2){
		vectorPunkt.lerp(vectorB,0.5);
		red-=50;
		green+=50;
		blue-=50;
	}
	else if(r<3){
		vectorPunkt.lerp(vectorC,0.5);
		red-=50;
		green-=50;
		blue+=50;
	}
	if(red>255)red=255;
	else if (red<0)red=0;
	
	if(green>255)green=255;
	else if (green<0)green=0;
	
	if(blue>255)blue=255;
	else if (blue<0)blue=0;
	
	stroke(red,green,blue);
	strokeWeight(2);
	x=vectorPunkt.x;
	y=vectorPunkt.y;
	
	
	
	
	point(vectorPunkt.x,vectorPunkt.y);
	/* noLoop()
	console.log(vectorA.dist(vectorB));
	console.log(vectorA.dist(vectorC)); */
	
	
	
}