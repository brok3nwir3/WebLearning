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
<p class="words">Chameleon</p>
<p class="words">Seagull</p>
<p class="words">Ferret</p>

<button onclick="hideText()">Button</button>

<script src="wk13.js"></script>  
```

- Question 2 - JavaScript
```js
let clicked = false;

function hideText(){
    let myText = document.getElementsByClassName("words");
    if (clicked === false){
        clicked = true;
        for (let i = 0; i < myText.length; i++){
            myText[i].style.display = "none";
        }
    }
    else{
        clicked = false;
        for (let i = 0; i < myText.length; i++){
            myText[i].style.display = "block"; 
        }
    }
    
}
```
