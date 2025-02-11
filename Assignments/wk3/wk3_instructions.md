**`Week 3 - HTML Headings, Paragraphs, Styles, and AWS Billing.`**

## HTML

### Heading Size
- Open your HTML website file.
- Update the existing heading to use a new size.

### Paragraphs
- Open your HTML website file.
- Add a new paragraph (preformatted) element that retains spaces and line breaks.
- Add text that demonstrates the abilities of the new element.

### Style
- Open your HTML website file.
- Add a style to your body element, to change the background color.
- Add a style to your paragraph element, to change the font.
- Add a style to your paragraph element, to align the text to the center.

### Formatting
- Open your HTML website file.
- Add underlining to one of the words on your page, within your paragraph element.


## AWS

### EC2 SSH - Console Instance Connect
- Search 'EC2' in the AWS console (top of screen).
- Click the 'instances' button, under the resources menu (center of screen).
- Click the checkbox of an instance.
- Click 'connect' option (above the instance).
- This should take you to the 'EC2 Instance Connect' menu.
- Click 'Connect'.
- You should now be logged into your EC2 instance.
- Try running a few commands, like: whoami, ping google.com, ls, etc.

### EC2 SSH - Terminal From Local Host
- For this exercise you'll need a copy of your EC2 instance key.
- Note: If you did not save your first key, then simply create a new instance and a new key.
- Open your terminal and change directory (cd) to the same directory your key is located.
- Update the permissions for your key file using: chmod 0400 test-key.pem
- Visit this page to see what the previous command did: https://chmodcommand.com/chmod-0400/
- Now SSH to your instance using the following command: ssh -i <keyfile>.pem ec2-user@<IPaddress>
- You should now be logged into your EC2 instance.
- Try running a few commands, like: whoami, ping google.com, ls, etc.
- Note: If you created a new instance and key, make sure to delete them at the end of this exercise.

### Billing Budget
- Log into AWS with your root account.
- Search 'Billing and Cost Management' in the AWS console (top of screen).
- Scroll down to 'Budgets and Planning,' then click the 'Budgets' tab (left side of screen).
- Click 'Create a budget'.
- By default a budget template for 'Zero spend' should be selected.
- Add a budget name, like 'My Zero Spend Budget'.
- Add an email recipient.
- Click 'Create budget'.
- You now have a budget that will alert you if your account is charged any amount money.
- Note: If you are not a free-tier user, repeat these steps, but select the 'Monthly cost budget' template.

### Cost Explorer
- Search 'Billing and Cost Management' in the AWS console (top of screen).
- Click the 'Cost Explorer' tab (left side of screen).
- Click the 'Date Range' in the 'Report Parameters' section (right side of screen).
- Click 'More' under the options for 'Past:' and select '1 Year'.
- Click 'Apply' to view the results.
- Click the side-by-side bar icon, to adjust the graph view (top right of the graph).
- Click the 'Date Range' in the 'Report Parameters' section (right side of screen).
- Click '+ 12 Months' under the options for 'Future:'.
- Note: You may see a pop-up about enabling forecasting. This is normal. Click 'enable'.

### Always FREE Offerings
- Navigate to: https://aws.amazon.com/free
- Use the checkbox filter to select 'Always Free' (left side of screen).
- Scroll through the list and review the offerings.
- Note: We will be utilizing several of these offerings in the coming months.
