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
<script src="wk13.js"></script>
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
<p id="question_2"></p>
<script src="wk13.js"></script>  
```

- Question 2 - JavaScript
```
let a = 2 ** 3;
let b = 7 % 2;
document.getElementById("question_2").innerText = `${a} + ${b}`;
```

- Question 3 - HTML
```
<p id="question_1"></p>
<p id="question_2"></p>
<p id="question_3"></p>
<script src="wk13.js"></script>  
```

- Question 3 - JavaScript
```
let total = `${x + y + a + b}`;
let expression = `Add ${x}, ${y}, ${a}, and ${b}, you get ${total}.`;
document.getElementById("question_3").innerText = `${expression}`;
```
