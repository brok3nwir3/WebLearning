**`Week 27 - JavaScript JQuery; AWS TBD`**

## JavaScript

### Question 1 - JQuery Find Element by ID
- *W3 Schools Reference: https://www.w3schools.com/js/js_jquery_selectors.asp*
- *JQuery offers several benefits when working with JavaScript, including concise code and improved browser compatibility.*
  - *HTML*
- Create a new HTML file or copy one of your website HTML files, and name it `wk27.html`.
- At the top of your document, before the `body` element, create a `head` element.
- Within `head` element, add an empty `script` element pointing to: `src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"`
- Below the `head` element, add a `body` element and two `paragraph` elements within.
- Have the first `paragraph` element filled with text `Hello world!` and set the ID to `id="Q1"`.
- Have the second `paragraph` element empty and set the ID to `id="demo"`.
- Next, add a `script` element at the bottom of the `body` element, below the `paragraph` elements.
- Have the `script` element empty and set the soruce to `src="wk26.js"`.
- Save the HTML file.
  - *JavaScript*
- Create a new JavaScript file, name it `wk27.js`, and open it.
- Within the JavaScript file, you can copy the following javascript code:
```
$(document).ready(function() {
  var myElements = $("#Q1");
  $("#demo").text("The text from the Q1 paragraph element is: " + myElements[0].innerHTML);
});
```
- Save the file, and open it in your browser.
- Check if your code is correctly displaying *two* lines of text.
- Discuss with a classmate how jQuery simplifies the process of accessing HTML elements.

### Question 2 - JQuery Set HTML Content
- *W3 Schools Reference: https://www.w3schools.com/js/js_jquery_elements.asp*
  - *HTML*
- Open your `wk27.html` file.
- Below your empty second `paragraph` that's set to `id="demo"` create a new `paragraph` element.
- Fill the new `paragraph` element with the text `Text to replace.` and set the ID to `id="Q2"`.
- Save the HTML file.
  - *JavaScript*
- Open your `wk27.js` file, and copy the following javascript code:
```
$(document).ready(function() {
  $("#Q2").html("<p>Text overwritten!</p>");
});
```
- Save the file, and open it in your browser.
- Check if your code is correctly displaying the replacement line of text.
- Discuss with a classmate how jQuery simplifies the process of manipulating HTML elements.

## AWS

### Trusted Advisor Prerequisites
- Start by logging into your AWS account and navigating the to "EC2" dashboard.
- Click the "Security Groups" tab (left of screen).
- First, create a new security group named "outbound-allow-all".
- Add a new outbound rule to the security group that allows all traffic outbound (Type: All Traffic, Destination: 0.0.0.0/0).
- Second, create a new security group named "inbound-allow-ssh".
- Add a new inbound rule to the security group that allows SSH traffic inbound (Type: SSH, Source: 0.0.0.0/0).
- Next, start the process of launching a new EC2 instance.
- Name the instance "insecure-test-ec2" and set the security group to "inbound-allow-ssh".
- Leave all other settings to their defaults, and launch the instance.

### Trusted Advisor Recommendations
- *Note: Trusted Advisor is an AWS administractive and reporting service that lets you identify potential account or resource issues.*
- Navigate to the "Trusted Advisor" dashboard.
- Review the "Recommendations" tab, and look for a red "Action recommended" item; and if needed, click "Refresh all checks".
- Eventually you should see a recommendation titled "Security Groups - Specific Ports Unrestricted".
- Click the "Info" button next to the "Actions recommended;" this will display a detailed explanation of the issue.
- Within the detailed explanation you should see any problematic resources listed (the "inbound-allow-ssh" security group in this case).
- To fix the issue, return to your "insecure-ec2-test" instance, then select "Actions" > "Security" > "Change security groups".
- Remove the "inbound-allow-ssh" security group, and then add the "outbound-allow-all" security group.
- Next, return to the "Security Groups" tab within the EC2 page.
- Find the "inbound-allow-ssh" security group and delete it.
- Lastly, return to the Trusted Advisor page, and ensure the problematic resource is no longer listed.

### Trusted Advisor Service Limits
- Navigate to the "Trusted Advisor" dashboard.
- Click the "Service limits" tab (on the left).
- Scroll through the page, and review the service limits that AWS automatically set for your account.
- Identify the service limits for IAM Users, EC2 On-Demand Instances, and VPC.
- Discuss your findings with a classmate.

## Important Note
- Ensure you disable or delete all newly created test/lab resources.
