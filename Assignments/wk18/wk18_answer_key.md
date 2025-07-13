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
