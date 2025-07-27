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
<script src="wk13.js"></script>  
<script>concat_plus_length("hello", "good", "world");</script>
```
- Question 3 - JavaScript
```js
let string_a = "alpha";
let string_b = "bravo";
let string_c = "charlie";
let slices = string_a.slice(0,1) + string_b.slice(0,1) + string_c.slice(0,1);
document.getElementById("Q3").innerHTML = slices;
```

- Question 4 - HTML
```html
<p id="Q1"></p>
<p id="Q2"></p>
<p id="Q3"></p>
<p id="Q4"></p>
<script src="wk13.js"></script>  
<script>concat_plus_length("hello", "good", "world");</script>
```
- Question 4 - JavaScript
```js
let text = "I receive snail mail DAILY!";
let array1 = text.match(/ail/gi);
document.getElementById("Q4").innerHTML = array1.length + " " + array1;
```

- Question 5 - HTML
```html
<p id="Q1"></p>
<p id="Q2"></p>
<p id="Q3"></p>
<p id="Q4"></p>
<p id="Q5"></p>
<script src="wk13.js"></script>  
<script>concat_plus_length("hello", "good", "world");</script>
```
- Question 5 - JavaScript
```js
let x = 123;
let new_string = x.toString(); 
document.getElementById("Q5").innerHTML = new_string;
```


