**`Week 9 - HTML  Classes, ID Attribute, Iframes, Javascript Buttons, S3: Versioning, Replication, & Storage Classes`**

## HTML

### Classes
- Open the CSS file for your website.
- Add a new class called `myclass`.
- Set a background color of `steelblue`.
- Set a text color of `snow`.
- Set padding to five pixels.
- Save the file and open your website home page.
- Add a new paragraph element to the home page HTML file.
- Add your new class to the paragraph element, and include the text "myclass test".
- Save the file and review the changes in your browser.

### ID Attribute
- Open the home page file for your website.
- Below your "myclass" paragraph element, create a new `style` element.
- Within the `style` element, create a new style object with an ID (name) set to "h1style".
- Set a background color of `salmon`.
- Set a text color of `navy`.
- Set padding to fifteen pixels.
- Next, create a new `h1` element.
- Set the header element to use the "h1style" attribute ID.
- Set the text to "test header" or something similar.
- Save the file and review the changes in your browser.

### Iframes
- Open the page 2 file for your website.
- Add an iframe element somewhere in the body of your page 2 file.
- The iframe should be sized to have a width of 350 and a height of 250.
- The source page should point to your website home page.
- The title should be "Website Home".
- Save the file and review the changes in your browser.

### Javascript Buttons
- Open the page 3 file for your website.
- Below the table element, add a new paragraph element.
- Set the paragraph element to use the "demo" attribute ID.
- Set the text to "JavaScript Button Demo" or something similar.
- Next, add two script elements and two button elements.
- The buttons should change the background and text *colors* of the paragraph element, when clicked.
- Save the file and review the changes in your browser.
- Read this W3 page if you get stuck: https://www.w3schools.com/html/html_scripts.asp
- Share your finished work with a classmate, before continuing.


## AWS

### S3 Versioning
- Search 'S3' in the AWS console (top of screen).
- Navigate to the general purpose bucket you created during week 8.
- Click the bucket and then click the "Properties" tab for the bucket.
- Scroll to "Bucket Versioning" and click "Edit".
- Select "Enable" and click "Save changes".
- Next, click the "Objects" tab for the bucket.
- Find a new image to upload to your bucket, but make sure to give it the same name as the original image.
- Click "Upload", then drag and drop the image to the bucket, and click "Upload".
- Return to the "Objects" tab of your bucket.
- Click the "Show versions" slider (center of screen).
- Note the changes to the rows and columns.
- Lastly, identify the "Version ID" for the original image *and* the newly added image.

### S3 Replication
- Search 'S3' in the AWS console (top of screen).
- Navigate to the general purpose bucket you created during week 8.
- Note the region of your bucket, for example your bucket might be in `us-west-1`.
- Change regions (top right of screen) to `us-west-2` or some region where you don't have a bucket.
- Return back to the general purpose bucket page within the S3 console.
- Create a new bucket, named "coding-hour-bucket-1-replication" or something similar.
- Make sure versioning is enabled on the bucket.
- Once the bucket is created, click on your original bucket (not the new one).
- Click the "Management" tab, scroll down to "Replication rules" and click "Create replication rule".
- Set a rule name like, "replicate-coding-hour-bucket-1".
- Under the source bucket section, select "Apply to all objects in the bucket".
- Under the destination section, select your replication bucket by clicking "Browse S3".
- Under the IAM role section, select "Create new role".
- Leave all other settings to their defaults, and click "Save".
- Lastly, you will be prompted to replicate existing objects. Choose "No" to avoid one time charges.

### S3 Replication Test
- Try adding new file to your coding hour bucket.
- Wait ~15 seconds and then view the files in your replication bucket.
- You should see the new file appear.
- Click the slider to "show versions".
- Compare the Version IDs for the image, in both buckets.

### S3 Storage Classes
- Explore the following AWS documentation:
- https://aws.amazon.com/s3/storage-classes/
- Then, review the following diagram:
![](https://zesty.co/wp-content/uploads/2022/04/amazon-s3-aws-storage-classes.png)
> AWS Storage Class Diagram
- Discuss the following with your classmates...
- Which storage class offers the best long-term storage?
- Which storage class offers best short-term storage?
- Which storage class should be used for unknown storage needs?
- What is the durability for all storage classes?
- What is the availability SLA for all storage classes?
