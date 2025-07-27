**`Week 16 Assignment - Answer Key`**
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
<p id="wk16"></p>
<script src="wk16.js"></script>
```
- Question 1 - JavaScript
```js
const fruits = ["Banana", "Orange", "Apple", "Mango", "Lemon", "Cherry"];
document.getElementById("wk16").innerHTML = fruits;
```

- Question 2 - HTML
```html
<p class="wk16"></p>
<script src="wk16.js"></script> 
```
- Question 2 - JavaScript
```js
const fruits = ["Banana", "Orange", "Apple", "Mango", "Lemon", "Cherry"];
document.getElementsByClassName("wk16")[0].innerHTML = fruits;
```

- Question 3 - HTML
```html
<p id="demo1"></p>
<p id="demo2"></p>
<p id="demo3"></p>

<script src="wk16.js"></script>  
```
- Question 3 - JavaScript
```js
const fruits = ["Banana", "Orange", "Apple", "Mango", "Lemon", "Cherry"];
document.getElementById("demo1").innerHTML = fruits;
fruits.pop();
document.getElementById("demo2").innerHTML = fruits;
fruits.push("Kiwi");
document.getElementById("demo3").innerHTML = fruits;
```
