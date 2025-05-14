**`Week 12 - JavaScript Output, Variables, Concatenation, `**

## JavaScript

### Misc. Output, Pt.1
- Create a new HTML file or copy of one of your website HTML files.
- Add a new JavaScript element to your file.
- Within the new element, add a `console.log()` method.
- Use this method to calculate `30 / 6 + 6` .
- Save the file.
- Open your webpage in a new tab, then open the developer tools for the page.
- Check the calculation output in the console tab.

### Misc. Output, Pt.2
- Open the HTML file from the previous exercise.
- Add a new button element to the file.
- Insert text stating `Click to print` .
- Within the new element, add an `onclick` attribute, set to the `window.print()` method.
- Save the file and open your webpage in a new tab.
- Click the button and confirm the print menu opens.

### Variables
- Open the HTML file from the previous exercise.
- At the top of your JavaScript element, add `let x, y;`
- Then declare `x` as 30 and `y` as 6.
- Update the calculation to use the variables.
- Save the file.
- Open your webpage in a new tab, then open the developer tools for the page.
- Check the calculation output in the console tab.

### Comments & Concatenation
- Open the HTML file from the previous exercise.
- Declare a new variable called `myString` and set its value to "5".
- Update the existing calculation to add `myString` at the start, i.e. `myString +`
- Next, add a comment somewhere in the JavaScript element.
- The comment should display your guess for what the calculation result will be.
- Open your webpage in a new tab, then open the developer tools for the page.
- Check the calculation output in the console tab.
- Discuss the result with the class.


## AWS

### Create a VPC
- Note: This exercise is based on exercise 4.1 from the textbook.
- Search 'VPC' in the AWS console (top of screen).
- Click the "Create a VPC" button.
- Select "VPC Only" from the menu.
- Set the name to: "my-test-vpc"
- Set the IPv4 CIDR to: 172.16.0.0/16
- Leave all other settings to their defaults.
- Click "Create VPC".
- From the VPC dashboard (left of screen), click "Your VPCs".
- Ensure the new VPC was created, and shows up in the list.

### Add a New VPC CIDR
- Search 'VPC' in the AWS console (top of screen).
- From the VPC dashboard (left of screen), click "Your VPCs".
- Click VPC ID to navigate to the VPC details page.
- Click the "CIDRs" tab.
- Click "Edit CIDRs".
- Click "Add new IPv4 CIDR".
- Enter the following CIDR: 172.12.0.0/16
- If the status says "Associated" you're done.

### Add a New VPC Subnet
- Note: This exercise is based on exercise 4.2 from the textbook.
- Search 'VPC' in the AWS console (top of screen).
- From the VPC dashboard (left of screen), click "Subnets".
- Click "Create subnet".
- SElect your test VPC ID. 
- Name the subnet: my-test-subnet
- Set the availability zone to any from your region.
- Choose this VPC CIDR block: 172.16.0.0/16
- Enter this subnet CIDR block: 172.16.100.0/16
- Click "Create subnet".

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
