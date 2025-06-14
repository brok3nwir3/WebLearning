**`Week 1 - Intro to Web Learning (HTML, CSS, JavaScript, AWS, etc.)`**

## HTML

### Setup
- Open Notepad or another text editor.
- Copy the contents of the `hello_world.html` file into the text editor.
- Save the file as: `hello_world.html` locally on your system, with 'Save as type' set to 'All Files'.

### Update 1
- Open the `hello_world.html` file in your editor.
- Update the title element to say: '<Your Name>'s Title Page'
- Update the heading element to say: 'Hello'
- Upate the paragraph element to say: 'World!'
- Save the file and open it again in your browser, to view the changes.

### Update 2
- Open the `hello_world.html` file in your editor.
- Copy the heading and paragraph elements, then paste them below the existing ones.
- Change the copied paragraph element to say 'Universe!'
- Save the file and open it again in your browser, to view the changes.


## AWS

### Setup
- Create a free-tier AWS account here:
- https://aws.amazon.com/free/

### Account Security
- Make sure your password is unique, i.e. it isn't used on any other websites or services.
- Save your password somewhere safe, ideally in a password manager.
- Enable multi-factor authentication (Suggestion: Authy is a great free MFA mobile app).

### IAM Policy
- Search 'IAM' in the AWS console (top of screen).
- Click the 'Policies' tab (left side of screen).
- Click 'Create policy'.
- Click the 'JSON' tab.
- Copy and paste in the contents of the ReadOnlyAdmin.json file.
- Name the policy 'ReadOnlyAdmin'.
- Click 'Create policy'.

### IAM User Group
- Search 'IAM' in the AWS console (top of screen).
- Click the 'User Groups' tab (left side of screen).
- Click 'Create group'.
- Name the group 'ReadOnlyAdmins'.
- Scroll down to Permissions, search 'ReadOnlyAdmin', and select this as the permission.
- Click 'Create user group'.

### IAM User
- Search 'IAM' in the AWS console (top of screen).
- Click the 'Users' tab (left side of screen).
- Click 'Create User'.
- Name the user 'auditor-ro'. Note: You could replace 'auditor' with the name of a classmate/partner.
- Click the checkbox for 'Provide user access to the AWS Management Console'.
- Select the radio button for 'I want to create an IAM user'.
- Under 'Console password' select the radio button for 'Custom password'.
- Set the password to: changeME123!@# 
- Click 'Next'.
- Attach the 'ReadOnlyAdmins' user group to the user, and click 'next' again.
- Click 'Create user'.
- Copy the 'Console sign-in URL'.


#### IAM User Test
- Log out of your root account.
- Paste the 'Console sign-in URL' into your browser.
- Try signing into the account with the read-only user.
- You should be prompted to change the users password to something new.

#### Check 1
- Next, search 'IAM' in the AWS console (top of screen).
- Click the 'Policies' tab (left side of screen).
- Search for the 'ReadOnlyAdmin' policy.
- If you see the policy, the first check is done.

#### Check 2
- Next, search 'EC2' in the AWS console (top of screen).
- If the page says 'Insuffcient permissions' or is blank, then your read-only user was created successfully.
