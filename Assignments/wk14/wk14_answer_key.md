**`Week 14 Assignment - Answer Key`**
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
```
<p id="question_1"></p>
<script src="wk14.js"></script>
```
- Question 1 - JavaScript
```
let myString = 'test';
let myInt = 123;
let myUndef;

function typeTest(x) {
    if (typeof x === 'string') {
        return `${x} is a string`;
    }
    else if (typeof x === 'number') {
        return `${x} is an integer`;
    }
    else {
        return `${x} is not an integer or string`;
    }
}

document.getElementById("question_1").innerText = typeTest(myString) + "\n" + typeTest(myInt) + "\n" + typeTest(myUndef);
```
- Question 2 - HTML
```
<p id="question_1"></p>

<h2>Question 2 (Counter)</h2>
<p id="counter">0</p>
<button id="leftButton">Left</button>
<button id="rightButton">Right</button>
<script src="wk14.js"></script>  
```

- Question 2 - JavaScript
```
let counter = 0;

function updateCounter() {
    document.getElementById("counter").innerText = counter;
}

document.getElementById("leftButton").addEventListener("click", function() {
    counter -= 1;
    updateCounter();
});

document.getElementById("rightButton").addEventListener("click", function() {
    counter += 1;
    updateCounter();
});
```
