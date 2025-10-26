**`Week 26 - JavaScript Arrow Functions & Performance Testing; AWS Trusted Advisor`**

## JavaScript

### Question 1 - Using Arrow Functions
- *W3 Schools Reference: https://www.w3schools.com/js/js_arrow_function.asp*
- *Arrow functions are sometimes shorter and quicker to write, than a typical function.*
  - *HTML*
- Create a new HTML file or copy one of your website HTML files, and name it `wk26.html`.
- Add a `body` element and a `paragraph` element within.
- Have the `body` element point to `id="Q1"`.
- Add a `script` element within the `body` element, below the `paragraph` element.
- Have the `script` element point to `src="wk26.js"`. 
- Save the HTML file.
  - *JavaScript*
- Create a new JavaScript file, name it `wk26.js`, and open it.
- Within the JavaScript file, you can copy the following JavaScript code:
```
function add(a, b) {
    return a + b;
}

function isEven(num) {
    return num % 2 === 0;
}

document.getElementById("Q1").innerHTML = "Add function (1+2): " + add(1, 2) + "<br>Even check function (7): " + isEven(7);
```
- Open the  `wk26.html` HTML file and ensure the contents are displaying correctly.
- Next, read the arrow function reference page (above).
- Lastly, rewrite the `add()` function and the `isEven()` function to be arrow functions.
- Save the file, and check if your code is displaying the unordered list with the fruit item.

### Question 2 - JavaScript Performance
- *W3 Schools Reference: https://www.w3schools.com/js/js_performance.asp*
- *Given the same program can be written many ways, it's important to run performance tests on your programs.*
  - *HTML*
- No changes required.
  - *JavaScript*
- Open your `wk26.js` file, and copy the following javascript code:
```
// Timing the for loop
console.time("For Loop Time");
let sum1 = 0;
for (let i = 1; i <= 1000000; i++) {
    sum1 += i;
}
console.timeEnd("For Loop Time"); // Outputs the time taken for the for loop

// Timing the while loop
console.time("While Loop Time");
let sum2 = 0;
let i = 1;
while (i <= 1000000) {
    sum2 += i;
    i++;
}
console.timeEnd("While Loop Time"); // Outputs the time taken for the while loop
```
- Save the file, and then launch the HTML file in a new browser tab.
- Open the developer console and review the performance times.
- Next, add a zero to the number of iteractions both the loops use (1,000,000 > 10,000,000).
- Refresh the webpage and check the console output again.
- Discuss your findings with a classmate.

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
