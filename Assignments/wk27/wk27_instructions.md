**`Week 27 - JavaScript JQuery; AWS Aurora & Secrets Manager`**

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
- *Note: Aurora is Amazon's proprietary database.*
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
- Navigate to "Aurora and RDS", using the search bar.
- Select the "Databases" tab (left side of screen).
- Select your database cluster, click the "Actions" drop-down, and then click "Enable Data API".
- In a new browser tab open "Secrets Manager".
- Click the Secrets Manager entry for your database.
- Copy the "Secrets ARN to clipboard" and return to the previous browser tab.
- Next, select the "Query editor" tab (left side of screen).
- You should see a pop-up appear to configure login information.
- Select your `coding-hour-database` cluster.
- For "username" select the drop-down option "Connect with a Secrets Manager ARN".
- In the "Secrets manager ARN" section paste your clipboard contents.
- Lastly, click "Connect to database" and proceed to the next step.

### Test the Aurora Database
- You should be on the "Query Editor" panel, but if not, click the "Query Editor" (left side of screen).
- *Note: The query editor lets you run database commands over HTTPS and uses the Data API enabled earlier.*
- Next we will run a series of commands to test the Aurora database.
- As you run each command, check the output section.
- 1st command (Create a Database):
```
CREATE DATABASE studentDB;
USE studentDB;
```
- 2nd command (Create a Table):
```
USE studentDB;
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    major VARCHAR(50)
);
```
- 3rd command (Insert Data):
```
USE studentDB;
INSERT INTO students (name, age, major)
VALUES ('Alice', 22, 'Computer Science'),
       ('Bob', 23, 'Engineering'),
       ('Charlie', 20, 'Mathematics');
```
- 4th command (Query the Data):
```
USE studentDB;
SELECT * FROM students;
```
- 5th command (Perform an Update):
```
USE studentDB;
UPDATE students
SET age = 23
WHERE name = 'Alice';
```
- 6th command (Perform a Delete):
```
USE studentDB;
DELETE FROM students
WHERE name = 'Charlie';
```
- Once you've finished, discuss your experience with a classmate.

## Important Note
- Ensure you disable or delete all newly created test/lab resources.
