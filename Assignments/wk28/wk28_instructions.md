**`Week 28 - JavaScript Classes; AWS EventBridge`**

## JavaScript

### Question 1 - JQuery Find Element by ID
- *W3 Schools Reference: https://www.w3schools.com/js/js_jquery_selectors.asp*
- *JQuery offers several benefits when working with JavaScript, including concise code and improved browser compatibility.*
  - *HTML*
- Create a new HTML file or copy one of your website HTML files, and name it `wk27.html`.
- At the top of your document, before the `body` element, create a `head` element.
- Within `head` element, add an empty `script` element pointing to: `src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"`
- Below the `head` element, add a `body` element and two `paragraph` elements within.
- Have the first `paragraph` element filled with text `Hello world!` and set the ID to `id="Q1"`.
- Have the second `paragraph` element empty and set the ID to `id="demo"`.
- Next, add a `script` element at the bottom of the `body` element, below the `paragraph` elements.
- Have the `script` element empty and set the soruce to `src="wk26.js"`.
- Save the HTML file.
  - *JavaScript*
- Create a new JavaScript file, name it `wk27.js`, and open it.
- Within the JavaScript file, you can copy the following javascript code:
```
$(document).ready(function() {
  var myElements = $("#Q1");
  $("#demo").text("The text from the Q1 paragraph element is: " + myElements[0].innerHTML);
});
```
- Save the file, and open it in your browser.
- Check if your code is correctly displaying *two* lines of text.
- Discuss with a classmate how jQuery simplifies the process of accessing HTML elements.

### Question 2 - JQuery Set HTML Content
- *W3 Schools Reference: https://www.w3schools.com/js/js_jquery_elements.asp*
  - *HTML*
- Open your `wk27.html` file.
- Below your empty second `paragraph` that's set to `id="demo"` create a new `paragraph` element.
- Fill the new `paragraph` element with the text `Text to replace.` and set the ID to `id="Q2"`.
- Save the HTML file.
  - *JavaScript*
- Open your `wk27.js` file, and copy the following javascript code:
```
$(document).ready(function() {
  $("#Q2").html("<p>Text overwritten!</p>");
});
```
- Save the file, and open it in your browser.
- Check if your code is correctly displaying the replacement line of text.
- Discuss with a classmate how jQuery simplifies the process of manipulating HTML elements.

## AWS

### Create an Aurora Database
- *Note: Aurora is Amazon's proprietary relational database service that is designed to offer high performance, scalability, and availability.*
- Navigate to "Aurora and RDS", using the search bar.
- Click the "Create database" button.
- For *Engine*, select "Aurora (MySQL-compatible)".
- For *Template*, select "Dev/Test".
- Set the *DB Cluster Identifier* to `coding-hour-database`
- Under "Instance Configuration" choose the *Serverless* option (for simplicity and cost management).
- Set the "Capacity Range" to a minimum of `1 ACU` and a maxiumum of `10 ACUs`.
- Leave all other options to their defaults, and scroll to the bottom of the screen.
- Click "Create database".
- *Note: The default settings will set your username to `admin` and create an AWS Secrets Manager entry for your password.*
- This creation process may take a few minutes to complete.
- Once the database has been created, review your database details, and proceed to the next step.

### Aurora Configuration
- N

## Important Note
- Ensure you disable or delete all newly created test/lab resources.
