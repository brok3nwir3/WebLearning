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

### Question 2 - Update an Object
- Within your `wk19.html` file...
  - *HTML*
- Create a new paragraph element within the body.
- Add the `id` attribute to the paragraph element, and set the value `Q2`.
- The paragraph element should be closed without any text inside.
- Save the HTML file.
  - *JavaScript*
- Within your `wk19.js` file...
- Add a new `bird` object property: `habitat`.
- Set the `habitat` property to: `Coastal`.
- Once you've done this, write a get element by ID statement.
- The statement should target ID `Q2` and return a string that contains all the properties of the `bird` object.
- Save the file, and check if your string is displaying correctly.

## AWS

### Creating a Trail (CloudTrail)
- Note: This lab is based on exercise 7.1 from the textbook.
- Log into your AWS console and search "CloudTrail".
- Click "Create a trail".
- Name the trail: `coding-hour-trail` and click to continue.
- Return to the CloudTrail home page.
- Click the `coding-hour-trail` and view the details.
- Click "Trail log location".
- Identify the newly created S3 bucket used by your trail.
- Discuss the following with a classmate...
  - Note: You may need to wait a few minutes before you're able to answer the following.
- 1) What is the name of the object within the new bucket?
- 2) What file type is in the bucket?
- 3) What information does the file contain?
- 4) Return the trail, open the details, and identify the four main event categories.
- 5) From the CloudTrail menu, click "Event History" (on the left), and review the latest events.
 
## Important Note
- Ensure you disable or delete all newly created test/lab resources.

