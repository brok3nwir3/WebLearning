
**`Week 15 - JavaScript On-click Events, Arrays, Events, CSS Display, & Element by Class; AWS ...`**

## JavaScript

### Question 1 - Working with Arrays, Pt.1
  - *HTML*
- Create a new HTML file or copy of one of your website HTML files, and name it `wk15.html`.
- Inside the HTML file, create three new paragraph element within the body.
- Add the `class` attribute to all paragraph elements, set to the value `words`.
- The first paragraph should have the text: `Chameleon`
- The second paragraph should have the text: `Seagull`
- The third paragraph should have the text: `Ferret`
- Next, add a single button element, with text set to `Hide/Reveal`.
- Set the `onclick` attribute for the button element, and set the value to `hideText()`
- Below the paragraph elements, add a script element.
- Add the source attribute to the script element, and set it to `wk15.js`.
- Save the HTML file.
  - *JavaScript*
- Create a new JavaScript file, name it `wk15.js`, and open it.
- Within the JavaScript file, initialize one variable, `clicked`, equal to `false`.
- Next, create a function called `hideText`, which doesn't take any variables/parameters.
- Within the function, initialize one variable, `myText`, equal to `document.getElementsByClassName`.
- Then, pass `words` as the target class for `myText`.
- Next, you'll need to create one `if`, and one `else` statement.
- The `if` statement checks if `clicked` is `false`.
- If the statement evaluates to true, then set `clicked` to `true`.
- Additionally, the object at `myText` array position zero, should be set to `.style.display` equal to `"none"`.
- In the `else` statement, when it evaluates to true, we set `clicked` to `false`.
- Additionally, the object at `myText` array position zero, should be set to `.style.display`  equal to `"block"`.
- You should now have a button that alternates between hiding and revealing the first element in the `myText` array.
- Save the file, and check if your button is working correctly.

### Question 2 - Working with Arrays, Pt.2
  - *HTML*
- Inside your HTML file, create three new paragraph element within the body.

- Save the HTML file.
  - *JavaScript*
- Create a new JavaScript file, name it `wk15.js`, and open it.

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

