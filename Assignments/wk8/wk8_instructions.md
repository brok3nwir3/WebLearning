**`Week 8 - HTML Favicon, Tables, and AWS S3`**

## HTML

### Favicon
- Use a search engine to find a small `.ico` or `.png` image on an animal.
- Save the image to your website folder.
- Add code to your `head` element to include the new favicon image.
- Save the changes, open your HTML file in your browser, and review the changes.

### Page Title Update
- Now that you have a favicon for your pages, let's update the page titles.
- Update the titles so you have "Home" and "Page 2"
- Save the changes, open your HTML file in your browser, and review the changes.

### Page 3 Creation
- Create a new "Page 3" HTML file for your website.
- Make sure the page has the correct title.
- Add your favicon to page 3.
- Make sure the new page has a link to return to your home page.
- On your home page, create a link to your new page 3 file.
- Save the changes, open your HTML file in your browser, and review the changes.

### Page 3 Table
- Add the following style block to page 3:
`<style>`
`table, th, td {`
`  border:1px solid black;`
`}`
`</style>`
- Next, create a table for "Page 3" with a `style` width of `100%`
- Add the relevent lines of code to have at *four* rows and *two* columns (4x2).
- Add text to each table cell, to match the cell position, for example "1A", "1B", etc.
- Save the changes, open your HTML file in your browser, and review the changes.
- Lastly, test what happens when you edit the style block to use `4px`, also try deleting `th`.

## AWS

### S3 Intro
- Watch the short AWS S3 intro video here:
- https://youtu.be/_I14_sXHO8U?feature=shared
- The video mentions that Capital One determined they can, "operate more securely" with AWS.
- Discuss with the class why this might be.

### Creating a Private S3 Bucket
- Search 'S3' in the AWS console (top of screen).
- Click "Create bucket".
- Enter a name for the bucket, like "coding-hour-bucket-X", where X is some number/s.
- Add a "coding-hour" tag to the bucket.
- Leave all other settings to their defaults.
- Note: The bucket should be set to private by default.
- Click "Create bucket".

### IAM Policy Update (Add S3 Read)
- Search 'IAM' in the AWS console (top of screen).
- Click the 'Policies' tab (left side of screen).
- Search for 'ReadOnlyAdmin' and click the policy.
- Click the 'JSON' button.
- Click the 'Edit' button.
- Copy and paste in the contents of the ReadOnlyAdmin.json file from the wk8 folder.
- Click 'Next'.
- Click 'Save changes'.

### Adding S3 Bucket Files
- Search 'S3' in the AWS console (top of screen).
- Click your bucket.
- Find and download an image file from the Internet.
- Return to your bucket and click "Upload".
- Drag and drop your image file into the bucket, and click "Upload".
- Alternatively, you can click "Add files" and select a file to upload from a directory.

### Test Your Bucket (Console Navigation)
- Have your classmates log into your AWS account, with their ReadOnlyAdmin access.
- Ask them to them to access your coding-hour bucket and tell you what image is in the bucket.
- Repeat the same steps yourself, and tell them what is in their bucket.

### Test Your Bucket (Direct URL)
- Search 'S3' in the AWS console (top of screen).
- Click your bucket.
- Click the image file.
- Click "Open".
- This should open a new tab to the image, and provide you with a URL to share.
- Share the link with a classmate, and have them test their access.
- Note: Your classmate will need to be logged into their ReadOnlyAdmin user.

### Test You Bucket Privacy
- Search 'S3' in the AWS console (top of screen).
- Click your bucket.
- Click the image file.
- Under the "Properties", click "Object URL".
- This should result in an "Access Denied" error message.
- If this is true, then your bucket is correctly set to private.
- Next, compare the URL for "Open" versus the URL for "Object URL".
- Discuss with a classmate why one URL allows access, and the other does not.
