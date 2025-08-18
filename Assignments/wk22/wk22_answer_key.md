**`Week 22 Assignment - Answer Key`**
\
\
Scroll down for the answers.
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\
\

- Question 1 - HTML
```html
<!DOCTYPE html>
<html lang="en-US">
<link rel="stylesheet" href="wk22.css">
<body onload="startGame()">
<script src="wk22.js"></script>  
</body>
</html>
```
- Question 1 - CSS
```css
canvas {
    border: 2px solid #174680;
    background-color: #acb1af;
}
```
- Question 1 - JavaScript
```js
function startGame() {
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}
```

- Question 2 - JavaScript
```js
var myGamePiece;

function startGame() {
    myGameArea.start();
    myGamePiece = new component(30, 30, "red", 10, 120);
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}
```

- Question 3 - HTML
```html
<canvas id="Q1" width="700" height="700" style="border:2px solid #164996;">
</canvas>
<script src="wk21.js"></script>  
```
- Question 3 - JavaScript
```js
ctx.font = "bolder oblique 45px monospace";
ctx.strokeText("XBOX", 35, 95);
```

