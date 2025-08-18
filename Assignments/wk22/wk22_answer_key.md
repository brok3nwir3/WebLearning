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

- Question 2 - HTML
```html
<canvas id="Q1" width="700" height="700" style="border:2px solid #164996;">
</canvas>
<script src="wk21.js"></script>  
```
- Question 2 - JavaScript
```js
ctx.beginPath();
ctx.moveTo(10,100);
ctx.lineTo(160,170);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(160,100);
ctx.lineTo(10,170);
ctx.stroke();
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

