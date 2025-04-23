**`Week 10 - HTML  Entities, URL Encoding, External JavaScript file, and EC2 Load Balancing `**

## HTML

### Character Entities
- Create a copy of one of your HTML website files, within the same directory.
- Rename the new file to `website_page4`.
- Open the file in your text editor and add a new paragraph element.
- Use *only* HTMl character entities within the element, to write the following text:
- `<'"> &`
- Save the file and open it in your browser to confirm the text displays as expected.
- If you get stuck, see the related W3 page:
- https://www.w3schools.com/html/html_entities.asp

### URL Encoding
- Read the W3 page about URL encoding, here:
- https://www.w3schools.com/html/html_urlencode.asp
- Next, take the following text and figure out what it decodes to:
- `%3E%20%3C%20%25`

### External JavaScript File, Pt. 1
- Similar to how we created an external CSS file, we will create en external JavaScript file.
- Open a new file in your text editor, and save it as `website.js`.
- Within the file, create a new function called `textChanger`.
- The function should specify document by ID `test1`.
- The function should change the inner HTML to `"This is changed text."`
- Save the file.
- Note: If you get stuck, use the following W3 page...
- https://www.w3schools.com/js/js_whereto.asp

### External JavaScript File, Pt. 2
- Open your `website_page4` file.
- You'll be adding three new elements to the file.
- First add a new paragraph with an `id` set to `test1`, and its text set to `This is original text.`.
- Second add a new button below the new paragraph, which points to your `textChanger()` function.
- The button text should state `textChanger function button`.
- Lastly, add a new script element, which points to your `website.js` file.
- Save your changes, open your `website_page4` file, and ensure the new button works.

## AWS

### EC2 Load Balancing, Pt. 1
- Search 'EC2' in the AWS console (top of screen).
- Navigate to the "Instances" tab and click "Launch instances".
- Select "Number of instances" and enter `2` instances (top right of screen).
- Set the name for both instances to `alb-test-instances`.
- Choose to allow HTTP/HTTPS traffic via new or existing security group.
- Choose to add a new key pair for the instances.
- Scroll down to the "Advanced details" section, and click to expand it.
- Within the "User data" section, paste the following script (without the backtick characters):
`#!/bin/bash`
`yum update -y`
`yum install -y httpd`
`systemctl start httpd`
`systemctl enable httpd`
`echo "<h1>Hello World, from $(hostname -f)</h1>" > /var/www/html/index.html`
- Click "Launch instance" and wait for your instances to finish initializing.
- Lastly, locate the public IP address for one of the instances and navigate to:
- http://<public_IP>/index.html
- You should see a "Hello World" page, along with the private IP of the instance.

### EC2 Load Balancing, Pt. 2
- Search 'EC2' in the AWS console (top of screen).
- Navigate to the "Load Balancers" tab (bottom left).
- Select "Application Load Balancer" from the list.
- Name the ALB `my-test-alb`.
- Under "Network Mapping", click the checkboxes for *all* availability zones.
- For "Security Groups" create or add an existing security group to allow HTTP/HTTPS traffic.
- Under "Listeners and routing" click "Create target group".
- Name the target group `alb-test-group` and click "Next".
- Select the ALB test EC2 instances you created earlier for this exercise.
- Click "Create target group".
- Return to the ALB settings page, and set your target group to the `alb-test-group`.
- Click "Create load balancer".

### Test 1 - ALB Load Balancing
- Search 'EC2' in the AWS console (top of screen).
- Navigate to the "Load Balancers" tab (Bottom left).
- You should see your ALB in the list.
- Note: It may take a minute for the ALB to fully provision.
- Select your ALB and copy the "DNS name" field.
- Paste this URL into a new tab and hit enter.
- You should see the local IP address of the serving EC2 instance.
- Press the F5 key repeatedly and you should see the listed IP address change.
- This means your http application is successfully load balancing between the two instances.

### Test 2 - ALB Health Check
- Search 'EC2' in the AWS console (top of screen).
- Navigate to the "Target Groups" tab (Bottom left).
- Click your ALB from the list.
- Under the "Targets" tab, select one of the EC2 instances and navigate to the EC2 settings page.
- Click the "Instance State" drop-down menu and select "Stop instance".
- Return to the "Target Groups" tab and select your ALB from the list.
- Click the "Details" tab and make sure you have `1` "healthy" instance and `1` "unused" instance.
- Note: It may take a minute for the health checks to complete.
