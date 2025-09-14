**`Week 24 - JavaScript Switches & Regular Expressions; AWS TBD`**

## JavaScript

### Question 1 - Create a Switch Statement
- *This question is based on the game here: https://www.w3schools.com/graphics/game_components.asp.*
  - *HTML*
- Create a new HTML file or copy of one of your website HTML files, and name it `wk22.html`.
- Inside the HTML file, add a link to a file called `wk22.css`.
- Next, add an `onload` parameter to the body element, and point it to the function `"startGame()"`.
- Lastly, add a script element and add the source attribute set to `wk22.js`.
- Save the HTML file.
  - *CSS*
- Create a new CSS file or copy of one of your website CSS files, and name it `wk22.css`. 
- Open your `wk22.css` file.
- Add a style section for `canvas` elements.
- Set the `border` to two pixels, type solid, and color #174680.
- Set the `background-color` to #acb1af.
- Save the CSS file.
  - *JavaScript*
- Create a new JavaScript file, name it `wk22.js`, and open it.
- Within the JavaScript file, initialize a variable named, `myGameArea`.
- Set the `myGameArea` definition equal to the following properties:
```
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}
```
- Next, create a new function to start the game, called `startGame()`.
- Within `startGame` call `myGameArea.start();`.
- Save the file, and check if your canvas (game area) is displaying correctly.

### Question 2 - Adding an Object to the Canvas
- *This question is based on the game here: https://www.w3schools.com/graphics/game_components.asp.*
  - *HTML*
- No changes.
  - *CSS*
- No changes.
  - *JavaScript*
- Open `wk22.js`.
- Within the JavaScript file, initialize a variable named, `myGamePiece`.
- Next, create a function called `component`, which takes five parameters: `width`, `height`, `color`, `x`. `y`.
- Within `component` add the following:
```
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
```
- Lastly, we'll use our `myGamePiece` variable and our `component` function to create an actual game piece *object*.
- Within the `startGame()` function, add a new line to set `myGamePiece` to be a `new component`, with the properties:
- width `30`, height `30`, color `"red"`, X position `10`, and Y position `120`.
- Save the file, and check if your new object is displaying correctly.

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
