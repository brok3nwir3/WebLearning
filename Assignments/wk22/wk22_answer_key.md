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
<canvas id="Q1" width="700" height="700" style="border:2px solid #164996;">
</canvas>
<script src="wk21.js"></script>  

```
- Question 1 - JavaScript
```js
const canvas = document.getElementById("Q1");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(10, 100, 150, 70);
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

