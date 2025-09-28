**`Week 25 - JavaScript HTML DOM Methods & Document Objects; AWS TBD`**

## JavaScript

### Question 1 - Identifying HTML DOM Methods & Properties
- *W3 Schools Reference: https://www.w3schools.com/js/js_htmldom_methods.asp*
- We've been using DOM methods and properties for a while, but we haven't really acknowledged that fact until now. 
- Examine the following code...
```html
<!DOCTYPE html>
<html>
<body>

<h2>Test Page</h2>

<p id="item1"></p>

<script>
document.getElementById("item1").innerHTML = "TEST! TEST!";
</script>

</body>
</html>
```
- Use the reference link (above) to identify the DOM *method* and the DOM *property*.
- Discuss your findings with a classmate before moving on.

### Question 2 - Creating Elements with HTML DOM
- *W3 Schools Reference: https://www.w3schools.com/js/js_htmldom_document.asp*
  - *HTML*
- Create a new HTML file or copy one of your website HTML files, and name it `wk25.html`.
- Add an empty heading #2 element, with the text "My favorite fruits:"
- Next, add a new unordered list element, with the ID set to `Q2`.
- Lastly, add a script element and set the source attribute to `wk25.js`.
- Save the HTML file.
  - *JavaScript*
- Create a new JavaScript file, name it `wk25.js`, and open it.
- Within the JavaScript file, initialize a new variable called `newListItem`.
- Use the DOM reference page (above) to set `newListItem` to create a new document *list item* element.
- Next, use `newListItem.textContent = "Apple";` to add "Apple" (or whatever fruit you like) to the list.
- Lastly, use DOM to *get* your `Q2` element by ID, and then use the `appendChild` command to add your favorite fruit to the unordered list.
- Save the file, and check if your code is displaying the unordered list with the fruit item.

### Question 3 - TBD
- *W3 Schools Reference: https://www.w3schools.com/js/js_htmldom_document.asp*
  - *HTML*
- Create a new HTML file or copy one of your website HTML files, and name it `wk25.html`.
- Add an empty heading #2 element, with the text "My favorite fruits:"
- Next, add a new unordered list element, with the ID set to `Q2`.
- Lastly, add a script element and set the source attribute to `wk25.js`.
- Save the HTML file.
  - *JavaScript*
- Create a new JavaScript file, name it `wk25.js`, and open it.
- Within the JavaScript file, initialize a new variable called `newListItem`.
- Use the DOM reference page (above) to set `newListItem` to create a new document *list item* element.
- Next, use `newListItem.textContent = "Apple";` to add "Apple" (or whatever fruit you like) to the list.
- Lastly, use DOM to *get* your `Q2` element by ID, and then use the `appendChild` command to add your favorite fruit to the unordered list.
- Save the file, and check if your code is displaying the unordered list with the fruit item.

## AWS

### TBD
- Log into the AWS web console, search "aws config" in the search bar, and navigate to the page.
- Read the description and information about AWS Config. 
- Click on "1 Click Setup" option and complete the setup.
- After completing the setup, you should be redirected to the AWS Config Dashboard.
- Review the dashboard modules.
- Next, click the "Settings" tab (on the left).
- You should see the name of an S3 bucket used by AWS Config, under the section titled "S3 bucket name."
- Open a new tab for S3, and review the details for the bucket AWS Config bucket.
- Empty and delete the bucket.
- Return to the AWS Config browser tab, and navigate to the "Settings" tab.
- Click "Stop Recording."

### TBD
- 

## Important Note
- Ensure you disable or delete all newly created test/lab resources.
