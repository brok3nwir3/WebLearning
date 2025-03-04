**`Week 5 - HTML Hyperlinks, Intro to VPCs, and Launch Templates`**

## HTML

### Hyperlinks
- Open your HTML website file.
- Add a hyperlink to the bottom of your file, linking the following website:
- https://en.wikipedia.org/wiki/Hyperlink
- Add the text "Hyperlink to Hyperlink" as the hyperlink text.
- Save the changes and open your HTML file in your browser, to review the changes.

### Hyperlinks Pt.2
- Add a condition to your hyperlink to ensure a new tab is opened, rather than visiting the link in the same tab.
- Next, update the existing URL, to instead be the file path to your animal image.
- Update the hyperlink text to say, "Animal Image".
- Save the changes and open your HTML file in your browser, to review the changes.
- What do you notice when you hover over your hyperlink text? Why might this be good or bad?
- Share your thoughts with the class.

### Hyperlinks Pt.3
- Visit the following page:
- https://www.w3schools.com/html/html_links.asp
- Next, hit F12 to open the developer console.
- Click the "Elements" tab to view the HTML content for the page.
- Explore the elements and try to identify the name of the green W3 image file.
- Discuss your findings with the class.

### Hyperlinks Pt. 4
- Create a copy of your HTML website file, within the same directory.
- Rename the original file to `website_home` and rename the new file to `website_page2`.
- Edit the hyperlinks within both files, linking the home page to page2 and vice versa.
- Remove any element code that directs clicks to a new tab (i.e. use default behavior).
- Update the hyperlink text to say "Home" or "Page2", where appropriate.
- Save the changes and open your HTML file in your browser, to review the changes.
- Demonstrate your changes with the class.


## AWS

### Intro to VPCs
- Search 'EC2' in the AWS console (top of screen).
- Select one of your EC2 instances. If none are running, launch a new one.
- Under the "Networking" tab for the instance, click the "VPC ID" link (top right).
- Note: This will take you to your list of VPCs, which are automatically assigned when launching an instance.
- Examine the "IPv4 CIDR" for your VPC, then confirm your EC2 instance has a private IPv4 addres within that CIDR block.
- Next, click the "Tags" tab, and add the tag "coding-hour".
- Lastly, click the "Resource Map" tab, and open the "Route tables" link.
- Review the routes enabled by default for your VPC.

### EC2 Launch Template
- Search 'EC2' in the AWS console (top of screen).
- Click the "Launch Templates" option, under the "Instances" tab (left of screen).
- Click the "Create Launch Template" button.
- Give the launch template a name, like "test-website-template".
- Select a "Amazon Linux 2 AMI (HVM)" (64-bit x86 architecture); this is available under the "Quick Start" tab.
- Choose an instance type of t2.micro .
- Create a new key-pair called "test-website-key".
- Create a new security group called "allow-all-http" that allows all inbound traffic over port 80 and 443.
- Add the "coding-hour" resource tag.
- Expand the "Advanced Details" tab, scroll to the bottom, to the "User data" section.
- Add the following script, within the text box (without the backtick characters):
`#!/bin/bash`
`yum update -y`
`yum install -y httpd`
`systemctl start httpd`
`systemctl enable httpd`
`echo "<h1>Hello World, from $(hostname -f)</h1>" > /var/www/html/index.html`
- Click "Create launch template".
- Next, select your launch template and click the action "Launch instance from template".
- Click "Launch instance" and wait for your instance to finish initializing.
- Lastly, locate the public IP address for your instance and navigate to:
- http://<public_IP>/index.html
- You should see a "Hello World" page, along with the private IP of the instance.
