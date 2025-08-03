**`Week 20 - JavaScript Object Methods, Object Display, Sets, & Type Conversion); AWS XXX`**

## JavaScript

### Question 1 - Object Methods
- *This question introduces object method creation.*
  - *HTML*
- Create a new HTML file or copy of one of your website HTML files, and name it `wk20.html`.
- Inside the HTML file, create one new paragraph element within the body.
- Add the `id` attribute to the paragraph element, and set the value `Q1`.
- The paragraph element should be closed without any text inside.
- Below the paragraph element, add a script element.
- Add the source attribute to the script element, and set it to `wk20.js`.
- Save the HTML file.
  - *JavaScript*
- Create a new JavaScript file, name it `wk20.js`, and open it.
- Within the JavaScript file, initialize an object named, `box`.
- Set the `box` object to have the following properties: `length`, `width`, and `height`.
- Next, set the three properties to have the following values: `"1ft"`, `"1ft"`, and `"2ft"`.
- Once you've done this, create a new `function` (i.e. method) called `dimensions`, which returns the dimensions for the box object.
- Lastly, write a get element by ID statement.
- The statement should target ID `Q1` and return `box.dimensions();`.
- Save the file, and check if your string is displaying correctly.

### Question 2 - Object Display (Loop)
- *Note: There are several ways to display object properties; here we'll use a loop.*
- Within your `wk20.html` file...
  - *HTML*
- Create a new paragraph element within the body.
- Add the `id` attribute to the paragraph element, and set the value `Q2`.
- The paragraph element should be closed without any text inside.
- Save the HTML file.
  - *JavaScript*
- Within your `wk20.js` file...
- Add a new `box` object property: `material`.
- Set the `material` property to: `cardboard`.
- Once you've done this, create two new variable...
- `let` the first variable be `box_data` set to an empty string.
- `let` the second variable be `count` set to the number 1.
- Next create a loop that runs for each item `in box`.
- The loop should create a formatted string for the current property.
- Each line should include the current `count`, plus a new line at the end; using `<br>`.
- The end of the loop should include a statement to incremeent `count`.
- Lastly, write a get element by ID statement.
- The statement should target ID `Q2` and return `box_data`.
- Save the file, and check if your string is displaying correctly.

### Question 3 - Sets
- *Creating a set and listing its elements.*
- Within your `wk20.html` file...
  - *HTML*
- Create a new paragraph element within the body.
- Add the `id` attribute to the paragraph element, and set the value `Q4`.
- The paragraph element should be closed without any text inside.
- Save the HTML file.
  - *JavaScript*
- Within your `wk20.js` file...
- Create a new set called `colors` and add three string entries to the set (any colors you like).
- Then, `let` a new variable called `text` equal an empty string.
- Now create a loop that runs for each item in the set.
- Each run of the loop should append the current item to the `text` string, plus a space character.
- Lastly, write a get element by ID statement.
- The statement should target ID `Q3` and return `text`.
- Save the file, and check if your string is displaying correctly.

- ### Question 4 - Type Conversion
- *Calling the date method and then converting it to a number.*
- Within your `wk20.html` file...
  - *HTML*
- Create a new paragraph element within the body.
- Add the `id` attribute to the paragraph element, and set the value `Q3`.
- The paragraph element should be closed without any text inside.
- Save the HTML file.
  - *JavaScript*
- Within your `wk20.js` file...
- Create a new variable called `mydate1` and `let` it be equal to `new Date();`
- Create a second variable called `mydate2` and `let` it be equal to `Number(mydate1);`
- Then, write a get element by ID statement.
- The statement should target ID `Q4` and return both variables, seperated by a `<br>` tag.
- Save the file, and check if your string is displaying correctly.

## AWS

### Create a CloudWatch Metric Graph
- Note: This lab is based on exercise 7.2 from the textbook.
- As a prerequisite we need a running EC2 instance.
- Log into your AWS console and search "EC2".
- Navigate to the EC2 dashboard and start up a new or existing instance.
- Next, search "CloudWatch" at the top of the console in the search bar.
- On the left side, expand "Metrics" and click "All Metrics".
- From the "Browse" tab, click "EC2" and then click "Per-Instance Metrics".
- Search the string `network` in the search bar, to reduce the results displayed.
- Find your EC2 instance and select "NetworkIn" and "NetworkOut".
- Click the "Graphed metrics" tab.
- For each metric, select `Sum` for the "Statistic" and `5 minutes` for the "Period".
- Click the "Add Math" button and select "Start with empty expression".
- In the "Edit Math Expression" field, enter the expression `m1+m2` and click "Apply".
- Lastly, test hovering your cursor over a timestamp in the graph, and ensuring you see all three metrics pop up.



## Important Note
- Ensure you disable or delete all newly created test/lab resources.
