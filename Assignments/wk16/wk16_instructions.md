**`Week 16 - JavaScript ...; AWS ...`**

## JavaScript

### Question 1 - More with Arrays, Pt.1
- For the next couple questions we'll be continuing to practice with arrays.
  - *HTML*
- Create a new HTML file or copy of one of your website HTML files, and name it `wk16.html`.
- Inside the HTML file, create one new paragraph element within the body.
- Add the `id` attribute to the paragraph element, and set the value `wk16`.
- The paragraph element should be closed without any text inside.
- Below the paragraph element, add a script element.
- Add the source attribute to the script element, and set it to `wk16.js`.
- Save the HTML file.
  - *JavaScript*
- Create a new JavaScript file, name it `wk16.js`, and open it.
- Within the JavaScript file, initialize an array named, `fruits`.
- Add the following strings to the array: `"Banana", "Orange", "Apple", "Mango", "Lemon", "Cherry"`.
- Next, write a get element by ID statement.
- The statement should target ID `wk16` and be set to `fruits`.
- Save the file, and check if your array is displaying correctly.

### Question 2 - More with Arrays, Pt.2
- Now we'll convert our existing HTML and JavaScript files to use a class, instead of an ID.
- First, replace `ID` with `class` in the HTML file.
- Second, replace `getElementById` with `getElementsByClassName` in the Javascript.
- Save the file, and check if your array is displaying correctly.
- This change should break your HTML file, and nothing should display.
- To fix this, we need to specify an element target of `[0]` for `getElementsByClassName`.
- Save the file, and check if your array is displaying correctly.

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
