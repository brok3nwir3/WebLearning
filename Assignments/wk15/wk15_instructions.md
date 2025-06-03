
**`Week 15 - JavaScript On-click Events, Arrays, Events, CSS Display, & Element by Class; AWS ...`**

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



## AWS

### Create an RDS Database Instance
- Note: This exercise is based on exercise 5.1 from the textbook.
- Search 'RDS' in the AWS console (top of screen).
- This will take you to the dashboard page, where you can click 'Create a database'.
- Under 'Engine options' select 'MariaDB'.
- Under 'Templates' select 'Free tier'.
- Set a master username and password.
- Scroll down to the bottom of the options and expand 'Additional configuration'.
- Set the initial database name to: `my_test_mariadb`
- Leave all other settings to their defaults, and click 'Create database'.
- The creation of the database will take a few minutes.
- Once the database has been created, review the Region, Size, and VPC that have been assigned to the database.
- Next, click the database to view all the configuration tabs.
- Identify the following: Port used, most recent logs, license model, and latest backup activity.
- Discuss your findings with a classmate.



## Important Note
- Ensure you delete all test resources once you're finished.

