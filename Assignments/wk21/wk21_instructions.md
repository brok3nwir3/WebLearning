**`Week 21 - HTML Canvas Element; JavaScript Drawing, Coordinates, and Lines ; AWS `**

## JavaScript

### Question 1 - HTML Canvas Element & JavaScript Drawing
- *This question introduces the HTML canvas element.*
  - *HTML*
- Create a new HTML file or copy of one of your website HTML files, and name it `wk21.html`.
- Inside the HTML file, create one new canvas element within the body.
- Add the `id` attribute to the paragraph element, and set the value `Q1`.
- The canvas element should be closed without any text inside.
- Set the canvas to have a `height` attribute of `700` and a `width` attribute of `700`.
- Set the canvas to have a `style` attribute with `2` pixel border, `solid`, with color `#164996`.
- Below the canvas element, add a script element.
- Add the source attribute to the script element, and set it to `wk21.js`.
- Save the HTML file, and check if your canvas is displaying correctly.
  - *JavaScript*
- Note: Refer to the following page if you get stuck: https://www.w3schools.com/graphics/canvas_drawing.asp
- Create a new JavaScript file, name it `wk21.js`, and open it.
- Within the JavaScript file, initialize a *constant* variable named, `canvas`.
- Set the `canvas` variable to a `getElementById` for `Q1`.
- Next, initialize a *constant* variable named, `ctx` (context).
- Set the `ctx` variable to a `"2d"` canvas context.
- Next, set `ctx` to have a `fillStyle` of `"green"`.
- Then, draw a rectangle, i.e. `fillRect` with the dimension `150` by `70`.
- Place the rectangle at an X position of `10` and a Y position of `100`.
- Save the file, and check if your rectangle is displaying correctly.

### Question 2 - Coordinates and Drawing Lines
- We will continue using the `Q1` canvas, so no changes will be made to the `wk21.html` file.
  - *JavaScript*
- Within your `wk21.js` file...
- Read the following page: https://www.w3schools.com/graphics/canvas_lines.asp
- Based on the information from your reading, create two new line drawings on the canvas.
- Position the two new lines create a black X going through the green rectangle you made in question 1.
- The two lines should appear to start and end in the corners of the rectangle.
- Save the file, and check if your lines are displaying correctly.

### Question 3 - Canvas Text
- We will continue using the `Q1` canvas, so no changes will be made to the `wk21.html` file.
  - *JavaScript*
- Within your `wk21.js` file...
- Read the following page: https://www.w3schools.com/graphics/canvas_lines.asp
- Based on the information from your reading, create two new line drawings on the canvas.
- Position the two new lines create a black X going through the green rectangle you made in question 1.
- The two lines should appear to start and end in the corners of the rectangle.
- Save the file, and check if your lines are displaying correctly.


## AWS

### Create New Admin w/ Permission Boundary
- *Note: This exercise is a spin-off of exercise 12.1 from the textbook.*
- Log into the AWS web console, search "IAM" in the search bar, and navigate to the page.
- On the left side of the screen, find "Acess managment" and click the "Users" tab.
- Click the orange "Create new user" button on the right.
- Name the user: `TestAdmin`
- Click the checkbox for "Provide user access to the AWS Management Console - optional".
- Click "Custom password".
- Set the password and write the password down somewhere (we will be deleting this account/password at the end).
- Un-check the option for "Users must create a new password at next sign-in - Recommended".
- Click "Next".
- Click the radio button for "Attach policies directly".
- Attach the "AdministratorAccess" policy.
- Click "Next".
- Click "Create user".
- From the "Acess managment" and "Users" tab, click the new `TestAdmin` user.
- Under the "Permissions" tab, expand the "Permissions boundary", and click "Set permissions boundary".
- Select the "AdministratorAccess" policy from the list.
- Scroll to the bottom and click the orange "Set boundary" button on the right.
- *Note: This user is for demonstration purposes, normally the boundary would place a maximum permissions boundary on a less privileged user.*

### Create New IAM Role
- *Note: This exercise is a spin-off of exercise 12.2 from the textbook.*
- Log into the AWS web console, search "IAM" in the search bar, and navigate to the page.
- On the left side of the screen, find "Acess managment" and click the "Roles" tab.
- Click the orange "Create role" button on the right.
- For "Trusted entity type" select "AWS account".
- Leave the settings to their defaults and click "Next" on the right.
- Select the permission policy "AmazonEC2ReadOnlyAccess" and click "Next".
- Name the role `EC2ReadOnlyTestRole`.
- Review the JSON in the "Trust policy", and then click "Create role".

### Assume New IAM Role
- *Note: This exercise is a spin-off of exercise 12.2 from the textbook.*
- SAve your AWS account ID number somewhere convenient.
- Log out of your root user account.
- Navigate to: https://console.aws.amazon.com/
- Log into your `TestAdmin` account.
- Click your username in the top right of the AWS console.
- Click the "Switch role" button.
- Enter your AWS account ID number and the role name `EC2ReadOnlyTestRole`.
- Click "Switch role".
- Review the AWS console dashboard.
- If your assume role was successful, you should see multiple red "x" characters and "Access denied" messages.
- You can also test your access by navigating to the EC2 page, and attempting to launch a new instance.

## Important Note
- Ensure you disable or delete all newly created test/lab resources.
