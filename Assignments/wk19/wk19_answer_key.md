**`Week 19 Assignment - Answer Key`**
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
<p id="Q1"></p>
<script src="wk19.js"></script>
```
- Question 1 - JavaScript
```js
const bird = {type:"Seagull", size:"Medium", color:"White"};
document.getElementById("Q1").innerHTML =
"The bird object is of type " + bird.type 
+ " of size " + bird.size 
+ " and of color " + bird.color;
```

- Question 2 - HTML
```html
<p id="Q1"></p>
<p id="Q2"></p>
<script src="wk19.js"></script>  
```
- Question 2 - JavaScript
```js
bird.habitat = "Coastal";
document.getElementById("Q2").innerHTML =
"The bird object is of type " + bird.type 
+ " of size " + bird.size 
+ " of color " + bird.color
+ " and of habitat " + bird.habitat;
```

- Question 3 - HTML
```html
<p id="Q1"></p>
<p id="Q2"></p>
<p id="Q3"></p>
<script src="wk19.js"></script>  
```
- Question 3 - JavaScript
```js
delete bird["size"];
document.getElementById("Q3").innerHTML =
"The bird object is of type " + bird.type 
+ " of size " + bird.size 
+ " of color " + bird.color
+ " and of habitat " + bird.habitat;
```
