**`Week 13 - JavaScript Let, Const, Hoisting, Operators, & Arithmetic`**

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

### Question 2 - Operators & Arithmetic
- Inside the HTML file, create a new paragraph element within the body (immediately below the previous paragraph element).
- Add the ID attribute to the paragraph, and set it to `question_2`.
- Save the HTML file, and open the Javascript file.
- Within the Javascript file declare variable `a` and initialize it to `2` to the 3rd power, using `let`.
- Next, declare variable `b` and initialize it to `7` mod `2`, using `let`.
- Lastly, add a get element by ID statement for your output.
- Set the ID to `question_2`, and set the output to the variables `a` plus `b`.
- Save the file, and check if your output is displaying correctly.

### Question 3 - 
- Inside the HTML file, create a new paragraph element within the body (immediately below the previous paragraph element).
- 



## AWS


### Create an ENI
- Note: This exercise is based on exercise 4.3 from the textbook.
- Search 'EC2' in the AWS console (top of screen).
- Under "Network & Security", click "Network Interfaces".
- Click "Create network interface".
- Add an ENI description of: my-test-eni
- Choose the subnet you named "my-test-subnet"
- For "Private IPv4 address" click "Custom".
- Enter the following address: 172.16.100.99
- Select the default security group.
- Click "Create network interface".
