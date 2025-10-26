**`Week 28 - JavaScript Classes & Class Methods; AWS EventBridge`**

## JavaScript

### Question 1 - Working w/ Classes
- *W3 Schools Reference: https://www.w3schools.com/js/js_classes.asp*
- *Note: A JavaScript class is not an object; It's a template for JavaScript objects.*
  - *HTML*
- Create a new HTML file or copy one of your website HTML files, and name it `wk28.html`.
- Add a `body` element and a `paragraph` element within.
- Have the `paragraph` element set the ID to `id="Q1"`.
- Next, add a `script` element at the bottom of the `body` element, below the `paragraph` element.
- Have the `script` element empty and set the source to `src="wk28.js"`.
- Save the HTML file.
  - *JavaScript*
- Create a new JavaScript file, name it `wk28.js`, and open it.
- Within the JavaScript file, create a new class called `Seagull`.
- Create a constructor within the class, which includes properties `name` and `age`.
- Next, use the constructor to create `seagull1` and `seagull2`.
- For `seagull1` set the name to "Sally" and the age to "1".
- For `seagull2` set the name to "Alfred" and the age to "4".
- Lastly, add a getElementById statement to display the names of *both* seagull objects.
- Save the file, and open it in your browser.
- Check if your code is correctly displaying the names successfully.

### Question 2 - Additional Class Methods
- *W3 Schools Reference: https://www.w3schools.com/js/js_classes.asp*
  - *HTML*
- Open your `wk28.html` file.
- Add a second `paragraph` element below your first one, with the ID set to `id="Q2"`.
- Save the HTML file.
  - *JavaScript*
- Open your `wk28.js` file.
- Within the JavaScript file, update your `Seagull` class to include a new method called `squawk`.
- The new method should return the given seagulls name, plus `" says: 'Squawk!'"`.
- Lastly, add a getElementById statement that populates the `Q2` ID.
- The Q2 text should  produce the following output...
```
"You pet the seagulls.
Sally says: 'Squawk!'
Alfred says: 'Squawk!'"
```
- Save the file, and open it in your browser.
- Check whether your code is correctly displaying the text.

## AWS

### WIP
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

### WIP
- WIP

## Important Note
- Ensure you disable or delete all newly created test/lab resources.
