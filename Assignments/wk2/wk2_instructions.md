**`Week 2 - HTML Elements, Attributes, and AWS EC2.`**

## HTML

### Elements - Line Break
- Open the wk2 HTML file (or your previous HTML file).
- Update a heading element to say: 'WIP Website'.
- Update a paragraph element to say: 'This is a line break'.
- Add a line break into the paragraph element.

### Attribute - Image File (Relative URL)
- Create a folder called 'website'.
- Move your HTML file into the 'website' folder.
- Search the Internet for an cat image, save it to your 'website' folder, and name it 'cat1'.
- Add an image tag to the bottom of your HTML body.
- Set the image tag to use your cat1 image as the source, using the relative URL (file path).
- Set the image tag to use a width of 400 and a height of 400.

### Attribute - Tool Tip & Language+Country
- Add a tool tip to your image tag; the tool tip should display 'I really like this cat'.
- Set the language and country for the page.
- Refer to the W3 page on attributes, if you get stuck:
- https://www.w3schools.com/html/html_attributes.asp


## AWS

### IAM Policy Update (Add EC2 Read)
- Search "IAM" in the AWS console (top of screen).
- Click the 'Policies' tab (left side of screen).
- Search for 'ReadOnlyAdmin' and click the policy.
- Click the 'JSON' button.
- Click the 'Edit' button.
- Copy and paste in the contents of the ReadOnlyAdmin.json file from the wk2 folder.
- Click 'Next'.
- Click 'Save changes'.

### EC2 Security Group
- Search "EC2" in the AWS console (top of screen).
- Click the 'Security Groups' tab (left side of screen, nested under Network & Security).
- Click 'Create security group'.
- Name your security group 'ec2-ssh-allow'.
- Click the 'Inbound Rules' drop-down menu.
- Select 'SSH' under the 'Type' option.
- Select 'Anywhere-IPv4' under the 'Source' option.
- Leave all other options to their default setting, and click 'Create security group'.

### EC2 Key Pair
- Search "EC2" in the AWS console (top of screen).
- Click the 'Key Pairs' tab (left side of screen, nested under Network & Security).
- Click 'Create key pair'.
- Name the key pair 'test-instance-key'.
- Leave all other options to their default setting, click 'Create key pair'.

### EC2 Instance
- Search "EC2" in the AWS console (top of screen).
- Click the 'Instances' tab (left side of screen, nested under 'Instances').
- Click 'Launch instances'.
- Name the instance 'test-instance'.
- Select 'Ubuntu' as from the 'Application and OS Images' menu.
- Make sure the 'Instance type' is set to 'x.micro', i.e. 't2.micro'.
- Select 'test-instance-key' from the 'Key pair (login)' menu.
- Click 'Select existing security group' from the 'Network settings' menu.
- Select 'ec2-ssh-allow' from the 'Common security groups' drop-down menu.
- Leave all other options to their default setting, click 'Launch instance'.

#### EC2 Network Test 1
- Search "EC2" in the AWS console (top of screen).
- Click the 'Instances' tab (left side of screen, nested under 'Instances').
- Check that your 'test-instance' has a green 'Status check'. This may take a moment.
- Note the 'Public IPv4 address'.
- Open your local terminal and try to ping the IPv4 address of 'test-instance'.
- This should result in a 'Request timed out' message.

#### EC2 Network Test 2
- Search "EC2" in the AWS console (top of screen).
- Click the 'Security Groups' tab (left side of screen, nested under Network & Security).
- Click your 'ec2-ssh-allow' rule from the list.
- Click 'Edit inbound rules'.
- Click 'Add rule'.
- Select 'All ICMP - IPv4' from the 'Type' drop-down menu.
- Select 'Anywhere-IPv4' from the 'Source' drop-down menu.
- Click 'Save rules'.
- Ping the public IPv4 address of 'test-instance'; this should result in a ping reply.
- Lastly, edit your 'ec2-ssh-allow' security group, remove the ping rule, and save.
- Make sure ICMP (ping) traffic is once again disabled.

### IAM User Test
Log out of your root account.
Sign into your account (or a partners account) with the read-only user.
Search "EC2" in the AWS console (top of screen).
If you're able to view running EC2 instances, then the 'ReadOnlyAdmin' policy was updated successfully.
