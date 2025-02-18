**`Week 4 - HTML Comments, CSS, and AWS Billing.`**

## HTML

### Comments
- Open your HTML website file.
- Add a comment below the country/language element that states the author name.
- Note: You can simply say "Author: Anonymous" if you like.

### CSS File
- Drag or copy the `styles.css` file into your website folder.
- Add the following line of code to the top of your HTML file:
- `<link rel="stylesheet" href="styles.css">`
- Save the changes and open your HTML file; see if you notice any differences.

### CSS Updates
- Open your HTML website file.
- Remove any coloring or other styles that were added inline inside any of your existing elements.
- Open your styles.css file, and locate the `p` *selector* (i.e. paragraph).
- Add the following lines of code to your file:
- `font-family: verdana;`
- `font-size: 20px;`
- Save the changes and open your HTML file; see if you notice any differences.

## AWS

### EC2 SSH - Console Instance Connect
- Search 'EC2' in the AWS console (top of screen).
- Click the 'instances' button, under the resources menu (center of screen).
- Click the checkbox of an instance.
- Click 'connect' option (above the instance).
- This should take you to the 'EC2 Instance Connect' menu.
- Click 'Connect'.
- You should now be logged into your EC2 instance.
- Try running a few commands, like: whoami, ping google.com, ls, etc.
