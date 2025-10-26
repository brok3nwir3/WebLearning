**`Week 28 Assignment - Answer Key`**
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
class Seagull {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const seagull1 = new Seagull("Sally", 1);
const seagull2 = new Seagull("Alfred", 4);

document.getElementById("Q1").innerHTML =
"The seagulls are named " + seagull1.name + " and " + seagull2.name + ".";
```

- Question 2 - HTML
```html
<!DOCTYPE html>
<html>

<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
</head>

<body>
<p id="Q1">Hello World!</p>
<p id="demo"></p>
<p id="Q2">Text to replace.</p>
<script src="wk13.js"></script>
</body>

</html>
```
- Question 2 - JavaScript
```js
$(document).ready(function() {
  var myElements = $("#Q1");
  $("#demo").text("The text from the Q1 paragraph element is: " + myElements[0].innerHTML);
});

$(document).ready(function() {
  $("#Q2").html("<p>Text Overwritten!</p>");
});
```
