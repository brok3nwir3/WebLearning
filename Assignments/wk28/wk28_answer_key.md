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
    <script src="wk28.js"></script>
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
<body>
    <p id="Q1"></p>
    <p id="Q2"></p>
    <script src="wk28.js"></script>
</body>
</html>
```
- Question 2 - JavaScript
```js
class Seagull {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  squawk() {
    return this.name + " says: 'Squawk!'";
  }
}

const seagull1 = new Seagull("Sally", 1);
const seagull2 = new Seagull("Alfred", 4);

document.getElementById("Q1").innerHTML =
"The seagulls are named " + seagull1.name + " and " + seagull2.name + ".";

document.getElementById("Q2").innerHTML =
  "You pet the seagulls." + "<br>" +
  seagull1.squawk() + "<br>" +
  seagull2.squawk();
```
