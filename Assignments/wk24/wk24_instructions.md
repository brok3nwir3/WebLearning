**`Week 24 - JavaScript Switches & Regular Expressions; AWS TBD`**

## JavaScript

### Question 1 - Create a Switch Statement
- *W3 Schools Reference: https://www.w3schools.com/js/js_switch.asp*
  - *HTML*
- Create a new HTML file or copy of one of your website HTML files, and name it `wk24.html`.
- Next, add an empty paragraph element, with an ID set to `Q1`
- Lastly, add a script element and set the source attribute to `wk24.js`.
- Save the HTML file.
  - *JavaScript*
- Create a new JavaScript file, name it `wk24.js`, and open it.
- Within the JavaScript file, initialize a variable named, `day`.
- Next, create a `switch` statement that accounts for *seven* different *cases*.
- Within the switch *expression* you should call `new Date().getDay()`, to get the current date.
- Then, within each case, you check the current value of the `day` parameter.
- Lastly, create a `getElementById` statement that returns the current day.
- Save the file, and check if your code is displaying the expected day.

### Question 2 - Searching with Regular Expressions
- *W3 Schools Reference: https://www.w3schools.com/js/js_regexp.asp*
  - *HTML*
- Continuing in your `wk24.html` file...
- Add a new empty paragraph element, with an ID set to `Q2`
- Save the HTML file.
  - *JavaScript*
- Continuing in your `wk24.js` file...
- Within the JavaScript file, initialize a variable named, `text` and set it to the value `"Coding Hour!";`.
- Next, initialize a variable called `a` and set it `text.search(/Hour!/i);`.
- Next, initialize a variable called `b` and set it `text.search(/Hour/i);`.
- Next, initialize a variable called `c` and set it `text.search(/Hrrr/i)`.
- Lastly, create a `getElementById` statement that returns `"first " + a + " | second " + b + " | third " + c;`.
- Save the file, and review the results.
- Discuss your findings with a classmate.

### Question 3 - Adding an Object to the Canvas
- *W3 Schools Reference: https://www.w3schools.com/js/js_regexp.asp*
  - *HTML*
- Continuing in your `wk24.html` file...
- Add a new empty paragraph element, with an ID set to `Q2`
- Save the HTML file.
  - *JavaScript*
- Continuing in your `wk24.js` file...
- Within the JavaScript file, initialize a variable named, `text` and set it to the value `"Coding Hour!";`.
- Next, initialize a variable called `a` and set it `text.search(/Hour!/i);`.
- Next, initialize a variable called `b` and set it `text.search(/Hour/i);`.
- Next, initialize a variable called `c` and set it `text.search(/Hrrr/i)`.
- Lastly, create a `getElementById` statement that returns `"first " + a + " | second " + b + " | third " + c;`.
- Save the file, and review the results.
- Discuss your findings with a classmate.

## AWS

### Create an S3 Bucket (to be used w/ Lambda)
- *Note: This exercise, and the following, will be used to create a Lambda that alerts on each new file upload.*
- Log into the AWS web console, search "S3" in the search bar, and navigate to the page.
- Click the "General purpose buckets" tab on the left, and then click the "Create bucket" button.
- Name the bucket `lambda-bucket-yourname-1234` (or something similar).
- Click "Create bucket".

### Create a Lambda Function
- Log into the AWS web console, search "Lambda" in the search bar, and navigate to the page.
- On the right side of the screen, click "Create a function".
- Select the "Author from scratch" radio button.
- Name the Lambda `lambda-test`.
- Search "Python" in the Runtime filter, and select the latest version.
- Leave all other settings to their defaults.
- Click the "Create function" button; This will take you to the function dashboard.
- Scroll down to the code editor, and paste the following code:
```
import json

def lambda_handler(event, context):
    # Log the event
    print("Received event: " + json.dumps(event, indent=2))
    
    # Get the bucket name and file name from the event
    bucket = event['Records'][0]['s3']['bucket']['name']
    file_key = event['Records'][0]['s3']['object']['key']
    
    # Process the file (e.g., log the file name)
    print(f"New file added: {file_key} in bucket: {bucket}")
    
    return {
        'statusCode': 200,
        'body': json.dumps('File processed successfully!')
    }
```
- This code will log any time a new file has been uploaded to the target bucket.
- Next, scroll back up to the top and click the button to "Add trigger".
- Search for "S3" and select it as the trigger source.
- You should see "All object create events" selected by default.
- Add a "Prefix" requirement of `test-image-`.
- Click the orange "Add" button.

### Set Lambda IAM Permissions
- Log into the AWS web console, search "IAM" in the search bar, and navigate to the page.
- Click the "Roles" tab on the left.
- Search "lambda-test" and you should see a role for the previously created Lambda function.
- Click the role.
- Click the "Add permissions" drop-down menu (right of screen) and select "Attach policies".
- Search for and attach the "AmazonS3ReadOnlyAccess" policy to allow the Lambda function to read from the S3 bucket.

### Lambda Testing
- Open a browser tab for the S3 bucket.
- Open a second browser tab for CloudWatch.
- Open a third browser tab for Google, and download three image files; these can be cat pictures or something.
- For each of the image, rename them so that one image is `test-image-1`, another is `non-matching-image`, and the last is `test-image-2`.
- Next, go to the CloudWatch browser tab and click the "Log Groups" tab (left of screen).
- Find the log group for your lambda function; it should have the name `/aws/lambda/lambda-test`.
- Click the log group, then under the "Log streams" tab, click the link to the Log Stream.
- Note the events (if any) that are in the log stream.
- Next, switch to your S3 bucket browser tab.
- Upload `test-image-1`, then switch back to the CloudWatch browser tab and hit the refresh icon.
- You should see some new logs.
- Lastly, upload the other images one at a time, and then review the new logs in CloudWatch.
- Discuss your observations with a classmate.

## Important Note
- Ensure you disable or delete all newly created test/lab resources.
