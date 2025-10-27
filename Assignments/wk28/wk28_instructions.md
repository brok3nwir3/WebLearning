**`Week 28 - JavaScript Classes & Class Methods; AWS EventBridge`**

## JavaScript

### Question 1 - Working w/ Classes
- *W3 Schools Reference: https://www.w3schools.com/js/js_classes.asp*
- *Note: A JavaScript class is not an object; It's a template for JavaScript objects.*
  - *HTML*
- Create a new HTML file or copy one of your website HTML files, and name it `wk28.html`.
- Add a `body` element and a `paragraph` element within.
- Have the `paragraph` element set the ID to `id="Q1"`.
- Next, add a `script` element at the bottom of the `body` element, below the `paragraph` element.
- Have the `script` element empty and set the source to `src="wk28.js"`.
- Save the HTML file.
  - *JavaScript*
- Create a new JavaScript file, name it `wk28.js`, and open it.
- Within the JavaScript file, create a new class called `Seagull`.
- Create a constructor within the class, which includes properties `name` and `age`.
- Next, use the constructor to create `seagull1` and `seagull2`.
- For `seagull1` set the name to "Sally" and the age to "1".
- For `seagull2` set the name to "Alfred" and the age to "4".
- Lastly, add a getElementById statement to display the names of *both* seagull objects.
- Save the file, and open it in your browser.
- Check if your code is correctly displaying the names successfully.

### Question 2 - Additional Class Methods
- *W3 Schools Reference: https://www.w3schools.com/js/js_classes.asp*
  - *HTML*
- Open your `wk28.html` file.
- Add a second `paragraph` element below your first one, with the ID set to `id="Q2"`.
- Save the HTML file.
  - *JavaScript*
- Open your `wk28.js` file.
- Within the JavaScript file, update your `Seagull` class to include a new method called `squawk`.
- The new method should return the given seagulls name, plus `" says: 'Squawk!'"`.
- Lastly, add a getElementById statement that populates the `Q2` ID.
- The Q2 text should  produce the following output...
```
"You pet the seagulls.
Sally says: 'Squawk!'
Alfred says: 'Squawk!'"
```
- Save the file, and open it in your browser.
- Check whether your code is correctly displaying the text.

## AWS

### EventBridge Prep
- First start by reading the short AWS documenation regarding EventBridge, here...
- *https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-what-is.html*
- Next, login to AWS and navigate to the S3 page.
- Click on "Create bucket".
- Name the bucket `eventbridge-test-bucket-123123`, you'll need to append slightly different numbers to be globally unique.
- Leave all other bucket settings as default, and click "Create bucket".
- Next, navigate to the Lambda service page in the AWS console.
- Click on Create function, and choose "Author from scratch".
- Set the function name to `test-S3-event-handler`.
- For runtime select the latest version of Python.
- Click "Create function".
- After the function is created, scroll down to the "Code" tab, and paste in the following code...
```
import json

def lambda_handler(event, context):
    print("Event received:", json.dumps(event, indent=2))
    return {
        'statusCode': 200,
        'body': json.dumps('Event processed successfully!')
    }
```
- Lastly, click the "Deploy" button.

### EventBridge Rule
- Start by navigating to the EventBridge service in the AWS console.
- Click on "Rules" on the left panel (under "Buses").
- Click the "Create rule" button.
- Name the rule `s3-object-upload-rule` and click "Next".
- Under "Build event pattern", select "Custom event pattern".
- Copy the following pattern to match S3 object uploads...
```
{
  "source": ["aws.s3"],
  "detail-type": ["AWS API Call via CloudTrail"],
  "detail": {
    "eventSource": ["s3.amazonaws.com"],
    "eventName": ["PutObject"]
  }
}
```
- Click "Next" to move to the "Target" section.
- Select "Lambda function" from the target drop-down menu.
- Choose the function created earlier: `test-S3-event-handler`.
- Click "Next" and "Create rule".
- Next, return to your S3 bucket.
- Click on the "Upload" button, and upload any small file.
- Lastly, return to the "Monitor" tab of your Lambda function.
- Check the CloudWatch Logs to see if the event was processed successfully.

## Important Note
- Ensure you disable or delete all newly created test/lab resources.
