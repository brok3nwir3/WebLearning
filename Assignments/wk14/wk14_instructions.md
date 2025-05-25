
**`Week 14 - JavaScript JavaScript Functions, Strings, Events, Data Types, & If/Else; AWS `**

## JavaScript

### Question 1 - Data Type Test Function
  - *HTML*
- Create a new HTML file or copy of one of your website HTML files, and name it `wk14.html`.
- Also create a new JavaScript file, and name it `wk14.js`.
- Inside the HTML file, create a new paragraph element within the body.
- Add the ID attribute to the paragraph, and set it to `question_1`.
- Below the paragraph element, add a script element.
- Add the source attribute to the script element, and set it to `wk14.js`.
- Save the HTML file, and open the JavaScript file.
  - *JavaScript*
- Within the JavaScript declare three variables: `myString`, `myInt`, and `myUndef`.
- Initialize `myString` equal to `test`, `myInt` equal to `123`, and leave `myUndef` uninitialized.
- Next, create a function called `typeTest`, which takes in one variable: `x`.
- Within the function, you'll have one `if`, one `else if`, and one `else` statements.
- The `if` statement checks if `x` is `typeof` string, and returns `x is a string` when true.
- The `else if` statement checks if `x` is `typeof` number, and returns `x is a number` when true.
- And the `else` statement returns `x is not an integer or string` when true.
- Next, add a get element by ID statement for your output.
- Set the ID to `question_1`, and set the output to display `typeTest()` for each of the three variables, on their own lines.
- Save the file, and check if your output is displaying correctly.

### Question 2 - Event Listeners & Counter App
  - *HTML*
- Edit your `wk14.html` file, and navigate to the line above your `script` element.
- Here you will need to add four new elements.
- First, add a header element containing the following text: `Question 2 (Counter)`.
- Second, add a paragraph element, with the ID `counter`, and have the element text set to `0`.
- Third, add a button element, with the ID `leftButton`, and have the element text set to `Left`.
- Fourth, add a button element, with the ID `rightButton`, and have the element text set to `Right`.
- Save the HTML file, and open the JavaScript file.
  - *JavaScript*
- Below your other code in your JavaScript file, you will need to initialize a new variable `counter` to 0.
- Next you will need a function called `updateCounter`, which will contain a get element by ID statement.
- Set the value of element ID to `counter`, and have that equal to the actual value of the `counter` integer.
- We will use this function to update the number displayed on the page.
- Next, add two get element by ID statements; one for the left button and one for the right button.
- The first statement will be for `leftButton`, and require an event listener for `click` events.
- This statement will listen for `click` events, and when they are received, decrement `counter` and call the `updateCounter` function.
- The second statement will be identifical to the first, but for `rightButton`, and will increment the value of `counter`.
- Once you've finished, the expected output would be an HTML page with two buttons, which decrease or increase a value on the page.
- Lastly, save the file, and check if your output is displaying correctly.


## AWS

### Create an Internet Gateway
- Note: This exercise is based on exercise 4.4 from the textbook.
- Search 'VPC' in the AWS console (top of screen).
- Under 'Virtual private cloud', click 'Internet gateways'.
- Click 'Create internet gateway'.
- Add a name tag of: my-internet-gateway
- Click 'Create internet gateway'.
