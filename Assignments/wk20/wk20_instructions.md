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

### Question 4 - Type Conversion
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

### Register a Domain Name
- *Note: This exercise will charge you ~$3 USD, for a year-long lease on a domain name.*
- Log into the AWS web console, search "Route 53" in the search bar, and navigate to the page.
- On the left side of the screen, under "Domains," click "Registered Domains."
- Next, click the orange "Register domains" button (top right).
- Expand the "Standard Pricing" tab, and click the arrow button in the "Price" column to sort by TLD price.
- You should see a TLD that has a price around $3 USD, such as `.click`.
- Next, enter a domain name, such as `test123.click` or `johntestserver.click`, and click the search button.
- If the name is available, click the "Select" button.
- Finally, click the orange "Proceed to checkout" button, and complete the payment process.

### Verify the Domain Name
- Return to the Route 53 dashboard page.
- On the left side of the screen, under "Domains," click "Registered Domains."
- Confirm your domain name appears in the list.
- Next, navigate to: https://search.dnslytics.com/
- Search your domain name.
- Review the page contents and examine the registration information, including WHOIS data.

### Start an EC2 Web Server
- Navigate to the EC2 dashboard.
- Click the "Instances" tab and click "Instances" (left side of screen).
- Click the orange "Launch instances" button (top right).
- Create a new AWS Linux host with a security group allowing ports 443, 80, and 22.
- Log into the new EC2 host.
- Run the following commands:
```sudo yum update -y```
```sudo yum install -y httpd```
```sudo nano /var/www/html/index.html```
- At this point, the nano text editor will open and you'll need to paste in the following HTML code:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <title>My Website</title>
</head>
<body>
    <h1>Welcome</h1>
    <p>This is a simple page.</p>
</body>
</html>
```

### Create a Route 53 Hosted Zone
- *Note: This lab is based on exercise 8.1 from the textbook.*
- 



## Important Note
- Ensure you disable or delete all newly created test/lab resources; excluding your registered domain name (you already paid for it).
