**`Week 7 - HTML Images, JavaScript Intro, `**

## HTML

### Images
- Find a new animal image for page 2 of your website.
- Check the dimensions of your image, and ensure the image has a height equal to its width (square image).
- Download the image file and add it to your page.
- Add a style attribute to the image file, and set both the height and width to 300.
- Save the changes, open your HTML file in your browser, and review the changes.

### Image Map & JavaScript
- Add a `usemap` attribute to your image element, set to the value `#animal`
- Add an image `map` element named `"animal"` to your page 2 file.
- Next, add an `area` element within your map element.
- Set the area to use a `circle` shape, with coordinates `150`, `150`, and radius of `10`.
- Note: These coordinates are the middle of your 300x300 image.
- Set an `href` attribute to this page: https://en.wikipedia.org/wiki/Eye
- Add an `onclick` attribute, set to `"myFunction()"`within your area element.
- Next, add the following JavaScript *below* your `map` element:
`<script>`
`function myFunction() {`
`  alert("You found the animals eye!");`
`}`
`</script>`
- Lastly, adjust your coordinates and radius to actually map to the eye of your animal.
- Note: Use the W3 reference page, if you get stuck: https://www.w3schools.com/html/html_images_imagemap.asp
- Save the changes, open your HTML file in your browser, and review the changes.
- Share your page with the class.


## AWS

### Create & Attach an EBS Volume
- Search 'EC2' in the AWS console (top of screen).
- Make sure you have a running EC2 instance; create one if needed.
- Click the 'Storage' tab on the running instance.
- Review the Volume ID, Device name, and the region of the instance.
- Click the volume and review the information in the 'Details' tab, including 'Volume state' and 'Attached instances'.
- Navigate to the 'Elastic Block Storage' tab (left of screen).
- Click 'Volumes'.
- Note: You should see the automatically created EBS volume for your running instance in the list.
- Click 'Create volume'.
- Ensure all settings for the volume are set to default.
- Ensure the availability zone should be the same as your running instance.
- Click 'Create volume'.
- Return to the list of your volumes and wait for the new volume to be in an 'available' state.
- Next, click the volume, then click 'Actions' button and select 'Attach volume'.
- Lastly, discuss the following with the class...
- 1. Why the EBS feature is useful?
- 2. Why might somone attach multiple EBS volumes to a single instance?
- 3. Why might someone use EBS over an instance image?

### Migrate an EBS Volume to a new AZ
- Search 'EC2' in the AWS console (top of screen).
- Navigate to the 'Elastic Block Storage' tab (left of screen).
- Click 'Volumes' and select the previously create EBS volume.
- Click the 'Actions' button and select 'Create snapshot'.
- Click 'Snapshots' under the 'Elastic Block Storage' tab (left of screen).
- Select the new snapshot from the list.
- Click the 'Actions' button and select 'Create volume from snapshot'.
- Specify a new availability zone, for example `us-east-1b`, and click 'Create volume'.
- Click 'Volumes' tab (left of screen).
- You should now see the new volume with the specified availability zone.

### Create an EFS
- Search 'EC2' in the AWS console (top of screen).
- Navigate to the 'Security Group' tab (left of screen).
- Create a new security group called 'efs-demo' using the default settings.
- Search 'EFS' in the AWS console (top of screen).
- Click 'Create file system' and name the new EFS 'efs-demo'.
- Search 'EC2' in the AWS console (top of screen).
- Navigate to the 'Instances' tab (left of screen).
- Create a new EC2 instance, using the following settings...
- Name the instance 'efs-instance'.
- Add the 'efs-demo' security group and your previously created SSH-Allow rule.
- Make sure the default VPC for your account is selected.
- Assign one of the pre-made VPC subnets (any of them should work).
- Expand the 'File systems' option, and assign the 'efs-demo' file system.
- Leave all other settings to their defaults and click 'Launch instance'.

### Using the EFS and EFS Review
- After the EFS is created, return to the EFS page.
- Select 'demo-efs' from the list and review the 'Networking' settings.
- You'll notice a there is a security group for each AZ.
- Next, return to 'EC2' and view the 'Security Group' tab (left of screen).
- You'll notice a couple new security groups that were automatically created for the EFS.
- Next, connect to 'efs-instance'.
- From the command line, run the following commands:
`ls /mnt/efs/fs1/`
`sudo su`
`echo "hello world" > /mnt/efs/fs1/hello.txt`
`cat /mnt/efs/fs1/hello.txt`
- You've now verified the EFS is working correctly.
- Bonus: If you want see the benefit of an EFS, create a second instance with 'demo-efs' attached...
- Then connect to the new instance and view the shared file by running the following command:
`cat /mnt/efs/fs1/hello.txt`
Note: Remember to stop your instance after you're done with these exercises.
