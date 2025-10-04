**`Week 26 Assignment - Answer Key`**
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
```
Method 1: getElementsByTagName
Property 1: style

Method 2: getElementById
Property 2: textContent
```

- Question 2 - HTML
```html
<!DOCTYPE html>
<html>
<body>
    <h2>My Favorite Fruits</h2>
    <ul id="Q2"></ul>
    <script src="wk25.js"></script>
</body>
</html>
```
- Question 2 - JavaScript
```js
var newListItem = document.createElement("li");
newListItem.textContent = "Apple";
document.getElementById("Q2").appendChild(newListItem);
```
- Question 3 - HTML
```html
<!DOCTYPE html>
<html>
<body>
    
    <h2>My Favorite Fruits:</h2>
    <ul id="Q2"></ul>

    <h2>Current Page URL:</h2>
    <p id="Q3"></p>

    <script src="wk25.js"></script>  
</body>
</html>
```
- Question 3 - JavaScript
```js
var currentURL = document.URL;
document.getElementById("Q3").textContent = currentURL;
```
