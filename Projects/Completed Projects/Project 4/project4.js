// This game is a spin-off version of the "Flappy Bird" game from W3 Schools.
// The original source code can be found here:
// https://www.w3schools.com/graphics/game_intro.asp

var myGamePiece;
var myObstacles = [];
var myScore;
var backgroundImage = new Image();
var gameOver = false;

function startGame() {
    backgroundImage.src = "sky-background.jpg";
    backgroundImage.onload = function() { // Wait for the image to load.
        myGamePiece = new component(30, 30, "Crimson", 10, 120);
        myGamePiece.gravity = 0.05;
        myScore = new component("20px", "Consolas", "Black", 550, 20, "text");
        myGameArea.start();
    };
}


var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 700;
        this.canvas.height = 450;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]); // Inserts the canvas into the document.
        this.frameNo = 0; // Initialize frame count starting at zero; this is used for scoring.
        this.interval = setInterval(updateGameArea, 17); // Frame interval; determines game speed.
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

// Function for creating game components.
function component(width, height, color, x, y, type) {
    this.type = type;
    this.score = 0;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;
    this.gravity = 0;
    this.gravitySpeed = 0;
    this.update = function() {
        ctx = myGameArea.context;
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y); // Draw the text on the canvas
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height); // Draw the shape on the canvas.
        }
    }
    this.newPos = function() {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
        this.hitBottom(); // Check if the component hits the bottom.
    }
    this.hitBottom = function() {
        var rockbottom = myGameArea.canvas.height - this.height; // Calculate the bottom of the canvas.
        if (this.y > rockbottom) {
            this.y = rockbottom;
            this.gravitySpeed = 0;
        }
    }
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}

function updateGameArea() {
    var x, height, gap, minHeight, maxHeight, minGap, maxGap;

    // Clear the canvas first.
    myGameArea.clear();

    // Draw the background image.
    myGameArea.context.drawImage(backgroundImage, 0, 0, myGameArea.canvas.width, myGameArea.canvas.height);

    // Check for obstacle collisions.
    for (i = 0; i < myObstacles.length; i += 1) {
        if (myGamePiece.crashWith(myObstacles[i])) {
            gameOver = true; // Set game over flag.
            break; // Exit the loop.
        } 
    }

    if (gameOver) {
        myScore.text = "FINAL SCORE: " + myGameArea.frameNo; // Update to show final score.
        myScore.width = "40px";
        myScore.x = myGameArea.canvas.width / 2 - 100; // Center the final score horizontally.
        myScore.y = myGameArea.canvas.height / 2; // Center the final score vertically.
        myScore.update();
    } else {
        myGameArea.frameNo += 1;
        if (myGameArea.frameNo == 1 || everyinterval(150)) {
            x = myGameArea.canvas.width;
            minHeight = 20;
            maxHeight = 200;
            height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
            minGap = 50;
            maxGap = 200;
            gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
            myObstacles.push(new component(14, height, "Navy", x, 0)); // Top piece of an obstacle.
            myObstacles.push(new component(14, x - height - gap, "Navy", x, height + gap)); // Bottom piece of an obstacle.
        }
        for (i = 0; i < myObstacles.length; i += 1) {
            myObstacles[i].x += -1;
            myObstacles[i].update();
        }
        myScore.text = "SCORE: " + myGameArea.frameNo; // Update score during the game.
        myScore.update();
        myGamePiece.newPos();
        myGamePiece.update(); // Only update the player piece if the game is not over.
    }
}

function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}

// Set the gravity of the game piece to the specified value n.
function accelerate(n) {
    myGamePiece.gravity = n;
}
