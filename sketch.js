
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




/// these positions remain unchanged throughout the code
var xBallPos;
var yBallPos;
var yFloor;
var boxSize;

var level = [0,0,0,0,0,0,0,0,0,0,5,0,0,0,3,0,0,0,0,0,0,4,0,0,0,0,0,0,0,2,0,0,0,0,5,0,1,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,
	0,1,0,0,4,0,0,0,0,0,1,0,0,0,0,0,2,0,0,0,0,0,0,0,4,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,
	0,0,0,1,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,1,0,0,,0,0,0,3,0,0,0,0,1,0,0,0,0,0,2,0,0,0,1,0,0,0,0,0,0,4,0,0,0,2,0,0,0,3,0,0,0,1,0,0,0,6];
var scroll = 0;

var gameOver;
var gameWon;

var jump = false;
var jumpMillis = 0;

function setup() {
	// create a place to draw
	createCanvas(640, 480);
	noStroke();
	// noLoop();
	image(backgroundImg, 0, 0)


	// ball positions
	xBallPos = 80;
	yBallPos = 360;
	yFloor = yBallPos;

	boxSize = 30;
	ballSize = 40;

}

function draw() {
	image(backgroundImg, 0, 0)



	if (gameWon) {
		textSize(40);
		text("YOU WON!!", 200, 100);
		textSize(15)
		text("Final Score" , 260, 360)
		textSize(20)
		text(int(scroll/40), 285, 430);

	}




	if (gameOver) {
		textSize(40);
		text("YOU LOST", 200, 100);
		textSize(15)
		text("Final Score" , 260, 360)
		textSize(20)
		text(int(scroll/40), 290, 430);

	} else {
			scroll = scroll + 3;

			for (var i = 0; i < level.length; i ++) {
				if (level[i] == 1) {
					fill(210, 30, 100);

					// first type of obstacle
					image(benchImg, boxSize - scroll + i*40, 320)

					// detect obstacle
					if (xBallPos < (boxSize - scroll + i*40) + ballSize/2 &&
					xBallPos > (boxSize - scroll + i*40) - ballSize/2 &&
					yBallPos <= yFloor && yBallPos >= yFloor - boxSize){
						// do the game over part
						gameOver = true

						console.log("hit");
					}
				} else if (level[i] == 2){

					// second type of obstacle
					image(eagleImg, boxSize - scroll + i*40, 220)

					// detect obstacle
					if (xBallPos < (boxSize - scroll + i*40) + ballSize/2 &&
					xBallPos > (boxSize - scroll + i*40) - ballSize/2 &&
					yBallPos <= 250 + boxSize && yBallPos >= 250){
						// do the game over part
						gameOver = true

						console.log("hit");
					}
				} else if (level[i] == 3){
					// second type of obstacle
					image(ashTrayImg, boxSize - scroll + i*40 + 20, 330)

					// detect obstacle
					if (xBallPos < (boxSize - scroll + i*40) + ballSize/2 &&
					xBallPos > (boxSize - scroll + i*40) - ballSize/2 &&
					yBallPos <= 350 + boxSize && yBallPos >= 350){
						// do the game over part
						gameOver = true

						console.log("hit");
					}
				} else if (level[i] == 4){
					// second type of obstacle
					image(trashCanImg, boxSize - scroll + i*40 + 20, 340)

					// detect obstacle
					if (xBallPos < (boxSize - scroll + i*40) + ballSize/2 &&
					xBallPos > (boxSize - scroll + i*40) - ballSize/2 &&
					yBallPos <= 320 + boxSize && yBallPos >= 320){
						// do the game over part
						gameOver = true

						console.log("hit");
					}
				} else if (level[i] == 5){

					// second type of obstacle
					image(canImg, boxSize - scroll + i*40 + 35, 245)

					// detect obstacle
					if (xBallPos < (boxSize - scroll + i*40) + ballSize/2 &&
					xBallPos > (boxSize - scroll + i*40) - ballSize/2 &&
					yBallPos <= 250 + boxSize && yBallPos >= 250){
						// do the game over part
						gameOver = true

						console.log("hit");
					}
				} else if (level[i] == 6){
					// second type of obstacle
					image(policeLineImg, boxSize - scroll + i*40 + 20, 310)

					// detect obstacle
					if (xBallPos < (boxSize - scroll + i*40) + ballSize/2 &&
					xBallPos > (boxSize - scroll + i*40) - ballSize/2 &&
					yBallPos <= 330 + boxSize && yBallPos >= 330){
						// do the game over part
						gameWon = true

						console.log("hit");
					}
				}



				textSize(25);
				text("Score:", 11, height - 40);
				// score is ten times smaller than scroll
				text(int(scroll/40), 107, height - 39);

			}


			if (keyIsDown(UP_ARROW)) {
				if (jump == false) {
					jumpMillis = millis();
				}
				jump = true;
			}

			if (jump) {
				// jump up
				if (millis()-jumpMillis > 0 && millis()-jumpMillis < 300) {
					yBallPos -= 7;
				} else

				// jump down
				if (millis()-jumpMillis > 300 && millis()-jumpMillis < 600) {
					yBallPos += 7;
				}

				if (millis() > jumpMillis + 600) {
					jump = false;
					yBallPos = 360;

				}
			}
			// main ball
			image(skater2Img, xBallPos-30, yBallPos-60);
	}
}
