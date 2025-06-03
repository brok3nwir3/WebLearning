
**`Week 15 - JavaScript On-click Events, Arrays, Events, CSS Display, For Loops, & Element by Class; AWS ...`**

## JavaScript

### Question 1 - Working with Arrays, Pt.1
- For this question, we'll be writing a script that hides/reveals a single element in an array.
  - *HTML*
- Create a new HTML file or copy of one of your website HTML files, and name it `wk15.html`.
- Inside the HTML file, create three new paragraph element within the body.
- Add the `class` attribute to all paragraph elements, set to the value `words`.
- The first paragraph should have the text: `Chameleon`
- The second paragraph should have the text: `Seagull`
- The third paragraph should have the text: `Ferret`
- Next, add a single button element, with text set to `Hide/Reveal`.
- Set the `onclick` attribute for the button element, and set the value to `hideText()`
- Below the paragraph elements, add a script element.
- Add the source attribute to the script element, and set it to `wk15.js`.
- Save the HTML file.
  - *JavaScript*
- Create a new JavaScript file, name it `wk15.js`, and open it.
- Within the JavaScript file, initialize one variable, `clicked`, equal to `false`.
- Next, create a function called `hideText`, which doesn't take any variables/parameters.
- Within the function, initialize one variable, `myText`, equal to `document.getElementsByClassName`.
- Then, pass `words` as the target class for `myText`.
- Next, you'll need to create one `if`, and one `else` statement.
- The `if` statement checks if `clicked` is `false`.
- If the statement evaluates to true, then set `clicked` to `true`.
- Additionally, the object at `myText` array position zero, should be set to `.style.display` equal to `"none"`.
- In the `else` statement, when it evaluates to true, we set `clicked` to `false`.
- Additionally, the object at `myText` array position zero, should be set to `.style.display`  equal to `"block"`.
- You should now have a button that alternates between hiding and revealing the first element in the `myText` array.
- Save the file, and check if your button is working correctly.

### Question 2 - Working with Arrays, Pt.2
- For this question, we'll be expanding our script to hide/reveal all of the elements in our array.
  - *HTML*
- No changes will be made to the HTML file.
  - *JavaScript*
- Open your JavaScript file, `wk15.js`.
- We need to add two `for` loops to the `hideText` function.
- The first `for` loop will wrap the `myText[0].style.display = "none";` action.
- The second `for` loop will wrap the `myText[0].style.display = "block"; ` action.
- Each for loop should `let` variable `i` equal 0, run for the `length` of the array, and increement by 1 on each run.
- Next, you will need to update your CSS display actions to point to the correct array index.
- You should now have a button that alternates between hiding and revealing all elements in the `myText` array.
- Save the file, and check if your button is working correctly.


## AWS

### Configuring AWS CLI; Pre-requisite (User Creation)
- Note: We'll be doing the "bad way" first; Using an IAM long-term credential, which we'll disable at the end.
- Start by opening the AWS console and searching "IAM".
- Next, click the "create user" button.
- Name the user `test-user`.
- Attach the `ReadOnlyAdmins` group (made during week 1-3 in this course) to the user.
- Click "Next" through the remaining pages, keeping all other settings to their defaults.

### Configuring AWS CLI; Pre-requisite (Access Key)
- Start by opening the AWS console and searching "IAM".
- From the "Users" list, click `test-user`.
- Select the "Security credentials" tab.
- Under the "Access keys" section, click the "Create access key" option.
- Select the "User case" as "CLI", and click "Next".
- Click "Create access key".
- Lastly, click the option to download the access key as a `.csv` file.

### Configuring AWS CLI; Pre-requisite (CLI Download)
- Navigate to the following page:
- https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html
- Download the required file for your operating system.
- Install the file on your computer.
- Open a terminal on your computer.
- Type `aws --version` and hit enter.
- If you see a version listed, then your installation was successful.

### Configuring AWS CLI; Pre-requisite (CLI Configuration)
- From your terminal, type `aws configure` and hit enter.
- Enter your AWS Access Key ID, Secret Access Key, and default region name.
- Hit enter to skip the output format prompt.
- From your terminal, type `aws s3 ls` and hit enter.
- If your configuration worked, you should see the S3 buckets we created earlier in the course.

## Disable Reminder
- This CLI IAM user isn't the most secure CLI access option, and should be disabled once you're finished.
