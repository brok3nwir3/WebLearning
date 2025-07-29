**`Week 19 - JavaScript Objects, Object Properties; AWS GuardDuty`**

## JavaScript

### Question 1 - New Object
- The following questions will focus on the basics of objects.
  - *HTML*
- Create a new HTML file or copy of one of your website HTML files, and name it `wk19.html`.
- Inside the HTML file, create one new paragraph element within the body.
- Add the `id` attribute to the paragraph element, and set the value `Q1`.
- The paragraph element should be closed without any text inside.
- Below the paragraph element, add a script element.
- Add the source attribute to the script element, and set it to `wk19.js`.
- Save the HTML file.
  - *JavaScript*
- Create a new JavaScript file, name it `wk19.js`, and open it.
- Within the JavaScript file, initialize an object named, `bird`.
- Set the `bird` object to have the following properties: `type`, `size`, and `color`.
- Next, set the three properties to have the following values: `"Seagull"`, `"Medium"`, and `"White"`.
- Once you've done this, write a get element by ID statement.
- The statement should target ID `Q1` and return a string that contains all the properties of the `bird` object.
- Save the file, and check if your string is displaying correctly.

### Question 2 - Add an Object Property
- Within your `wk19.html` file...
  - *HTML*
- Create a new paragraph element within the body.
- Add the `id` attribute to the paragraph element, and set the value `Q2`.
- The paragraph element should be closed without any text inside.
- Save the HTML file.
  - *JavaScript*
- Within your `wk19.js` file...
- Add a new `bird` object property: `habitat`.
- Set the `habitat` property to a *list* containing: `Coastal` and `Inland`.
- Once you've done this, write a get element by ID statement.
- The statement should target ID `Q2` and return a string that contains all the properties of the `bird` object.
- Save the file, and check if your string is displaying correctly.

### Question 3 - Remove an Object Property
- Within your `wk19.html` file...
  - *HTML*
- Create a new paragraph element within the body.
- Add the `id` attribute to the paragraph element, and set the value `Q3`.
- The paragraph element should be closed without any text inside.
- Save the HTML file.
  - *JavaScript*
- Within your `wk19.js` file...
- Add a delete statement that removes the property `size`.
- Once you've done this, write a get element by ID statement.
- The statement should target ID `Q3` and return a string that contains all the properties of the `bird` object; including `size`.
- Save the file, and check if your string is displaying as expected.
- Discuss with a classmate what you see returned for `size`, and why you're getting this result.

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

### 
- 
