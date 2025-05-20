**`Week 13 - JavaScript Let, Const, Operators, & Template Strings`**

## JavaScript

### Question 1 - Let & Const
- Note: If you get stuck on this question, the following examples might be helpful...
- https://www.w3schools.com/js/js_string_templates.asp
  - *Step 1...*
- Create a new HTML file or copy of one of your website HTML files, and name it `wk13.html`.
- Also create a new Javascript file, and name it `wk13.js`.
- Inside the HTML file, create a new paragraph element within the body.
- Add the ID attribute to the paragraph, and set it to `question_1`.
- Below the paragraph element, add a script element.
- Add the source attribute to the script element, and set it to `wk13.js`.
- Save the HTML file, and open the Javascript file.
  - *Step 2...*
- Within the Javascript file declare variable `x` using `let`.
- On the next line, initialize `x` to `8`.
- One the line below that, declare `y` and initialize it to `3` using `const`, on the same line.
- On the next line, `let` variable `sum` equal `x` plus `y`.
- Next, add a get element by ID statement for your output.
- Set the ID to `question_1`, and set the output to the `sum` variable.
- Save the file, and check if your output is displaying correctly.

### Question 2 - Operators
- Inside the HTML file, create a new paragraph element within the body (immediately below the previous paragraph element).
- Add the ID attribute to the paragraph, and set it to `question_2`.
- Save the HTML file, and open the Javascript file.
- Within the Javascript file declare variable `a` and initialize it to `2` to the 3rd power, using `let`.
- Next, declare variable `b` and initialize it to `7` mod `2`, using `let`.
- Lastly, add a get element by ID statement for your output.
- Set the ID to `question_2`, and set the output to display variables `a` and `b`.
- Save the file, and check if your output is displaying correctly.

### Question 3 - Template Strings
- Note: If you've coded in Python before, template strings work similarly to Python f-strings.
- Inside the HTML file, create a new paragraph element within the body (immediately below the previous paragraph element).
- Add the ID attribute to the paragraph, and set it to `question_3`.
- Save the HTML file, and open the Javascript file.
- Within the Javascript file declare variable `total` and initialize it to `x + y + a + b`, using `let`.
- Next, declare variable `expression`, using `let`.
- Within the expression, use strings for the text, and variables for the numbers, to display the following:
- `Add 8, 3, 8, and 1, you get 20.`
- Lastly, add a get element by ID statement for your output.
- Set the ID to `question_3`, and set the output to display variables `expression`.
- Save the file, and check if your output is displaying correctly.


## AWS

### Create an Internet Gateway
- Note: This exercise is based on exercise 4.4 from the textbook.
- Search 'VPC' in the AWS console (top of screen).
- Under 'Virtual private cloud', click 'Internet gateways'.
- Click 'Create internet gateway'.
- Add a name tag of: my-internet-gateway
- Click 'Create internet gateway'.

### Attach the Internet Gateway
- Return to the Internet gateways list, on the VPC page.
- Select your newly created Internet gateway.
- Select the 'Actions' drop-down menu, and choose 'Attach to VPC'.
- Select 'my-test-vpc' and then click 'attach internet gateway'.

### Set a Default Route
- Return to the VPC page and click 'Route tables'.
- Select the route table that's assigned to 'my-test-vpc'.
- Click the 'Actions' drop-down menu and select 'Edit routes'.
- Click the 'Add route' button.
- For destination, choose: 0.0.0.0/0
- For target, choose: Internet Gateway > my-internet-gateway
- Lastly, click 'Save changes'.

### Allocate an Elastic IP Address (EIP)
- Note: This exercise is based on exercise 4.7 from the textbook.
- Search 'VPC' in the AWS console (top of screen).
- Under 'Virtual private cloud', click 'Elastic IPs'.
- Click 'Allocate elastic IP address'.
- Leave all setting to their default, and click 'Allocate'.

### Assign an Elastic IP Address
- Search 'EC2' in the AWS console (top of screen).
- Take the steps to launch a new EC2 instance named 'my-test-instance'.
- Next, search 'VPC' in the AWS console.
- Under 'Virtual private cloud', click 'Elastic IPs'.
- Select your newly allocated EIP.
- Use the 'Actions' drop-down menu, and choose 'Associate elastic IP address'.
- Select 'my-test-instance' for the instance.
- Select any private IP address.
- Click 'Associate'.
- Return to the EC2 page.
- Select 'my-test-instance' from the list.
- Click the 'Networking' tab for the instance.
- Review the public and private IP information.

## Important Note
- Ensure you delete all test resources from week 12 and wek 13.
