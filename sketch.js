var ballX = 70;
var ballY = 335;
var ballX2 = 30;
var ballY2 = 410;
var ballX3 = 70;
var ballY3 = 335;
var ballSpeedX = 1;
var ballSpeedY = 5;
var obstacleX = 640;
var backgroundImg;
var skater1Img;
var skater2Img;
var skater3Img;
var benchImg;
var ashTrayImg;
var canImg;
var eagleImg;
var policeLineImg;
var trashCanImg;


function preload() {
	backgroundImg = loadImage("images/background.JPG");
	skater1Img = loadImage("images/skater1.png");
	skater2Img = loadImage("images/skater2.png");
	skater3Img = loadImage("images/skater3.png");
	benchImg = loadImage("images/bench.png");
	ashTrayImg = loadImage("images/ash tray.png");
	canImg = loadImage("images/can.png");
	eagleImg = loadImage("images/eagle.png");
	policeLineImg = loadImage("images/police line.png");
	trashCanImg = loadImage("images/trash can.png");
}



function setup() {
	// create a place to draw
	fill(122, 143, 142);
	createCanvas(640, 460);

}

function draw() {
	// draw the background
	image(backgroundImg, 0, 0)

	// set a fill color
	fill(255, 165, 0);
  noStroke();

	// draw the skater

if (mouseIsPressed) {ballX2 = ballX2 + ballSpeedX
										 ballY2 = ballY2 - ballSpeedY}

else {ballX2 = ballX2 + 0
			ballY2 = ballY2 + ballSpeedY}

if (ballY2 > 335) {ballY2 = 335}

image(skater1Img, ballX, ballY);
image(skater3Img, ballX2, ballY2);



// obstacle

obstacleX = obstacleX - random(4,6)

// don't let the obstacle go to far
if (obstacleX < 0) {
	obstacleX = 640;
}

image(trashCanImg, obstacleX, 380);


}
