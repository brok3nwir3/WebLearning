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

### Resource Groups & Tags
- Search 'EC2' in the AWS console (top of screen).
- If you don't have an active instance, launch a new EC2 instance with default settings.
- Next, click the instance to bring up the instance details page.
- Click the tab titled "Tags" (near the center of the screen).
- Click "Manage tags".
- Add a new tag called "coding-hour" and save the change.
- Return to the "Tags" section of the instance details, and ensure the new tag is listed.
- Next, search 'Resource Groups & Tag Editor' in the AWS console (top of screen).
- Click the "Create rource group" button.
- Give the new group the name "coding-hour".
- Add a resource type of "AWS::EC2::INSTANCE".
- Select "coding-hour" for the tag to be used.
- Click "Create group".
- Lastly, click "Saved Resource Groups" and ensure your tagged EC2 instance is listed.
- Note: Tags and Resource Groups help AWS admins manage related resources, i.e. development vs. production.

### Instance Type Review
- Navigate to the following AWS documentation:
- https://aws.amazon.com/ec2/instance-types/
- Review the different instance types.
- Use the Internet (i.e. Google, ChatGPT, etc.) to search, "best aws instance for website hosting".
- What suggestions did you find? What considerations are there?

### EC2 Reserved Instances
- Search 'EC2' in the AWS console (top of screen).
- Click the section titled "Reserved Instances" under the "Instances" tab (left of the screen).
- Click the "Purchase Reserved Instances" button (right of screen); Don't worry, this won't immediately purchase anything.
- Several drop-down menus will appear on screen.
- Click through the different drop-down menus to review the options, and Google any questions you may have about the terminology used.
- Lastly, review the following AWS document, and determine the benefits of choosing a reserved instance:
- https://aws.amazon.com/compare/the-difference-between-on-demand-instances-and-reserved-instances/
- Note: For accounts with both on-demand and reserved instances, you'll have to view them in their respective instance tabs (i.e. they don't all show up in the same place).

### WIP
- Search 'EC2' in the AWS console (top of screen).
