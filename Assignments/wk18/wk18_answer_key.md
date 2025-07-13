**`Week 18 Assignment - Answer Key`**
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
<script src="wk18.js"></script>
```
- Question 1 - JavaScript
```js
let string1 = "The \"GOAT\" is the greatest of all time.";
document.getElementById("Q1").innerHTML = string1;
```

- Question 2 - HTML
```html
<p id="Q2"></p>
<script src="wk13.js"></script>  
<script>concat_plus_length("hello", "good", "world");</script>
```
- Question 2 - JavaScript
```js
function concat_plus_length(first_string, second_string, third_string){
    let combined = first_string + second_string + third_string;
    let output = combined + combined.length;
    document.getElementById("Q2").innerHTML = output;
}
```

- Question 3 - HTML
```html
<p id="demo1"></p>
<p id="demo2"></p>
<p id="demo3"></p>

<script src="wk13.js"></script>  
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
