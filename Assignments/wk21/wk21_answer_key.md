**`Week 21 Assignment - Answer Key`**
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
<script src="wk20.js"></script>
```
- Question 1 - JavaScript
```js
const box = {length:"1ft", width:"1ft", height:"2ft"};
box.dimensions = function() {
    return this.length + " x " + this.width + " x " + this.height;
};
document.getElementById("Q1").innerHTML = box.dimensions(); 
```

- Question 2 - HTML
```html
<p id="Q1"></p>
<p id="Q2"></p>
<script src="wk20.js"></script>  
```
- Question 2 - JavaScript
```js
box.material = "cardboard";
let box_data = "";
let count = 1;
for (let x in box) {
    box_data += "Property " + count + ": " + box[x] + "<br>";
    count ++;
};
document.getElementById("Q2").innerHTML = box_data;
```

- Question 3 - HTML
```html
<p id="Q1"></p>
<p id="Q2"></p>
<p id="Q3"></p>
<script src="wk20.js"></script>  
```
- Question 3 - JavaScript
```js
const colors = new Set(["yellow","green","purple"]);
let text = "";
for (const x of colors) {
  text += x + " ";
}
document.getElementById("Q3").innerHTML = text;
```

- Question 4 - HTML
```html
<p id="Q1"></p>
<p id="Q2"></p>
<p id="Q3"></p>
<p id="Q4"></p>
<script src="wk20.js"></script>  
```
- Question 4 - JavaScript
```js
mydate1 = new Date();
mydate2 = Number(mydate1);
document.getElementById("Q4").innerHTML = mydate1 + "<br>" + mydate2;
```
