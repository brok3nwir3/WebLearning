**`Week 25 Assignment - Answer Key`**
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
Method: getElementById
Property: innerHTML
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
    <p id="Q1"></p>
    <p id="Q2"></p>
    <p id="Q3"></p>
    <script src="wk13.js"></script>  
</body>
</html>
```
- Question 3 - JavaScript
```js
let password = "mypw";
let strengthMessage = "";
switch (true) {
  case (password.length < 6):
    strengthMessage = "This password is too short.";
    break;
  case (!/[A-Z]/.test(password)):
    strengthMessage = "This password should contain at least one uppercase letter.";
    break;
  case (!/[0-9]/.test(password)):
    strengthMessage = "This password should contain at least one number.";
    break;
  case (!/[!@#$%^&*]/.test(password)):
    strengthMessage = "This password should contain at least one special character.";
    break;
  case (password.length >= 6 && /[A-Z]/.test(password) && /[0-9]/.test(password) && /[!@#$%^&*]/.test(password)):
    strengthMessage = "This password is strong.";
    break;
  default:
    strengthMessage = "This password is acceptable.";
}
document.getElementById("Q3").innerHTML = strengthMessage;
```
