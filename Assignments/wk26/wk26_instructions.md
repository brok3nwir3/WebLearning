**`Week 26 - JavaScript TBD; AWS Trusted Advisor`**

## JavaScript

### Question 1 - Identifying HTML DOM Methods & Properties
- *W3 Schools Reference: https://www.w3schools.com/js/js_htmldom_methods.asp*
- We've been using DOM methods and properties for a while, but we haven't really acknowledged that fact until now. 
- Examine the following code...
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Simple Example</title>
</head>
<body>
    <h1 id="title">My Simple Page</h1>
    <p>This is a paragraph.</p>
    <p>This is another paragraph.</p>
    <button onclick="highlightParagraphs()">Highlight Paragraphs</button>
    <button onclick="changeTitle()">Change Title</button>

    <script>
        function highlightParagraphs() {
            var paragraphs = document.getElementsByTagName('p');
            for (var i = 0; i < paragraphs.length; i++) {
                paragraphs[i].style.backgroundColor = 'yellow'; // Highlight each paragraph
            }
        }

        function changeTitle() {
            var title = document.getElementById('title');
            title.textContent = 'New Title!'; // Change the title text
        }
    </script>
</body>
</html>
```
- Use the reference link (above) to identify the DOM *methods* and the DOM *properties*.
- Discuss your findings with a classmate before moving on.

### Question 2 - Creating Elements with HTML DOM
- *W3 Schools Reference: https://www.w3schools.com/js/js_htmldom_document.asp*
  - *HTML*
- Create a new HTML file or copy one of your website HTML files, and name it `wk25.html`.
- Add an empty heading #2 `<h2>` element, with the text "My favorite fruits:"
- Next, add a new unordered list `<ul>` element, with the ID set to `Q2`.
- Lastly, add a script element and set the source attribute to `wk25.js`.
- Save the HTML file.
  - *JavaScript*
- Create a new JavaScript file, name it `wk25.js`, and open it.
- Within the JavaScript file, initialize a new variable called `newListItem`.
- Use the DOM reference page (above) to set `newListItem` to create a new document list item `<li>` element.
- Next, use `newListItem.textContent = "Apple";` to add "Apple" (or whatever fruit you like) to the list.
- Lastly, use DOM to *get* your `Q2` element by ID, and then use the `appendChild` command to add your favorite fruit to the unordered list.
- Save the file, and check if your code is displaying the unordered list with the fruit item.

### Question 3 - Using HTML DOM to Find an Object
- *W3 Schools Reference: https://www.w3schools.com/js/js_htmldom_document.asp*
  - *HTML*
- Open your HTML file; `wk25.html`.
- Add another empty heading #2 `<h2>` element, with the text "Current Page URL:"
- Next, add a new paragraph `<p>` element, with the ID set to `Q3`.
- Save the HTML file.
  - *JavaScript*
- Open your JavaScript file; `wk25.js`.
- Within the file, initialize a new variable called `currentURL`.
- Use the DOM reference page (above) to set `currentURL` equal to the current HTML document URL.
- Next, use DOM to *get* your `Q3` element by ID, and then use the `textContent` command to display `currentURL`.
- Save the file, and check if your code is displaying the URL path for your HTML file.

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
