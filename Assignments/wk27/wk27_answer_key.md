**`Week 27 Assignment - Answer Key`**
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

- Question 1
```html
<!DOCTYPE html>
<html>
<body>
    <p id="Q1"></p>
    <script src="wk26.js"></script>
</body>
</html>
```
- Question 1 - JavaScript
```js
const add = (a, b) => a + b; // More concise; no need for return or braces
const isEven = (num) => num % 2 === 0; // Directly returns the boolean value

document.getElementById("Q1").innerHTML = "Add function (1+2) : " + add(1,2) + "<br>Even check function (7) : " + isEven(7);
```
