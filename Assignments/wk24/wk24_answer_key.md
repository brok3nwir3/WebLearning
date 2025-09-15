**`Week 24 Assignment - Answer Key`**
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
<html>
<body>
    <p id="Q1"></p>
    <script src="wk13.js"></script>  
</body>
</html>
```
- Question 1 - JavaScript
```js
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("Q1").innerHTML = "Today is " + day;
```

- Question 2 - HTML
```html
<!DOCTYPE html>
<html>
<body>
    <p id="Q1"></p>
    <p id="Q2"></p>
    <script src="wk13.js"></script>  
</body>
</html>
```
- Question 2 - JavaScript
```js
let text = "Coding Hour!"; 
let a = text.search(/Hour!/i);
let b = text.search(/Hour/i);
let c = text.search(/Hrrr/i);
document.getElementById("Q2").innerHTML = "first " + a + " | second " + b + " | third " + c;
```
- Question 3 - HTML
```html
<!DOCTYPE html>
<html>
<body>
    <p id="Q1"></p>
    <script src="wk13.js"></script>  
</body>
</html>
```
- Question 3 - JavaScript
```js
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("Q1").innerHTML = "Today is " + day;
```
