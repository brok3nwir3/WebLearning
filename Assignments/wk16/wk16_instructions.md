**`Week 16 - JavaScript ...; AWS ...`**

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

### Question 2 - 
- 

### API Project Prep
- Read the JavaScript API Intro page:
- https://www.w3schools.com/js/js_api_intro.asp
- Next, search the Internet for a free geolocation API.
  - Example: https://app.ipgeolocation.io/
- Create a user account, if needed.
- Create an API key, if needed.
- Find the API documentation.
  - Example: https://ipgeolocation.io/documentation.html
- Try making a simple API call from your browser search bar (or curl via terminal).
  - Example: `https://api.ipgeolocation.io/v2/ipgeo?apiKey=API_KEY&ip=8.8.8.8`
- Once you've finished making the API call, share your progress with the class.

## AWS

### Configuring AWS CLI; Pre-requisite (User Creation)
- Note: We'll be doing the less secure way first; Using an IAM long-term credential.
- Start by opening the AWS console and searching "IAM".
- Next, click the "create user" button.
- Name the user `test-user`.
- Attach the `ReadOnlyAdmins` group (made during week 1-3 in this course) to the user.
- Click "Next" through the remaining pages, keeping all other settings to their defaults.
