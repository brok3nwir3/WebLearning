**`Week 24 - JavaScript Switches & Regular Expressions; AWS TBD`**

## JavaScript

### Question 1 - Create a Switch Statement
- *W3 Schools Reference: https://www.w3schools.com/js/js_switch.asp*
  - *HTML*
- Create a new HTML file or copy of one of your website HTML files, and name it `wk24.html`.
- Next, add an empty paragraph element, with an ID set to `Q1`
- Lastly, add a script element and set the source attribute to `wk24.js`.
- Save the HTML file.
  - *JavaScript*
- Create a new JavaScript file, name it `wk24.js`, and open it.
- Within the JavaScript file, initialize a variable named, `day`.
- Next, create a `switch` statement that accounts for *seven* different *cases*.
- Within the switch *expression* you should call `new Date().getDay()`, to get the current date.
- Then, within each case, you check the current value of the `day` parameter.
- Lastly, create a `getElementById` statement that returns the current day.
- Save the file, and check if your code is displaying the expected day.

### Question 2 - Searching with Regular Expressions
- *W3 Schools Reference: https://www.w3schools.com/js/js_regexp.asp*
  - *HTML*
- Continuing in your `wk24.html` file...
- Add a new empty paragraph element, with an ID set to `Q2`
- Save the HTML file.
  - *JavaScript*
- Continuing in your `wk24.js` file...
- Within the JavaScript file, initialize a variable named, `text` and set it to the value `"Coding Hour!";`.
- Next, initialize a variable called `a` and set it `text.search(/Hour!/i);`.
- Next, initialize a variable called `b` and set it `text.search(/Hour/i);`.
- Next, initialize a variable called `c` and set it `text.search(/Hrrr/i)`.
- Lastly, create a `getElementById` statement that returns `"first " + a + " | second " + b + " | third " + c;`.
- Save the file, and review the results.
- Discuss your findings with a classmate.

### Question 3 - Switches and RegEx Together
- *W3 Schools Reference 1: https://www.w3schools.com/js/js_regexp_methods.asp*
- *W3 Schools Reference 2: https://www.w3schools.com/js/js_regexp_characters.asp*
  - *HTML*
- Continuing in your `wk24.html` file...
- Add a new empty paragraph element, with an ID set to `Q3`
- Save the HTML file.
  - *JavaScript*
- Continuing in your `wk24.js` file...
- Initialize a new variable named, `password` and set it to the value `"mypw";`.
- Initialize another new variable named, `strengthMessage` and set it as an empty string.
- Next, we need to create a switch that has several cases...
  - Each case in the switch should perform a different *strength* check on the `password` variable.
- Use the following example code to get started...
```
switch (true) {
  case (password.length < 6):
    strengthMessage = "This password is too short.";
    break;
  case ...
    ...
    ...
}
```
- Once you've added a few different strength checks, create a `getElementById` statement that returns `strengthMessage;`.
- Save the file, and review the results.
- Modify the `password` variable, and test different passwords; try to trigger each of the different switch case outcomes.

## AWS

### AWS Config
- Log into the AWS web console, search "aws config" in the search bar, and navigate to the page.
- Read the description and information about AWS Config. 
- Click on "1 Click Setup" option and complete the setup.
- After completing the setup, you should be redirected to the AWS Config Dashboard.
- Review the dashboard modules.
- Next, click the "Settings" tab (on the left).
- You should see the name of an S3 bucket used by AWS Config, under the section titled "S3 bucket name."
- Open a new tab for S3, and review the details for the bucket AWS Config bucket.
- Empty and delete the bucket.
- Return to the AWS Config browser tab, and navigate to the "Settings" tab.
- Click "Stop Recording."

### AWS Simple Notification Service
- Log into the AWS web console, search "SNS" in the search bar, and navigate to the page.
- In the top-right of the SNS home page, enter the name `TestTopic` for a new topic, then click "Next Step."
- Ensure the topic type "Standard" is selected, then scroll to the bottom and click "Create topic."
- Enter a name for your topic (e.g., MyTestTopic).
- Click "Create topic."
- After creating the topic, click on the "Topics" tab, and click the topic name to open its details.
- Click on "Create subscription."
- For "Protocol," select "Email."
- In the "Endpoint" field, enter your email address.
- Click "Create subscription."
- Check your email for a confirmation message from AWS SNS and confirm the subscription.
- Go back to the topic details page.
- Click on "Publish message."
- Enter a subject (e.g., Test Message) and a message body (e.g., Hello, this is a test message from AWS SNS!).
- Click "Publish message."
- After publishing the message, check your email inbox for the message you sent through SNS.

## Important Note
- Ensure you disable or delete all newly created test/lab resources.
